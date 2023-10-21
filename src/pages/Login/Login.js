import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { setUser } from "./Store"

export function Login() {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
    tier: "",
    race: "",
    race2: "",
    race3: "",
  })

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = loginUser;
      const response = await axios.post(`${api}/user/login`, data);
      const result = await response.data;
      console.log(result.user);
  
      if (result.success === true) {
        alert(`로그인에 성공하였습니다! ${loginUser.username}`);
        dispatch(setUser(result.user));
        navigate("/Home");
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      console.log(error);
      alert("로그인 실패");
    }
  };
  
  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };
  return (
    <Container>
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
          10CB
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            value={loginUser.username}
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
            value={loginUser.password}
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
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                비밀번호를 잊어버리셨나요 ?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Join" variant="body2">
                {"회원가입"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
