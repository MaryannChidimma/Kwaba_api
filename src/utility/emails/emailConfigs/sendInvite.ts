import constants from "../../../config/constants";
import { InvitationEmailIterface } from "../../../interfaces/EmailInterface";
import { sendEmail } from "../emailActions";

const sendInvitationEmailToUser = async (
  emailData: InvitationEmailIterface
) => {
  const emailBody = `Hey, \n
    You have been invited to a saving plan, click on this link to <a href=${emailData.acceptLink}>accept</a>t or <a href=${emailData.acceptLink}>decline</a> : \n
    If you did not make this change, please kindly reset your password.`;
  let theEmailData = {
    sender_email: constants.EMAIL_CONFIGURATION.EMAIL_FROM!,
    receiver_email: emailData.email,
    email_body: emailBody,
    email_subject:  "Kwaba Saving Plan Invite",
  };

  await sendEmail(theEmailData);
};

export { sendInvitationEmailToUser};
