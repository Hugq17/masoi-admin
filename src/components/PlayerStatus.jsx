import React from 'react';

function PlayerStatus({ players }) {
    return (
        <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Trạng Thái Người Chơi</h2>
        <ul className="space-y-2">
          {players.map((player, index) => (
            <li
              key={index}
              className={`p-2 rounded ${player.alive ? 'bg-green-100' : 'bg-red-100'}`}
            >
              {player.name} - {player.alive ? 'Còn sống' : 'Đã chết'}
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default PlayerStatus