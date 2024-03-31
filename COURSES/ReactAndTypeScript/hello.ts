// Union Type
type UserId = string | number;

// Arrays
type Hobbies = Array<string>;

interface Credentials {
  password: string;
  email: string;
}

// Objects
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: UserId;
  hobbies: Hobbies;
  credentials: Credentials;
};

// Declare a user with our type
const user: User = {
  name: "John",
  age: 42,
  isAdmin: true,
  id: "john007",
  hobbies: ["sky", "soccer"],
  credentials: {
    password: "renzoABC",
    email: "renzo@example.com",
  },
};

// Function
function greet(user: User): string {
  return `hello, ${user.name}!`;
}

console.log(user);
console.log(greet(user));

type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser;

const AppAdmin: AppAdmin = {
  permissions: ["login"],
  userName: "Jane",
};

// Literal Types
type Role = 'admin' | 'user' | 'editor';
const role: Role = 'admin';
role;
