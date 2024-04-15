const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: false,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        let mailOptions  = {
            from: process.env.MAIL_USER,
            to: email,
            subject: title,
            html: `<p>Enter the following OTP to register on the MNNIT Connect Hub:<strong>${body}</strong></p>`
        };

        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.Response);
        return info;

    } 
    catch (error) {
        console.error(error);
        throw new Error("Error sending email. Please try again later.");
    }
};

module.exports = mailSender;










/*
// using nodemailer for sending mail
const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    });
    const info = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    // console.log(info);
    return info;
  } catch (error) {
    console.log("mail send error");
    console.log(error);
  }
};

module.exports = mailSender;

*/