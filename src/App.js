import { useState } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Auth from "./components/Auth";

function App() {
  const [user, Setuser] = useState(null);
  return (
    <div className="App">
      {user ? <LoginPage user={user} /> : <Auth Setuser={Setuser} />}
    </div>
  );
}

export default App;
