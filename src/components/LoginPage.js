import Navbar from "./Navbar";

function LoginPage({ user }) {
  return (
    <div>
      <Navbar />
      {user ? <h2> Welcome {user.displayName}</h2> : ""}
    </div>
  );
}
export default LoginPage;
