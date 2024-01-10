import './App.css';
import Mainarea from './Mainarea';
import Sidebar from './Sidebar';

export default function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
        <Mainarea />
      </div>
    </>
  );
}