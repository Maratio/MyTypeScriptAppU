import React, { FC } from "react";
import { UserListProps } from "../types/types";
import UserItem from "./UserItem";

const UserList: FC<UserListProps> = ({ users, b}) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} b={b}/>
      ))}
    </div>
  );
};

export default UserList;
