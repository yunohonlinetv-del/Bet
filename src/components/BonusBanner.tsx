import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Gift, ArrowRight } from 'lucide-react';

export default function BonusBanner() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden gold-glow mb-12">
      {/* Background */}
      <img
        src="https://picsum.photos/seed/casino-banner/1200/400"
        alt="Bonus Banner"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-royal-black via-royal-black/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-8 sm:px-16">
        <div className="max-w-xl space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/20 backdrop-blur-md border border-gold-500/30 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-bold text-gold-400 uppercase tracking-[0.2em]">Welcome Bonus</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none"
          >
            Get <span className="gold-text">100 Free Spins</span> <br />
            & 200% Bonus
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-sm sm:text-lg max-w-md"
          >
            Start your royal journey today with our exclusive welcome package. 
            Join the elite circle of winners at Royal Games.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-royal-black font-black rounded-2xl transition-all flex items-center gap-2 gold-glow-hover">
              Claim Now
              <Gift className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl transition-all flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-20 hidden lg:block">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
}
