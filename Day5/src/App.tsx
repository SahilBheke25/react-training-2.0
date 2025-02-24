import { Provider } from "react-redux";
import "./App.css";
import TodoApp from "./pages/TodoApp";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="text-center my-3">Todo App</h1>
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;
