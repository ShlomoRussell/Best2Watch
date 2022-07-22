import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { MoviesContextProvider, MoviesContext } from './context/fetchContext';

function App() {
    return (
        <MoviesContextProvider><Table /></MoviesContextProvider>
    );
}

export default App;
