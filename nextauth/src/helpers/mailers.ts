import nodemailer from "nodemailer";

export const sendEmail = async ({email, emailType, userId}:
    any) => {
    try {
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
            html: "<h1>Hello world?</h1>", 
        };

        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}
