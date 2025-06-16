import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// 1. Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 2. Email options
const receiverName = "Mr. Ankit Patidar";

const html = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; background-color: #f9f9f9;">
    <div style="text-align: center;">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_India.svg/1920px-Flag_of_India.svg.png" alt="Indian Flag" width="100" />
      <h2 style="margin-top: 10px; color: #1a237e;">Government of India</h2>
      <p style="font-size: 14px; color: #444;">Ministry of Personnel, Public Grievances and Pensions</p>
    </div>

    <hr style="margin: 20px 0;" />

    <p style="font-size: 16px; color: #333;">Respected ${receiverName},</p>

    <h3 style="color: #0d47a1;">📢 New Government Job Vacancy Notification</h3>
    <p style="font-size: 16px; color: #333;">
      We are pleased to inform you about a new job opening in the Indian government sector. Below are the details:
    </p>

    <table style="width: 100%; font-size: 15px; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ccc;"><strong>Position</strong></td>
        <td style="padding: 8px; border: 1px solid #ccc;">Junior Engineer (Civil)</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ccc;"><strong>Department</strong></td>
        <td style="padding: 8px; border: 1px solid #ccc;">Public Works Department</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ccc;"><strong>Location</strong></td>
        <td style="padding: 8px; border: 1px solid #ccc;">Delhi</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ccc;"><strong>Last Date to Apply</strong></td>
        <td style="padding: 8px; border: 1px solid #ccc;">30th June 2025</td>
      </tr>
    </table>

    <p style="margin-top: 20px; font-size: 15px; color: #333;">
      You are requested to apply through the official government portal using the link provided below:
    </p>

    <div style="text-align: center; margin: 20px 0;">
      <a href="https://www.ncs.gov.in" target="_blank" style="background-color: #0d47a1; color: white; text-decoration: none; padding: 12px 25px; border-radius: 5px; font-size: 15px;">
        Apply Now
      </a>
    </div>

    <p style="font-size: 13px; color: #888; text-align: center;">
      This is an automated notification from the Government of India Employment Services.
    </p>
  </div>
`;


const mailOptions = {
  from: process.env.EMAIL_USER,
  to: "ankitpatidar2597@gmail.com",
  subject: "Government Job Vacancy Notification",
  html:html
};

// 3. Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
