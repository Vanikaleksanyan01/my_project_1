function MyForm() {
    return (

      <div>
        <label htmlFor="login"><b>Login:</b></label><br />
        <input type="login" id="login"/><br />

        <label htmlFor="password"><b>Password:</b></label><br />
        <input type="password" id="password" /><br /><br />

        <input type="checkbox"/><br />
        <button><b>Login</b></button>
      </div>
    );
  }
  
  export default MyForm;