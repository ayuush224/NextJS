/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";

export default async function sendEmail({email, emailType, userId} : any){
    try {
        /* Todo : Configure mail for usage */

        const transporter = nodemailer.createTransport({
            host: "smtp.example.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        /*Verify the connection (optional)
        Before sending emails, you can verify that Nodemailer can connect to your SMTP server. This is useful for catching configuration errors early. */

        try {
            await transporter.verify();
            console.log("Server is ready to take our messages");
        } catch (err : any){
            throw new Error(err.message);
        }

        const emailOptions = {
            from: '"ayush@google.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: "<b>Hello world?</b>",
        }

        const mailRespone = await transporter.sendMail(emailOptions);
        
        return mailRespone;
    } catch (error : any){
        throw new Error(error.message || "Something went worng during sending email");
    }
}