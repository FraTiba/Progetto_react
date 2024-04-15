import './App.css';
import { useState } from 'react';
import Header from './Common/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Common/Footer/Footer';

const App = () => {
  const [promemoria, setPromemoria] = useState([]);

  return (
    <div>
      <Header />
      <Home reminders={promemoria} setReminders={setPromemoria} />
      <Footer />
    </div>
  );
}

export default App;
