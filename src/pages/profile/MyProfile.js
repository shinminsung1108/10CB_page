import { useSelector } from "react-redux";
import { Navbar } from "../Navbar";

export function MyProfile() {

    // @ts-ignore
    const { userStore: user } = useSelector((state) => state);
    return (
        <>
            <Navbar />
            <p>Username: {user.username}</p>
            <p>Tier: {user.tier}</p>
            <p>Race: {user.race}</p>
        </>
    )
}