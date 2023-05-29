import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const User = () => {

    const [username, setUsername] = useState("");
    const [isUsername, setIsUsername] = useState(true);
  
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
  
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);  
  
    const handleUsernameChange = (event) => {
      const value = event.target.value;
      setUsername(value);
      setIsUsername(value.length > 2); // Example validation condition
    };
  
    const handleEmailChange = (event) => {
      const value = event.target.value;
      setEmail(value);
      setIsEmailValid(validateEmail(value));
    };
  
    const handlePasswordChange = (event) => {
      const value = event.target.value;
      setPassword(value);
      setIsPasswordValid(validatePassword(value));
    };
    
  
    const validateEmail = (email) => {
      // Regular expression pattern for email validation
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    };
  
    const validatePassword = (password) => {
      // Regular expression pattern for password validation
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,18}$/;
      return pattern.test(password);
    };
  
    return (
      
      <div>
        <form>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            margin={"auto"}
            marginTop={5}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "0px 5px 10px #ccc",
              },
            }}
          >
            <Typography
              variant="h3"
              padding={2}
              textAlign="center"
              sx={{ fontSize: 24 }}
            >
              Sign up
            </Typography>
            <Typography variant="h6" padding={1} sx={{ fontSize: 16 }}>
              Username
            </Typography>
            <TextField
              id="username"
              name="name"
              value={username}
              type={"text"}
              variant="outlined"
              placeholder="e.g: GenZ"
              onChange={handleUsernameChange}
              error={!isUsername}
              helperText={!isUsername ? "Username is required" : ""}
              pattern="[a-zA-Z0-9_]+"
              required
            />
            <Typography
              variant="h6"
              padding={1}
              sx={{ fontSize: 16 }}
              textAlign={"left"}
            >
              Email
            </Typography>
            <TextField
              name="email"
              type="Email"
              variant="outlined"
              placeholder="e.g: genz@abc.com"
              value={email}
              onChange={handleEmailChange}
              error={!isEmailValid}
              helperText={!isEmailValid ? "Invalid email format" : ""}
              required
            />
            <Typography
              variant="h6"
              sx={{ fontSize: 16 }}
              padding={1}
              textAlign={"left"}
            >
              Create Password
            </Typography>
  
            <TextField
              name="password"
              sx={{ borderRadius: 5 }}
              type="password"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
              error={!isPasswordValid}
              helperText={!isPasswordValid ? "Invalid password format" : ""}
              required
            />
            <Button
              marginTop={3}
              sx={{
                borderRadius: 1,
                marginBottom: 2,
                marginTop: 4,
                backgroundColor: "black",
                fontSize: 12,
              }}
              variant="contained"
            >
              Sign up
            </Button>
            <Button
              marginTop={3}
              sx={{ borderRadius: 1, fontSize: 12 }}
              variant="contained"
            >
              Sign up with Google
            </Button>
            <Typography variant="h5" padding={1} textAlign={"center"}>
              Or
            </Typography>
            <Typography
              variant="h6"
              // padding={1}
              sx={{ fontSize: 20, marginLeft: 2 }}
              textAlign={"left"}
            >
              Already have an account?
              <Button
                marginTop={3}
                style={{ height: "25px" }}
                sx={{ borderRadius: 5, marginLeft: 4, fontSize: 18 }}
              >
                Login
              </Button>
            </Typography>
          </Box>
        </form>
      </div>
    );
  };