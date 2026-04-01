import React from 'react';
import { Trophy, Medal } from 'lucide-react';
import { cn } from '../lib/utils';

const LEADERS = [
  { rank: 1, name: 'HighRoller_99', win: 125400, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1' },
  { rank: 2, name: 'CryptoWhale', win: 98200, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2' },
  { rank: 3, name: 'LuckyStrike', win: 76500, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3' },
  { rank: 4, name: 'VegasKing', win: 45000, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4' },
  { rank: 5, name: 'DiamondHands', win: 32100, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5' },
];

export default function Leaderboard() {
  return (
    <div className="royal-card p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gold-500/10 rounded-lg">
            <Trophy className="w-5 h-5 text-gold-500" />
          </div>
          <h3 className="text-lg font-bold">Top Players</h3>
        </div>
        <span className="text-xs text-white/40 uppercase tracking-widest">Monthly</span>
      </div>

      <div className="space-y-4">
        {LEADERS.map((player) => (
          <div key={player.rank} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-8 flex justify-center">
                {player.rank === 1 ? (
                  <Medal className="w-6 h-6 text-gold-500" />
                ) : (
                  <span className="text-sm font-bold text-white/40">{player.rank}</span>
                )}
              </div>
              <img src={player.avatar} alt="" className="w-10 h-10 rounded-full bg-royal-dark border border-white/10" />
              <div>
                <p className="text-sm font-bold group-hover:text-gold-400 transition-colors">{player.name}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Master Level</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-mono font-bold text-gold-400">
                ${player.win.toLocaleString()}
              </p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Total Win</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
