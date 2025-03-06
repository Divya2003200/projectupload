import { useContext } from "react";
import {contextcreate } from '@/components/contextex'

const User = () => {
  const { user, login, logout } = useContext(contextcreate);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name || "Guest"}</p>
      <p>Email: {user.email || "Not Logged In"}</p>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default User;
