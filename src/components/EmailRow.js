import { Checkbox, IconButton } from "@material-ui/core"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined"
import "./styles/emailRow.css"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { selectMail } from "../features/mailSlice"

const EmailRow = ({ title, subject, des, time, id }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            des,
            time,
        }));
        history.push("/mail")
    }

    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow_option">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <h3 className="emailRow_title">{title }</h3>
            <div className="emailRow_message">
                <h4>
                    {subject}
                    <span className="emailRow_des"> - { des}</span>
                </h4>
            </div>
            <div className="emailRow_time">{ time}</div>
        </div>
    )
}

export default EmailRow
