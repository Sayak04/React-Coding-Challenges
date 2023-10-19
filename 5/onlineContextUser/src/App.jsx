import { useState } from "react";
import { UserContextProvider } from "./contexts/user";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  const [userState, setUserState] = useState({
    Bob: true,
    Gary: false,
    Jessica: true,
    Sam: true,
    Eric: true,
  });

  return (
    <UserContextProvider value={{ userState, setUserState }}>
      <div className="main-container">
        <h2>List of Online Users</h2>
        <UserList />
      </div>
    </UserContextProvider>
  );
}

export default App;
