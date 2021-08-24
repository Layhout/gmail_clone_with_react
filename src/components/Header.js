import { Avatar, IconButton } from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import "./styles/header.css"

const Header = () => {
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
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
