import { Button } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { auth, provider } from "../fb/firebase"
import { login } from "../features/userSlice"
import "./styles/login.css"

const Login = () => {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        }).catch(err => alert(err.message));
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png" alt="" />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
