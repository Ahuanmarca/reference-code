import bcrypt from 'bcrypt';

const password = '90Carmen..Esp';
const hash = '$2y$10$WKIGqDjnNQtRswUFQCX1QeuW3Mk2gg7M0RGFdD2MtQWUSbIlAzWle';

async function main() {
  await bcrypt.compare(password, hash);
}

main();
