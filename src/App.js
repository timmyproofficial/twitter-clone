import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Widgets from './components/widget/Widgets';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Widgets />
    </div>
  );
}

export default App;
