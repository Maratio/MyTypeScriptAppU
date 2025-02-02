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
    b: number
  }

export interface UserItemProps{
    user: IUser
    b : number
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