"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface MatchSummary {
  team: string;
  score: string;
  winLossIcon: 'win' | 'loss';
}

const mockMatches: MatchSummary[] = [
  { team: 'Breeze', score: '13 : 6', winLossIcon: 'win' },
  { team: 'IceBox', score: '11 : 13', winLossIcon: 'loss' },
  { team: 'Breeze', score: '8 : 13', winLossIcon: 'loss' },
  { team: 'Haven', score: '11 : 5', winLossIcon: 'win' },
];

const MatchHistoryWidget: React.FC = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-xl shadow-lg border border-gray-800 sticky top-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Last Match</h2>
        <Link href="#" className="text-sm text-indigo-400 hover:underline">View All</Link>
      </div>

      <div className="space-y-3">
        {mockMatches.map((match, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-slate-950 rounded-lg hover:bg-slate-800 transition cursor-pointer border-l-4 border-transparent hover:border-indigo-600">
            <div className="flex items-center space-x-3">
              <span className={`text-xl ${match.winLossIcon === 'win' ? 'text-green-400' : 'text-red-500'}`}>
                {match.winLossIcon === 'win' ? <ArrowUp className="w-6 h-6" /> : <ArrowDown className="w-6 h-6" />}
              </span>
              <span className="text-white font-semibold">{match.team}</span>
            </div>

            <span className="text-lg text-indigo-300">{match.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchHistoryWidget;
