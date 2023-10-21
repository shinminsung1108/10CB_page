import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

export function Join() {

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'
                }}
            >
                <Typography component="h1" variant="h5">
                    회원가입
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="아이디"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="비밀번호"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="티어"
                        type="race"
                        id="race"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="주종"
                        type="race"
                        id="race"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="부종"
                        type="race2"
                        id="race2"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="부부종"
                        type="race3"
                        id="race3"
                    />
                    <Box>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            회원가입
                        </Button>
                        <Grid item style={{ textAlign: "center"}}>
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