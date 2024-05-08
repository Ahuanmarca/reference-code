// ReturnType type

function greet() {
  return 'hello, world'
}

type Return = ReturnType<typeof greet>

const greeting: Return = greet();

console.log(greeting);

async function bye() {
  return 'goodbye';
}

type AwaitedReturn = Awaited<ReturnType<typeof bye>>;

const chau: AwaitedReturn = await bye();

console.log(chau);


