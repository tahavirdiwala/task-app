import './App.css'
import { AddTask } from './components/addTask'
import { TaskList } from './components/taskList'


function App() {
  return (
    <div className='main'>
    <AddTask />
    <TaskList/>
    </div>
  )
}

export default App
