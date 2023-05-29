import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const login = () => {
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
          <TextField type="Email" variant="outlined" />
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
              borderRadius: 10,
              paddingTop: 1.5,
              paddingBottom: 1.5,
              marginBottom: 2,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 4,
              height:40,
              backgroundColor: "black",
              textAlign: "center",
              fontSize: 14,
            }}
            variant="contained"
          >
            Login
          </Button>
          <Button
            marginTop={3}
            style={{ height: "25px" }}
            sx={{ borderRadius: 5, marginLeft: 5, fontSize: 18 }}
            textAlign={"right"}
          >
            Forgot Password?
          </Button>
          <Typography variant="h5" padding={1} textAlign={"center"}>
            Or
          </Typography>
          <Button
       
            sx={{
              borderRadius: 10,
              paddingTop: 1.5,
              paddingBottom: 1.5,
              marginBottom: 2,
              marginLeft: 2,
              marginRight: 2,
              height:40,
              textAlign: "center",
              fontSize: 14,
            }}
            var
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
