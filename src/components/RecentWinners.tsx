import React from 'react';
import { History, Zap } from 'lucide-react';
import { RECENT_WINNERS } from '../constants';

export default function RecentWinners() {
  return (
    <div className="royal-card p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <History className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-lg font-bold">Recent Winners</h3>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 bg-green-500/10 rounded-full">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Live</span>
        </div>
      </div>

      <div className="space-y-4">
        {RECENT_WINNERS.map((winner) => (
          <div key={winner.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-royal-dark rounded-lg">
                <Zap className="w-4 h-4 text-gold-400" />
              </div>
              <div>
                <p className="text-sm font-bold">{winner.username}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">{winner.game}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-mono font-bold text-green-400">
                +${winner.amount.toLocaleString()}
              </p>
              <p className="text-[10px] text-white/40 text-right">{winner.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
