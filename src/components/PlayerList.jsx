import React, { useState } from 'react';

function PlayerList({ players, setPlayers }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Dân làng');
  
  const roles = ['Dân làng', 'Tiên tri', 'Bảo vệ', 'Phù Thủy', 'Thợ săn', 'Sói thường'];

  const addPlayer = () => {
    if (name) {
      setPlayers([...players, { name, role, alive: true }]);
      setName('');
      setRole('Dân làng');
    }
  };

  const removePlayer = (index) => {
    const newPlayers = players.filter((_, i) => i !== index);
    setPlayers(newPlayers);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">Danh Sách Người Chơi</h2>
      <div className="flex flex-col gap-2 mb-2">
        <input
          type="text"
          placeholder="Tên người chơi"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="p-2 border rounded"
        >
          {roles.map((roleOption) => (
            <option key={roleOption} value={roleOption}>{roleOption}</option>
          ))}
        </select>
        <button
          onClick={addPlayer}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Thêm
        </button>
      </div>
      <ul className="space-y-2">
        {players.map((player, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <span>{player.name} - {player.role}</span>
            <button
              onClick={() => removePlayer(index)}
              className="text-red-500 hover:text-red-700"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;