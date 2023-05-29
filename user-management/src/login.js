import React from "react";
import { Box, Typography } from "@mui/material";

const login = () => {
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={450}
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
            Login
          </Typography>
          <Typography
            variant="h6"
            padding={1}
            sx={{ fontSize: 16 }}
            textAlign={"left"}
          >
            Email
          </Typography>
          <TextField
            type="Email"
            variant="outlined"
          />
          <Typography
            variant="h6"
            sx={{ fontSize: 16 }}
            padding={1}
            textAlign={"left"}
          >
            Enter Password
          </Typography>
          
          <TextField
            sx={{ borderRadius: 5 }}
            type="password"
            variant="outlined"
          
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
            Login
          </Button>
          <Button
              marginTop={3}
              style={{height:"25px"}}
              sx={{ borderRadius: 5, marginLeft: 5, fontSize: 18 }}
              textAlign={"right"}
            >
              Forgot Password?
            </Button>
            <Typography variant="h5" padding={1} textAlign={"center"}>
            Or
          </Typography>
          <Button
            marginTop={3}
            sx={{ borderRadius: 1, fontSize: 12 }}
            variant="contained"
          >
            Continue with Google
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default login;
