import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { setUser } from "../pages/Login/Store"
import { Navigate } from "react-router-dom";

export function Home() {
    // @ts-ignore
    const { userStore: user } = useSelector((state) => state);
    
    console.log("sddfsddddd", user)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            dispatch(setUser({
                username: "",
                password: "",
                tier: "",
                race: "",
                race2: "",
                race3: "",
            }));
            navigate("/");
        } catch (err) {
            console.log(err)
            alert("로그아웃을 실패해 ?")
        }

    };

    if(user.username === '' || user.password === '') {
        return <Navigate to="/Login" />;
    }

    return (
        <div>
            <p>사용자 정보:</p>
            <p>Username: {user.username}</p>
            <p>Tier: {user.tier}</p>
            <p>Race: {user.race}</p>
            <Button onClick={handleSubmit}>로그아웃</Button>
        </div>
    );
}