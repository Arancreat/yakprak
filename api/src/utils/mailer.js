import nodemailer from "nodemailer";

const sendMail = (mailAddress) => {
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
        subject: "Test Email",
        text: "This is a test email sent using Nodemailer",
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};

export default sendMail;
