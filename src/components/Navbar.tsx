import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Crown, Wallet, User as UserIcon, Menu, X, ChevronDown } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Slots', path: '/games/slots' },
  { name: 'Crash', path: '/games/crash' },
  { name: 'Roulette', path: '/games/roulette' },
  { name: 'Blackjack', path: '/games/blackjack' },
  { name: 'Dice', path: '/games/dice' },
  { name: 'Poker', path: '/games/poker' },
];

export default function Navbar() {
  const { user } = useUser();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-royal-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg gold-glow group-hover:scale-110 transition-transform">
              <Crown className="w-6 h-6 text-royal-black" />
            </div>
            <span className="text-xl font-bold tracking-wider gold-text uppercase">
              Royal Games
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold-400",
                  location.pathname === link.path ? "text-gold-400" : "text-white/60"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <Wallet className="w-4 h-4 text-gold-400" />
              <span className="font-mono text-sm font-bold">
                ${user.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Link to="/deposit" className="hidden sm:block px-4 py-2 bg-gold-500 hover:bg-gold-600 text-royal-black font-bold rounded-lg text-sm transition-all gold-glow-hover">
                Deposit
              </Link>
              <Link to="/profile" className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full border border-gold-400/30" />
              </Link>
              <button 
                className="lg:hidden p-2 text-white/60 hover:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-royal-dark border-b border-white/5 p-4 space-y-4 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/60 hover:text-gold-400"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/5" />
              <div className="flex gap-4">
                <Link to="/deposit" className="flex-1 text-center py-3 bg-gold-500 text-royal-black font-bold rounded-xl">
                  Deposit
                </Link>
                <Link to="/withdraw" className="flex-1 text-center py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10">
                  Withdraw
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
