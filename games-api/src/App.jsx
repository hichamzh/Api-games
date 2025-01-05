import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './composants/navigation/Navbar';
import { AllGames } from './pages/AllGames';
import { Giveaways } from './pages/Giveaways';

function App() {
  return (
<Router>
  <Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/allgames' element={<AllGames/>}/>
<Route path='/giveaways' element={<Giveaways/>}/>
</Routes>
</Router>
  );
}

export default App;
