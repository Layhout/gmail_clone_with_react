import { Avatar, IconButton } from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import "./styles/header.css"
import { useDispatch, useSelector } from "react-redux"
import { logout, selectUser } from "../features/userSlice"
import { auth } from "../fb/firebase"

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        }).catch(err => alert(err.message));
    }

    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="" />
            </div>
            <div className="header_middle">
                <SearchIcon />
                <input type="text" placeholder="Search Mail" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar src={user?.photoUrl} onClick={signOut }/>
            </div>
        </div>
    )
}

export default Header
