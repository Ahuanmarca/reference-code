import nodemailer from "nodemailer";
import getTransporter from "./transporter.js";

async function main() {
  const transporter = await getTransporter();
  console.log(transporter.options);

  const message = {
    from: "sender@example.com",
    to: "recipient@example.com",
    subject: "hello, nodemailer",
    text: "hello, nodemailer",
    html: `<h2>hello, nodemailer</h2><br>
<pre>
Email generated with ethereal.email
sender: ${transporter.options.auth.user}
</pre>`,
  };

  const info = await transporter.sendMail(message);
  console.log("Message sent! ", info.messageId);
  console.log("Preview URL: ", nodemailer.getTestMessageUrl(info));
};

main().catch(console.error);