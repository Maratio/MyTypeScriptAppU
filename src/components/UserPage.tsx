import axios from "axios";
import { FC, useEffect, useRef, useState } from "react";
import List from "./List";
import UserItem from "./UserItem";
import { IUser } from "../types/types";
import { useNavigate } from "react-router-dom";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate()

  // const users: IUser[] = [
  //   {id: 1, name: 'Mar', email: 'asf@mail', address: {city: 'Moscow', street: 'Lenina', zipcode: '11'}},
  //   {id: 2, name: 'Rik', email: 'hhhh@mail', address: {city: 'Monreal', street: 'Kenina', zipcode: '12'}},

  // ]

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem onClick={(user) => navigate("/users/" + user.id)} user={user} key={user.id}/>
        )}
      />
    </div>
  );
};

export default UserPage;
