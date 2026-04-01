import React from 'react';
import { motion } from 'motion/react';
import { Play, Star, TrendingUp } from 'lucide-react';
import { Game } from '../types';
import { cn } from '../lib/utils';

interface GameCardProps {
  game: Game;
  className?: string;
}

const GameCard: React.FC<GameCardProps> = ({ game, className }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "group relative aspect-[4/5] rounded-2xl overflow-hidden royal-card gold-glow-hover cursor-pointer",
        className
      )}
    >
      {/* Game Image */}
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        {game.isPopular && (
          <div className="px-3 py-1 bg-gold-500 text-royal-black text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Popular
          </div>
        )}
        {game.multiplier && (
          <div className="px-3 py-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            {game.multiplier}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 space-y-4">
        <div>
          <p className="text-xs font-medium text-gold-400/80 uppercase tracking-widest mb-1">
            {game.category}
          </p>
          <h3 className="text-xl font-bold text-white group-hover:gold-text transition-all">
            {game.title}
          </h3>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-white/10 hover:bg-gold-500 hover:text-royal-black backdrop-blur-md border border-white/20 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
        >
          <Play className="w-4 h-4 fill-current" />
          Play Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GameCard;

