import React from 'react';
import Navbar from './Navbar';
import { motion } from 'motion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-royal-black selection:bg-gold-500 selection:text-royal-black">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {children}
      </motion.main>
      
      <footer className="border-t border-white/5 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold-500 rounded-lg">
                  <div className="w-4 h-4 bg-royal-black rounded-sm" />
                </div>
                <span className="text-lg font-bold gold-text uppercase tracking-wider">Royal Games</span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                The most prestigious online gaming platform. Experience luxury, security, and the thrill of winning in the world's most exclusive digital casino.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gold-400">Games</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li className="hover:text-white transition-colors cursor-pointer">Slots</li>
                <li className="hover:text-white transition-colors cursor-pointer">Live Casino</li>
                <li className="hover:text-white transition-colors cursor-pointer">Table Games</li>
                <li className="hover:text-white transition-colors cursor-pointer">Crash Games</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gold-400">Support</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
                <li className="hover:text-white transition-colors cursor-pointer">Responsible Gaming</li>
                <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gold-400">Newsletter</h4>
              <p className="text-sm text-white/40 mb-4">Get exclusive bonuses delivered to your inbox.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-gold-500/50"
                />
                <button className="bg-gold-500 text-royal-black font-bold px-4 py-2 rounded-lg text-sm">Join</button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-white/20">© 2026 Royal Games Casino. All rights reserved. Play responsibly.</p>
            <div className="flex gap-6">
              <div className="w-8 h-8 bg-white/5 rounded-full" />
              <div className="w-8 h-8 bg-white/5 rounded-full" />
              <div className="w-8 h-8 bg-white/5 rounded-full" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
