import TodoList from "./components/TodoList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const URL = process.env.REACT_APP_SERVER_URL || "https://todo-app-api-hemx.onrender.com"

function App() {
  return (
    <div className="app">
      <div className="todo-container">
        <TodoList />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
