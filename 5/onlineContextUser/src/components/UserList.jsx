import { useEffect } from "react";
import useUserContext from "../contexts/user";

const UserList = () => {
  const { userState, setUserState } = useUserContext();

  const changeRandom = () => {
    const index = Math.floor(Math.random() * Object.keys(userState).length);
    const newUsers = {};
    Object.entries(userState).map((name, idx) => {
      if (idx === index) name[1] = !name[1];
      newUsers[name[0]] = name[1];
    });
    setUserState(newUsers);
  };

  useEffect(() => {
    const interval = setInterval(changeRandom, 2000);
    return () => clearInterval(interval);
  }, [userState]);

  return (
    <div>
      {Object.entries(userState).map((user, idx) => {
        return <p key={idx}>{`${user[0]}: ${user[1] ? "🟢" : "🔴"}`}</p>;
      })}
    </div>
  );
};

export default UserList;
