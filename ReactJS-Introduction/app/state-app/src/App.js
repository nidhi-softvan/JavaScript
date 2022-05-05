import Greetings from './greetings';
import LogButton from './button';
import './App.css';
import ParentComponent from './props';

function App() {
  return (
    <div className="App">
    <h1>Props</h1>
    <ParentComponent />
    <Greetings />
    <LogButton />
    </div>
  );
}

export default App;
