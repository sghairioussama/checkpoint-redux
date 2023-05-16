import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './Components/AddTask';
import ListTasks from './Components/ListTask';

function App() {
  return (
    <div className="App">
    <AddTask/>
    <ListTasks/>
    </div>
  );
}

export default App;