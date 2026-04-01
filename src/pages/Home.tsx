import React from 'react';
import BonusBanner from '../components/BonusBanner';
import GameCard from '../components/GameCard';
import Leaderboard from '../components/Leaderboard';
import RecentWinners from '../components/RecentWinners';
import { GAMES } from '../constants';
import { Star, TrendingUp, Sparkles } from 'lucide-react';

export default function Home() {
  const popularGames = GAMES.filter(g => g.isPopular);
  const otherGames = GAMES.filter(g => !g.isPopular);

  return (
    <div className="space-y-16">
      <BonusBanner />

      {/* Popular Games Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-500/10 rounded-lg">
              <Star className="w-5 h-5 text-gold-500" />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Popular Games</h2>
          </div>
          <button className="text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors uppercase tracking-widest">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Stats & Leaderboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Recent Winners Section */}
          <RecentWinners />
          
          {/* Biggest Wins Panel */}
          <div className="royal-card p-8 bg-gradient-to-br from-royal-card to-gold-900/10 border-gold-500/20">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-gold-400" />
              <h3 className="text-2xl font-black uppercase tracking-tight">Biggest Wins</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="p-4 bg-royal-black/40 rounded-2xl border border-white/5 flex items-center gap-4 group hover:border-gold-500/30 transition-all">
                  <div className="w-16 h-16 rounded-xl bg-gold-500/10 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Jackpot Winner</p>
                    <p className="text-xl font-black gold-text">$45,200.00</p>
                    <p className="text-[10px] text-white/60">by Player_{i}77 on Royal Slots</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <Leaderboard />
        </div>
      </div>

      {/* All Games Grid */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-lg">
            <TrendingUp className="w-5 h-5 text-white/60" />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight">All Games</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {otherGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}
