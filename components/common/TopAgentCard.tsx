import React from 'react';

interface TopStatsProps {
  agentName: string;
  winRate: number;
}

const TopAgentCard: React.FC<TopStatsProps> = ({ agentName, winRate }) => {
  return (
    <div className="relative bg-gray-800 p-12 rounded-3xl shadow-2xl border border-indigo-900 transform scale-[1.02] overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-radial-gradient pointer-events-none" />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <h2 className="text-6xl font-extrabold text-white drop-shadow-[0_3px_5px_rgba(0,0,0,0.7)]">{agentName}</h2>
          <p className="text-xl text-indigo-300 mt-1">Player Time: 463H</p>
        </div>

        <div className="relative flex items-center space-x-8">
          <div className="w-20 h-20 bg-gray-700 rounded-full border-4 border-indigo-500 shadow-lg" />
          <div>
            <span className="text-sm uppercase text-gray-300 tracking-widest">Win Ratio</span>
            <p className={`text-6xl font-black ${winRate > 50 ? 'text-green-400' : 'text-red-400'}`}>{winRate}%</p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-8 text-white/80">
        <StatBox title="Headshot %" value="12.6%" desc="Kills per round" />
        <StatBox title="Kill/Dmg Ratio" value="3.2" desc="/R" />
        <StatBox title="Damage Score" value="210.6" desc="Average damage dealt" />
      </div>
    </div>
  );
};

const StatBox: React.FC<{ title: string; value: string | number; desc: string }> = ({ title, value, desc }) => (
  <div className="bg-slate-800 p-4 rounded-xl shadow-lg border border-gray-700 flex flex-col justify-center">
    <p className="text-sm font-medium text-indigo-300 uppercase tracking-wider">{title}</p>
    <h3 className="text-4xl font-extrabold text-white mt-1">{value}</h3>
    <p className="text-xs text-gray-400 mt-2">{desc}</p>
  </div>
);

export default TopAgentCard;
