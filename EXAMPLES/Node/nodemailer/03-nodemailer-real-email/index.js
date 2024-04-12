import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();
const { EMAIL, PASSWORD, RECIPIENT } = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});
// export default transporter;

async function main() {
  const info = await transporter.sendMail({
    to: RECIPIENT,
    subject: "This is a test mail from nodemailer!",
    text: "hello, world",
    html: `<h3>hello, world</h3>`,
  });

  console.log(`Message sent: ${info.messageId}`);
  console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  console.log(`Check receiver inbox! - username: melany0@ethereal.email / pw: Thg8aqcPqbkahHZ5py`)
}

main().catch(console.error);
