interface Auth {
  username: string;
  password: string;
}

function authenticate(request: Auth) {
  const { username, password }: Auth = request;
  if (!username || !password) {
    return 'Wrong credentials';
  }
  return `Logged in as ${username}`;
}

authenticate({ username: 'johndoe', password: 'jowh'});
