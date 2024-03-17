type User = {
  username: string;
}
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(res => res.map((user: User) => user.username))
  .then(userNames => console.log(userNames));
