const password = 'you-will-never-guess'
const hash = await Bun.password.hash(password);
console.log(password);
console.log(hash);
const isMatch = await Bun.password.verify(password, hash);
console.log(isMatch);

// use argon2 (default)
const argoHash = await Bun.password.hash(password, {
  algorithm: 'argon2id',
  memoryCost: 4,
  timeCost: 3,
});
console.log(argoHash);

// use bcrypt
const bcryptHash = await Bun.password.hash(password, {
  algorithm: 'bcrypt',
  cost: 4,
});
console.log(bcryptHash);

