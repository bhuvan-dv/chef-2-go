import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, TextField, Tooltip, Zoom, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, ThemeProvider, createTheme, Paper, Box, FormControl, RadioGroup, FormControlLabel, Radio, } from '@mui/material';
// import logo from '../../assets/images/Project Management-2.jpg';
import { registerUser } from '../../services/UserAPI';
import { signUpField } from './SignUp.styles';
import { confirmPasswordStyle } from './SignUp.styles';
import { emailValidateStyle, sigUpButtonStyle } from './SignUp.styles';
import './/SignUp.styles'
import SignUpLoader from './SignUpLoader';

// SignUp Component
const SignUp = () => {
  const [username, setUserName] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(null);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidUsername, setIsValidUsername] = useState<boolean>(true);
  const [isValidname, setIsValidname] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [isMatchConfirmPassword, setIsMatchConfirmPassword] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isToolTipOpen, setIsToolTipOpen] = useState<boolean>(false);
  const [role, setRole] = useState<string>("customer");
  const passwordRequirementText =
    'Password requires at least one number, Uppercase, Lowercase, special Character with a min of 8 characters';
  const navigate = useNavigate();

  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  // Function to Handle SignUp onSubmit
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation before making API Call
    if (!isMatchConfirmPassword || !isValidEmail || !isValidPassword || !isValidUsername) {
      return;
    }

    const form_data = new FormData();

    form_data.append('name', name);
    form_data.append('email', email);
    form_data.append('password', password);
    form_data.append('confirmPassword', confirmPassword);
    form_data.append('role', role);
    form_data.append('username', username);

    // API Call for Registering User and Generating OTP
    try{
    registerUser(form_data)
      .then((res) => {
        console.log('email here: ', email);
        // Navigating OTP Page on Successful API call
        navigate(`/verification`, { state: { email: email, otpSecret: res.data.otpSecret } });
      })
      .catch((err) => {
        // Handling Error from API Call
        if (err.response.status === 400) {
          setEmailError('Email Already Exists');
          setIsValidEmail(false);
          console.log('Email Exists');
        }
        console.log(err.response.data);
      });
    }
    catch(e : any){
      alert(`${e.message}`)
    }
  };

  // Validating Email using Regex
  const validateEmail = (email: string) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
  };

  // Validating UserName using Regex
  const validateUserName = (username: string) => {
    const regex = /^[a-zA-Z ]{2,40}$/;
    return regex.test(username);
  };

  // Validating Password using Regex
  const validatePassword = (password: string) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.@*\s).{8,15}$/;
    return regex.test(password);
  };

  // Function handle Email value onChange
  const handleEmailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError(null);
    if (!validateEmail(event.target.value)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
    setEmail(event.target.value);
  };

  // Function to handle UserName value onChange
  const handleNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateUserName(event.target.value)) {
      setIsValidname(false);
    } else {
      setIsValidname(true);
    }
    setName(event.target.value);
  };
  // Function to handle UserName value onChange
  const handleUserNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateUserName(event.target.value)) {
      setIsValidUsername(false);
    } else {
      setIsValidUsername(true);
    }
    setUserName(event.target.value);
  };

  // Function to handle Password value onChange
  const handlePasswordOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!validatePassword(event.target.value)) {
      setIsValidPassword(false);
      setIsToolTipOpen(true);
    } else {
      setIsValidPassword(true);
      setIsToolTipOpen(false);
    }
    setPassword(event.target.value);
  };

  // Function to handle ConfirmPassword Value onChange and Validation
  const handleConfirmPasswordOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (password !== event.target.value) {
      setIsMatchConfirmPassword(false);
      setPasswordMatchError(`Passwords don't match`);
    } else {
      setIsMatchConfirmPassword(true);
      setPasswordMatchError(null);
    }
    setConfirmPassword(event.target.value);
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
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Paper className="sign-up-Image-container border p-4 my-4 rounded-md bg-gray-100" sx={{ marginTop: "10vh", marginLeft: "10vw", marginRight: "10vw", }}>
          <Typography className="block" variant="h4" sx={{ textAlign: "center", paddingTop: 2 }} gutterBottom>
            Sign Up
          </Typography>
          <Box className="signup-form-container" sx={{ display: "flex", justifyContent: "space-around", width: "80vw", margin: "auto auto", height: "70vh" }}>
            <SignUpLoader />
            <Box >
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
                width: "26em",
                height: "42em",
              }} className="signup-card">
                <form className="regForm" onSubmit={handleSignUp}
                  style={{border:"none`", height: "40em", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center",}}>
                  <Box className="formElements">
                    <TextField
                      style={signUpField}
                      sx={{ width: 300, }}
                      id="outlined-password-input"
                      label="Name"
                      type="text"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={handleNameOnChange}
                      required
                      error={!isValidUsername}
                    />
                  </Box>
                  <Box className="formElements">
                    <TextField
                      style={signUpField}
                      id="outlined-password-input"
                      label="Username"
                      type="text"
                      placeholder="Enter Your username"
                      value={username}
                      onChange={handleUserNameOnChange}
                      required
                      error={!isValidUsername}
                    />
                  </Box>
                  <Box className="formElements">
                    <TextField
                      style={signUpField}
                      id="outlined-password-input"
                      label="Email"
                      type="email"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={handleEmailOnChange}
                      required
                      error={!isValidEmail}
                    />
                    {<h5 style={emailValidateStyle}>{emailError}</h5>}
                  </Box>
                  <div className="formElements">
                    <Tooltip TransitionComponent={Zoom} open={isToolTipOpen} title={passwordRequirementText} TransitionProps={{ timeout: 500 }} arrow>
                      <TextField
                        style={signUpField}
                        onMouseEnter={() => setIsToolTipOpen(true)}
                        onMouseLeave={() => setIsToolTipOpen(false)}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={handlePasswordOnChange}
                        required
                        error={!isValidPassword}
                      />
                    </Tooltip>
                  </div>
                  <div className="confirmPasswordField">
                    <TextField
                      style={signUpField}
                      id="outlined-password-input"
                      label="Confirm Password"
                      type="password"
                      placeholder="Retype Your Password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordOnChange}
                      required
                      error={!isMatchConfirmPassword}
                    />
                    {<h5 style={confirmPasswordStyle}>{passwordMatchError}</h5>}
                  </div>
                  {/* user Roles */}
                  {/* <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Role"
                    onChange={handleRoleChange}
                    className="formElements"
                  >
                    <MenuItem value={"customer"}>customer</MenuItem>
                    <MenuItem value={"chef"}>chef</MenuItem>
                  </Select> */}
                  <FormControl component="fieldset" >
                    <RadioGroup aria-label="role" name="role" value={role} onChange={handleRoleChange}
                    // sx={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}
                    >
                      <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                      <FormControlLabel value="chef" control={<Radio />} label="Chef" />
                    </RadioGroup>
                  </FormControl>
                  <div className="signup-button">
                    <Button style={sigUpButtonStyle} type="submit" variant="contained">
                      Sign Up
                    </Button>
                  </div>
                  <div>
                    <p>
                      Existing User? <a className="signupToLogin" href="/login">Login</a>
                    </p>
                  </div>
                </form>
              </Paper>
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default SignUp;
