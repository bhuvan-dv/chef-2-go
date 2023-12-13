import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link, TextField, Card, Button, Typography, ThemeProvider, createTheme, Paper, Box, } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { otpVerification, sendOTP } from "../../services/UserAPI";
import logo from "./Wavy_Tech-17_Single-03.jpg";
import {
  otpButtonStyle,
  otpErrorStyle,
  otpFieldStyle,
  otpVerifiedIconStyle,
  resendOTPStyle,
} from "./OTPVerificatoinPage.styles";
import { stat } from "fs";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VerificationLoader from "../../components/OTPVerification/VerificationLoader";
import Header from "../../components/Header/Header";
import SidebarNav from "../../components/SideBarNav/SidebarNav";

type OTPVerificationPageProps = {
  email: string;
  otpSecret: string;
};

// OTP Verification Component
const OTPVerificationPage: React.FC = () => {
  const state = useLocation().state as OTPVerificationPageProps;

  console.log(state);
  const [email] = useState<string>(state ? state.email : "patil.basavaraj@gmail.com");
  const [OTP, setOTP] = useState<string>("");
  const [otpSecret, setOtpSecret] = useState<string>(state ? state.otpSecret : "123456");
  const [otpMisMatchError, setOtpMisMatchError] = useState<string | null>(null);
  const [isValidOTP, setIsValidOTP] = useState<boolean>(true);
  const [isOTPVerified, setIsOTPVerified] = useState<boolean>(false);

  const [minutes, setMinutes] = useState<number>(2);
  const [seconds, setSeconds] = useState<number>(0);

  const navigate = useNavigate();

  // Function Start OTP timer everytime the Component Renders
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

  // Function to Handle Resend OTP onClick
  const handleResendOTP = (e: React.MouseEvent) => {
    e.preventDefault();
    setOtpMisMatchError(null);
    setOTP("");
    const form_data = new FormData();

    form_data.append("email", email);

    // API call to Resend OTP
    sendOTP(form_data)
      .then((res) => {
        setOtpSecret(res.data.otpSecret);
        setIsValidOTP(true);
        setMinutes(2);
        setSeconds(0);

        console.log(res);
      })
      .catch((err) => {
        // Handling Error from API
        if (err.response.status === 400 || err.response.status === 500) {
          setOtpMisMatchError("Error with server");
        }
        console.log(err.response.data);
      });
  };

  // Function to handle OTP Verification onSubmit
  const handleVerification = (e: React.MouseEvent) => {
    e.preventDefault();
    const form_data = new FormData();
    console.log(email);
    form_data.append("email", email);
    form_data.append("otpSecret", otpSecret);
    form_data.append("otp", OTP);
    console.log(form_data);

    // Making API Call to Verify OTP
    otpVerification(form_data)
      .then((res) => {
        if (res.status === 201) {
          setIsOTPVerified(true);
          toast.success('OTP Verified Successfully!');
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          console.log("Invalid OTP");
        }
      })
      .catch((err) => {
        // Handling Error from API call
        if (err.response.status === 401) {
          setIsValidOTP(false);
          setOtpMisMatchError("Invalid OTP");
        }
        console.log(err.response.data);
      });
  };

  // Function to Handle OTP value onChange
  const handleOTPOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsValidOTP(true);
    setOTP(event.target.value);
    setOtpMisMatchError(null);
  };
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            textTransform: 'none',
          },
        },
      },
    },
    typography: {
      fontSize: 18,
      fontFamily: 'Morion',
    },
    palette: {
      secondary: {
        main: '#38524f',
        dark: 'hsl(43, 21%, 94%)',
        light: 'hsl(43, 21%, 94%)',
      },
    },
  });
  let [menuState, setMenuState] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
            <Header menuState={menuState} setMenuState={setMenuState}/>
        <SidebarNav menuState={menuState} setMenuState={setMenuState}/>
      <Paper className="border p-4 my-4 rounded-md bg-gray-100" sx={{ marginTop: "10vh", marginLeft: "10vw", marginRight: "10vw", }}>
        <Typography className="block" variant="h4" sx={{ textAlign: "center", paddingTop: 2 }} gutterBottom>
          Please Verify Your OTP
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-around", width: "80vw", margin: "auto auto", height: "70vh" }}>
          <VerificationLoader />
          <Paper elevation={3} sx={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "2em",
            border: "2px solid hsl(43, 21%, 94%)",
            transition: "border-color 0.2s ease-in-out",
            '&:hover': {
              borderColor: "hsl(43, 21%, 74%)",
            },
            width: "24em",
          }} className="otpVerification-card">
            {isOTPVerified ? (
              <Box>
                <CheckCircleOutlineRoundedIcon sx={otpVerifiedIconStyle} />
                <Typography variant="h6" className="otpVerifiedText">
                  OTP Verified
                </Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h6" className="otpVerification-heading">
                  OTP Verification
                </Typography>
                <Box className="otpField" sx={{ padding: 4 }}>
                  <TextField
                    color="secondary"
                    id="outlined-password-input"
                    type="text"
                    label="Enter OTP"
                    value={OTP}
                    onChange={handleOTPOnChange}
                    required
                    error={!isValidOTP}
                    variant="outlined"
                  />
                  {otpMisMatchError && <Typography style={otpErrorStyle}>{otpMisMatchError}</Typography>}
                </Box>
                <Box className="countdown-text" sx={{ padding: 2 }}>
                  {seconds > 0 || minutes > 0 ? (
                    <Typography className="counter">
                      Time Remaining:{" "}
                      <span className="time">
                        {minutes < 10 ? `0${minutes}` : minutes}:
                        {seconds < 10 ? `0${seconds}` : seconds}
                      </span>
                    </Typography>
                  ) : (
                    <Typography className="otp-NotRecieved-text">
                      Didn't receive code?{" "}
                      <Link className="resend-otp" style={resendOTPStyle} onClick={handleResendOTP}>
                        Resend OTP
                      </Link>
                    </Typography>
                  )}
                </Box>
                <Box className="otpSubmitButton" sx={{ padding: 2 }}>
                  <Button
                    style={otpButtonStyle}
                    type="submit"
                    variant="contained"
                    onClick={handleVerification}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            )}
          </Paper>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default OTPVerificationPage;
