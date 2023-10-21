import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import axios from "axios";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function Join() {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    username: "",
    password: "",
    tier: "",
    race: "",
    race2: "",
    race3: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = user;
      const response = await axios.post(`${api}/user/register`, data);
      const result = await response.data;
      console.log(result);
      if (result.success) {
        navigate("/Login");
      }
      alert("회원가입에 성공하였습니다!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            value={user.username}
            onChange={(e) => {
              handleChange(e);
            }}
            margin="normal"
            required
            fullWidth
            name="username"
            label="톡방 닉네임"
            autoFocus
          />
          <TextField
            value={user.password}
            onChange={(e) => {
              handleChange(e);
            }}
            margin="normal"
            required
            fullWidth
            label="비밀번호"
            type="password"
            name="password"
            autoComplete="current-password"
          />
          <TextField
            value={user.tier}
            onChange={(e) => {
              handleChange(e);
            }}
            margin="normal"
            required
            fullWidth
            label="티어"
            type="text"
            name="tier"
          />
          <TextField
            value={user.race}
            onChange={(e) => {
              handleChange(e);
            }}
            margin="normal"
            required
            fullWidth
            label="주종"
            type="text"
            name="race"
          />
          <TextField
            value={user.race2}
            onChange={(e) => {
              handleChange(e);
            }}
            margin="normal"
            fullWidth
            label="부종"
            type="text"
            name="race2"
          />
          <TextField
            value={user.race3}
            onChange={(e) => {
              handleChange(e);
            }}
            margin="normal"
            fullWidth
            label="부부종"
            type="text"
            name="race3"
          />
          <Box>
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
            <Grid item style={{ textAlign: "center" }}>
              <Link href="/Login" variant="body2">
                {"돌아가기"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
