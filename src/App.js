import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes';
import Header from './component/Header';

function App() {
  return (
    <div className="App" style={{backgroundColor: 'rgb(70, 70, 70)'}}>
      <Header/>
      <AppRoutes/>
      
    </div>
  );
}

export default App;
