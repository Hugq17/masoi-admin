import React, { useState } from 'react';
import PlayerList from './components/PlayerList';
import GameController from './components/GameController';
import PlayerStatus from './components/PlayerStatus';
// import './styles/App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [phase, setPhase] = useState('day');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
    <h1 className="text-2xl font-bold text-center mb-4">Quản Lý Trò Chơi Ma Sói</h1>
    <GameController phase={phase} setPhase={setPhase} />
    <PlayerList players={players} setPlayers={setPlayers} />
    <PlayerStatus players={players} />
  </div>
  );
}

export default App;
