# `nodemailer` 

## Setup

To use `nodemailer` we must install it with `npm`:

```bash
npm i nodemailer
```

EMAIL and PASSWORD should be stored as environmental variables. We must install `dotenv` to set that up.

```bash
npm i dotenv
```

**DON'T FORGET TO PUT `.env` IN `.gitignore`.**

```bash
echo ".env" >> .gitignore
```

`.env` file example

```
EMAIL="foo@example.com"
PASSWORD="password"
RECIPIENT="melany0@ethereal.email"
```

## Usage

### Step 1: Create transporter

The settings (host, port, secure) depends on the email provider. This example uses gmail. The username and password are stored as environmental variables. **When using gmail, we must use an Application Password!**.

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

### Step 2: Send the email

For this example the recipient is also stored in the environmental variable.

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
