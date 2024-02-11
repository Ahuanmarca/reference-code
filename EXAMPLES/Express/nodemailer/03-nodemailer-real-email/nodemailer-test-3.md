# Explanation

To use `nodemailer` we must install it with `npm`:

```bash
npm i nodemailer
```

EMAIL and PASSWORD come from a .env file, so we also need to install `dotenv` and set up the variables in that file (ignored by `.gitignore` in this repository).

## To use `nodemailer`

### Step 1:

Create transporter

```js
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});
```

### Step 2:

Sent the email. For this example the recipient is also stored in the environmental variable.

```js
async function main() {
  const info = await transporter.sendMail({
    to: RECIPIENT,
    subject: "This is a test mail from nodemailer!",
    text: "hello, world",
    html: `<h3>hello, world</h3>`,
  });

  console.log(`Message sent: ${info.messageId}`);
}

main().catch(console.error);
```
