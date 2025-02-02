import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosPage from "./components/TodosPage";
import UserPage from "./components/UserPage";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>
        <Routes>
          <Route path={"/users"} element={<UserPage />} />
          <Route path={"/users/:id"} element={<UserItemPage />} />
          <Route path={"/todos"} element={<TodosPage />} />
          <Route path={"/todos/:id"} element={<TodoItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
