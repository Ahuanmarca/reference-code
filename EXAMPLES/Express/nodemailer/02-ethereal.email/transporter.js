import nodemailer from "nodemailer";

export default async function () {
  const testAccount = await nodemailer.createTestAccount();
  console.log({ testAccount });
  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
  return transporter;
}
