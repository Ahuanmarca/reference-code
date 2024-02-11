import nodemailer from "nodemailer";

const SENDER = {
  fullName: "Melany Farrel",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "melany0@ethereal.email",
    pass: "Thg8aqcPqbkahHZ5py",
  },
};

const RECEIVER = "imogene.spencer69@ethereal.email";

const transporter = nodemailer.createTransport(SENDER);

const message = {
  from: '"Melany Farrel 👻" <melany0@ethereal.email>',
  to: RECEIVER, // Messages never get delivered
  subject: "hello, world ✔",
  text: "Hello world?",
  html: `<h1>test!</h1><br><b>hello, world</b><br><p>Email sent with nodemailer and ethereal email.`,
};

async function main() {
  const info = await transporter.sendMail(message);
  console.log(`Message sent: ${info.messageId}`);
  console.log("Preview URL: ", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
