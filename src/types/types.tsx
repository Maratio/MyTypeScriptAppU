interface IAddress{
    street: string
    city: string
    zipcode: string
}

export interface IUser{
    id: number
    name: string
    email: string
    address: IAddress
}

export interface UserListProps {
    users: IUser[];
  }

export interface UserItemProps{
    user: IUser
  }

export interface ListProps<T>{
    items: T[]
    renderItem: (item: T) => React.ReactNode 
  }

export interface ITodo {
    id: number
    title: string
    completed: boolean
}

export interface TodoItemProps{
    todo: ITodo
  }