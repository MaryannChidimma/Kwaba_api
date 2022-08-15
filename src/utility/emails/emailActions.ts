
import { EmailConfigSettings } from "../../interfaces/EmailInterface";
import constants from "../../config/constants";
import sgMail from '@sendgrid/mail';

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async function (emailBodySettings: EmailConfigSettings) {
  sgMail.setApiKey(constants.SENDGRID_API_KEY!);
  const msg = {
    to: emailBodySettings.receiver_email, // Change to your recipient
    from: emailBodySettings.sender_email, // Change to your verified sender
    subject: emailBodySettings.email_subject,
    html: emailBodySettings.email_body,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error?.response?.body?.errors)
    })
};

export { sendEmail };
