import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export const sendEmail = async ({email, emailType, userId}:
    any) => {
    try {
        const hashedToken = await bcrypt.hash(userId.toString(), 10);
        if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId, {
                verifyToken : hashedToken,
                verifyTokenExpiry : Date.now() + 3600000
            })
        } else if(emailType === "RESET"){
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken : hashedToken,
                forgotPasswordTokenExpiry : Date.now() + 3600000
            })
        }

        const transporter = nodemailer.createTransport({
          host: "smtp.resend.com",
          port: 465,
          secure: true, // true for port 465 (SSL)
          auth: {
            user: "resend", // This is literally the exact string "resend" for everyone
            pass: process.env.RESEND_API_KEY, // Your API key
          },
        });

        const mailOptions = {
            from: "onboarding@resend.dev",
            to: email,
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href=${process.env.DOMAIN}/verifyemail?token=${hashedToken}>here</a> to ${emailType === "VERIFY" ? "verify our email" : "reset your password"} or copy and paste the link below in your browser ${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`,
        };

        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}
