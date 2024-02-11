import React, { useState } from 'react';

const CORRECT_CODE = '123456';

function TwoFactor() {
  const [auth, setAuth] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (auth === CORRECT_CODE) {
      window.alert('Correct!');
    } else {
      window.alert('Incorrect :(');
    }
    setAuth("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="auth-code">Enter authorization code:</label>
        <div className="row">
          <input
            id="auth-code"
            type="text"
            required={true}
            maxLength={6}
            value={auth}
            onChange={(e) => setAuth(e.target.value)}
          />
          <button>Validate</button>
        </div>
      </form>
    </>
  );
}

export default TwoFactor;