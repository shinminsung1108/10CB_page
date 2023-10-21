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
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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

  const tierMenu = [
    { tier: "아이언" },
    { tier: "브론즈" },
    { tier: "실버" },
    { tier: "골드" },
    { tier: "플레티넘" },
    { tier: "다이아" },
    { tier: "마스터" },
    { tier: "그마" },
    { tier: "챌린저" },
    { tier: "졸업티어" },
  ]

  const raceMenu = [
    { race: "프로토스" },
    { race: "테란" },
    { race: "저그" },
  ]

  console.log(user.race)

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

          <FormControl margin="normal" fullWidth>
            <InputLabel id="tier">티어</InputLabel>
            <Select
              value={user.tier}
              label="티어"
              onChange={handleChange}
              name="tier"
            >
              {tierMenu.map((item) => {
                return <MenuItem value={item.tier}>{item.tier}</MenuItem>
              })}
            </Select>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel id="race">주종</InputLabel>
            <Select
              value={user.race}
              label="주종"
              onChange={handleChange}
              name="race"
            >
              {raceMenu.map((item) => {
                return <MenuItem value={item.race}>{item.race}</MenuItem>
              })}
            </Select>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel id="race2">부종</InputLabel>
            <Select
              value={user.race2}
              label="부종"
              onChange={handleChange}
              name="race2"
              disabled={!user.race} // 주종이 선택되지 않은 경우에는 비활성화
            >
              {raceMenu
                .filter((item) => item.race !== user.race) // 주종과 같은 부종을 제외하고 보여줍니다
                .map((item) => (
                  <MenuItem value={item.race} disabled={item.race === user.race || item.race === user.race2}>{item.race}</MenuItem>
                ))}
            </Select>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel id="race3">부부종</InputLabel>
            <Select
              value={user.race3}
              label="부부종"
              onChange={handleChange}
              name="race3"
              disabled={!user.race2} // 부종이 선택되지 않은 경우에는 비활성화
            >
              {raceMenu
                .filter((item) => item.race !== user.race && item.race !== user.race2) // 주종, 부종과 같은 부부종을 제외하고 보여줍니다
                .map((item) => (
                  <MenuItem value={item.race} disabled={item.race === user.race || item.race === user.race2 || item.race === user.race3}>{item.race}</MenuItem>
                ))}
            </Select>
          </FormControl>
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
