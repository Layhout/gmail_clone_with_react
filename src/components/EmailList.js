import { Checkbox, IconButton } from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import RedoIcon from "@material-ui/icons/Redo"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide"
import SettingsIcon from "@material-ui/icons/Settings"
import InboxIcon from "@material-ui/icons/Inbox"
import PeopleIcon from "@material-ui/icons/People"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import Section from "./Section"
import "./styles/emailList.css"
import EmailRow from "./EmailRow"
import { useEffect, useState } from "react"
import { db } from "../fb/firebase"

const EmailList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails").orderBy("timestamp", "desc").onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        }))))
    }, [])

    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList_sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>
            <div className="emailList_list">
                {emails.map(email => ( 
                    <EmailRow title={email.data.to} subject={email.data.subject} des={email.data.message} time={new Date(email.data.timestamp?.seconds * 1000).toUTCString()} id={email.id} key={email.id} />
                ))}
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
                <EmailRow title="Test" subject="dummies" des="blah blah" time="10pm" />
            </div>
        </div>
    )
}

export default EmailList
