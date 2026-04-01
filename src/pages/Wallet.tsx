import React from 'react';
import { useUser } from '../context/UserContext';
import { TRANSACTIONS } from '../constants';
import { Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Wallet() {
  const { user } = useUser();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black uppercase tracking-tight">My Wallet</h1>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-gold-500 text-royal-black font-bold rounded-xl gold-glow-hover transition-all">
            Deposit
          </button>
          <button className="px-6 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all">
            Withdraw
          </button>
        </div>
      </div>

      {/* Balance Card */}
      <div className="royal-card p-8 bg-gradient-to-br from-royal-card via-royal-card to-gold-500/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <WalletIcon className="w-32 h-32 text-gold-500" />
        </div>
        
        <div className="relative z-10 space-y-2">
          <p className="text-sm text-white/40 uppercase tracking-[0.2em] font-bold">Total Balance</p>
          <h2 className="text-5xl font-black gold-text">
            ${user.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </h2>
          <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
            <ArrowUpRight className="w-4 h-4" />
            +12.5% from last week
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="royal-card overflow-hidden">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <h3 className="font-bold flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold-400" />
            Transaction History
          </h3>
          <button className="text-xs text-white/40 hover:text-white uppercase tracking-widest font-bold">
            Filter
          </button>
        </div>

        <div className="divide-y divide-white/5">
          {TRANSACTIONS.map((tx) => (
            <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "p-3 rounded-xl",
                  tx.type === 'deposit' ? "bg-green-500/10" : "bg-red-500/10"
                )}>
                  {tx.type === 'deposit' ? (
                    <ArrowDownLeft className="w-5 h-5 text-green-400" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-red-400" />
                  )}
                </div>
                <div>
                  <p className="font-bold capitalize">{tx.type}</p>
                  <p className="text-xs text-white/40">{tx.date}</p>
                </div>
              </div>

              <div className="text-right">
                <p className={cn(
                  "font-mono font-bold text-lg",
                  tx.type === 'deposit' ? "text-green-400" : "text-red-400"
                )}>
                  {tx.type === 'deposit' ? '+' : '-'}${tx.amount.toLocaleString()}
                </p>
                <div className="flex items-center justify-end gap-1">
                  {tx.status === 'completed' ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      <span className="text-[10px] text-green-500 uppercase font-bold">Completed</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3 h-3 text-gold-500" />
                      <span className="text-[10px] text-gold-500 uppercase font-bold">Pending</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
