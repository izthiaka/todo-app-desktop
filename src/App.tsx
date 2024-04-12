import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import TaskList from "./ui/task/taskList";
import Izthiaka from "./ui/izthiaka/izthiaka";

function App() {
  return (
    <div>
      <Izthiaka />
      <TaskList />
    </div>
  );
}

export default App;
