import { Button, IconButton } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import SideBarOption from "./SideBarOption"
import InboxIcon from "@material-ui/icons/Inbox"
import StarIcon from "@material-ui/icons/Star"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import NearMeIcon from "@material-ui/icons/NearMe"
import NoteIcon from "@material-ui/icons/Note"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PersonIcon from "@material-ui/icons/Person"
import DuoIcon from "@material-ui/icons/Duo"
import PhoneIcon from "@material-ui/icons/Phone"
import "./styles/sidebar.css"
import { useDispatch } from "react-redux"
import { openSendMessage } from "../features/mailSlice"

const SideBar = () => {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar_compose" onClick={()=> dispatch(openSendMessage())}>Compose</Button>
            <SideBarOption Icon={InboxIcon} title="Inbox" number={54} selected />
            <SideBarOption Icon={StarIcon} title="Starred" number={54} />
            <SideBarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
            <SideBarOption Icon={LabelImportantIcon} title="Important" number={54} />
            <SideBarOption Icon={NearMeIcon} title="Sent" number={54} />
            <SideBarOption Icon={NoteIcon} title="Drafts" number={54} />
            <SideBarOption Icon={ExpandMoreIcon} title="More" number={54} />
            <div className="sidebar_footer">
                <div className="sidebar_footerIcon">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default SideBar
