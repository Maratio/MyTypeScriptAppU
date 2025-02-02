import React, { FC } from 'react'
import { UserItemProps } from '../types/types'

const UserItem: FC<UserItemProps> = ({user,b}) => {
    return(
        <div  style={{ padding: 15, border: "1px solid gray"}}>
          {user.id}. {user.name} проживает в городе {user.address.city} на улице{" "}
          {user.address.street} {b}
        </div>
    )
}

export default UserItem