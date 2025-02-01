import { useEffect, useRef, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import { ITodo, IUser } from "./types/types";
// import UserList from "./components/UserList";
import axios from "axios";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import UserItem from "./components/UserItem";
import EventsExample from "./components/EventsExample";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [a, setA] = useState<number>(20);
  let b = useRef<number>(10);

  // const users: IUser[] = [
  //   {id: 1, name: 'Mar', email: 'asf@mail', address: {city: 'Moscow', street: 'Lenina', zipcode: '11'}},
  //   {id: 2, name: 'Rik', email: 'hhhh@mail', address: {city: 'Monreal', street: 'Kenina', zipcode: '12'}},

  // ]

  useEffect(() => {
    console.log("bRun", b);
    fetchUsers();
    fetchTodos();
  }, [b]);

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

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <EventsExample/>
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
        onClick={(num) => {
          console.log("click", num);

          b.current += 20;
          console.log("b", b);
          setA((prev) => (prev += prev));
        }}
      >
        <button>Кнопка</button>
      </Card>
      {/* <UserList users={users}/> */}
      <div>{a}</div>
      <div>{b.current}</div>

      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem user={user} key={user.id} b={b.current} />
        )}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};

export default App;
