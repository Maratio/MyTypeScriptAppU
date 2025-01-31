import React, { FC } from "react";
import { UserListProps } from "../types/types";
import UserItem from "./UserItem";

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default UserList;
