import { Button } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import SideBarOption from "./SideBarOption"
import InboxIcon from "@material-ui/icons/Inbox"
import StarIcon from "@material-ui/icons/Star"
import "./styles/sidebar.css"

const SideBar = () => {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar_compose">Compose</Button>
            <SideBarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SideBarOption Icon={StarIcon} title="Starred" number={54} />
        </div>
    )
}

export default SideBar
