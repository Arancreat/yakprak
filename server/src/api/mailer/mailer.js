import nodemailer from "nodemailer";
import logger from "../../utils/logger.js";

const sendMail = (mailAddress, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.MAIL_USER,
        to: mailAddress,
        subject: subject,
        text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            logger.fatal(error);
        } else {
            logger.info("Email sent: " + info.response);
        }
    });
};

export default sendMail;
