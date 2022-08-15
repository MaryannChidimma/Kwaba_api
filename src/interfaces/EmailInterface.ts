
interface EmailConfigSettings {
    sender_email: string;
    receiver_email: string;
    email_subject: string;
    email_body: string;
  }

  interface InvitationEmailIterface{
    email: string
    acceptLink :string;
    declineLink: string;
  }
  export { EmailConfigSettings, InvitationEmailIterface}