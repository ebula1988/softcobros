import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainMenu from './components/MainMenu';
import ClientsList from './components/ClientsComponents/ClientsList';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/clients" element={<ClientsList />} />
        
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
