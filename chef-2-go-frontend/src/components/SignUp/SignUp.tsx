import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, TextField, Tooltip, Zoom } from '@mui/material';
// import logo from '../../assets/images/Project Management-2.jpg';
import { registerUser } from '../../services/UserAPI';
import { signUpField } from './SignUp.styles';
import { confirmPasswordStyle } from './SignUp.styles';
import { emailValidateStyle, sigUpButtonStyle } from './SignUp.styles';
import './/SignUp.styles'

// SignUp Component
const SignUp: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(null);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidUsername, setIsValidUsername] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [isMatchConfirmPassword, setIsMatchConfirmPassword] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isToolTipOpen, setIsToolTipOpen] = useState<boolean>(false);
  const passwordRequirementText =
    'Password requires at least one number, Uppercase, Lowercase, special Character with a min of 8 characters';
  const navigate = useNavigate();

  // Function to Handle SignUp onSubmit
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation before making API Call
    if (!isMatchConfirmPassword || !isValidEmail || !isValidPassword || !isValidUsername) {
      return;
    }

    const form_data = new FormData();

    form_data.append('userName', userName);
    form_data.append('email', email);
    form_data.append('password', password);
    form_data.append('confirmPassword', confirmPassword);
    form_data.append('role', 'chef');
    form_data.append('username', `${userName}_zzz`);

    // API Call for Registering User and Generating OTP
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

  return (
    <div>
      <div className="sign-up-Image-container">
        {/* <img className="signUp-Image" src={logo} alt="Sign UP" /> */}
      </div>
      <div className="signup-form-container">
        <Card sx={{ boxShadow: 7, borderRadius: 3 }} className="signup-card">
          <h1 className="signup-heading">Sign Up</h1>
          <form className="regForm" onSubmit={handleSignUp}>
            <div className="formElements">
              <TextField
                style={signUpField}
                id="outlined-password-input"
                label="Name"
                type="text"
                placeholder="Enter Your Name"
                value={userName}
                onChange={handleUserNameOnChange}
                required
                error={!isValidUsername}
              />
            </div>
            <div className="formElements">
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
            </div>
            {/* users username */}
            {/* <div className="formElements">
              <TextField
                style={signUpField}
                id="outlined-password-input"
                label="username"
                type="text"
                placeholder="Enter Your Username"
                value={userName}
                onChange={handleUserNameOnChange}
                required
                error={!isValidUsername}
              />
              {<h5 style={emailValidateStyle}>{emailError}</h5>}
            </div> */}
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
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
