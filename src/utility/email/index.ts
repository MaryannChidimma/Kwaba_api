
import nodemailer, { TransportOptions} from 'nodemailer'; 
import { BadRequestError } from '../../../lib/appError';

const mailer = async (to:string, subject:string, payload:any) => {
  /**
   * You need to set the keys in .env file to get this function working
   * the first part generate html template for the email body using handlebars view engine
   * in the createTransport method the options clientId, clientSecret and refreshToken
   * are required for gmail to work efficiently
   * follow this https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/
   * To know how to get the above credentials
   */
  try {
    const transporter= nodemailer.createTransport({
      service: "gmail",
      secureConnection: true,
      port: 587,
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENT_ID,
        accessToken: process.env.OAUTH_ACCESS_TOKEN,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      },
    });

    const info = {
      from: process.env.MAIL_USERNAME,
      to,
      subject,
      html : ` You have Been invited to ${payload.planName}, Kindly <a href=${payload.acceptLink}>accept</a> or <a href=${payload.declineLink}>decline</a> the request`,
      
    };

    const mail = await transporter.sendMail(info);
    return mail;
  } catch (error: any) {
    throw new BadRequestError(error.message);
  }
};

export default mailer;
