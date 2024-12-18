function GameController({ phase, setPhase }) {
    const togglePhase = () => {
      setPhase(phase === 'day' ? 'night' : 'day');
    };
  
    return (
      <div className="bg-white p-4 rounded shadow mb-4 text-center">
        <h2 className="text-lg font-semibold mb-2">
          Giai Đoạn Hiện Tại: <span className={phase === 'day' ? 'text-yellow-500' : 'text-gray-700'}>
            {phase === 'day' ? 'Ban Ngày' : 'Ban Đêm'}
          </span>
        </h2>
        <button
          onClick={togglePhase}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Chuyển sang {phase === 'day' ? 'Ban Đêm' : 'Ban Ngày'}
        </button>
      </div>
    );
  }
  
  export default GameController;