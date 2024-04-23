import axios from "axios";

function AuthPage(props) {

  function onSubmit(e) {
    e.preventDefault();
    const { value } = e.target[0];
    // props.onAuth({ username: value, secret: value });
    axios
      .post('http://localhost:8000/authenticate', { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value}))
      .catch((e) => console.log("Auth Error", e));
  }

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <div className="auth-lavel">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>

    
  );
}

export default AuthPage;
