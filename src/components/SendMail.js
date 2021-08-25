import { Button } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { db } from "../fb/firebase"
import { closeSendMessage } from "../features/mailSlice"
import firebase from "firebase"
import "./styles/sendMail.css"

const SendMail = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close" onClick={()=> dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("to", { required: true })} type="email" placeholder="To" />
                {errors.to && <p className="sendMail_error">To is required!</p>}
                <input {...register("subject", { required: true })} type="text" placeholder="Subject" />
                {errors.subject && <p className="sendMail_error">Subject is required!</p>}
                <textarea {...register("message", { required: true })} type="text" placeholder="Messager..." className="sendMail_message"></textarea>
                {errors.message && <p className="sendMail_error">Message is required!</p>}
                <div className="sendMail_options">
                    <Button variant="contained" color="primary" type="submit" className="sendMail_send" >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
