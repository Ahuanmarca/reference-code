console.log(`
Bun Password Hashing
Bun can verify passwords encrypted with bcrypt, and vice versa.
But!
Bun does not support $2a$ hashes, so we need to replace them with $2b$.

`)

const password = 'admin';
const hash = '$2a$10$AtCT2HGhcG7CAbRiDSxfDuXgh5Wrru6nSy3WpYwe7M2PWh32cuS2i';
const bunVerifyHash = await Bun.password.verify(password, hash); // false

const fixed_hash = hash.replace(/^\$2a\$/, '$2b$');
const bunVerifyFixedHash = await Bun.password.verify(password, fixed_hash); // true

console.log({
  password,
  hash,
  fixed_hash,
  bunVerifyHash,
  bunVerifyFixedHash,
});
