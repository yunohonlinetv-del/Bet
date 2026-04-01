import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { CreditCard, Landmark, Wallet, ArrowRight, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const METHODS = [
  { id: 'card', name: 'Credit Card', icon: CreditCard, color: 'text-blue-400' },
  { id: 'crypto', name: 'Crypto Wallet', icon: Wallet, color: 'text-gold-400' },
  { id: 'bank', name: 'Bank Transfer', icon: Landmark, color: 'text-green-400' },
];

export default function Deposit() {
  const { deposit } = useUser();
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) return;

    setIsProcessing(true);
    setTimeout(() => {
      deposit(val);
      setIsProcessing(false);
      setIsSuccess(true);
      setAmount('');
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto text-center space-y-8 py-12">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto border border-green-500/30">
          <ShieldCheck className="w-10 h-10 text-green-500" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black uppercase tracking-tight">Deposit Successful!</h2>
          <p className="text-white/60">Your funds have been added to your balance instantly.</p>
        </div>
        <button 
          onClick={() => setIsSuccess(false)}
          className="w-full py-4 bg-gold-500 text-royal-black font-bold rounded-2xl gold-glow-hover"
        >
          Make Another Deposit
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tight">Deposit Funds</h1>
        <p className="text-white/40">Choose your preferred payment method to top up your balance.</p>
      </div>

      <form onSubmit={handleDeposit} className="space-y-8">
        {/* Method Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {METHODS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMethod(m.id)}
              className={cn(
                "p-6 rounded-2xl border transition-all flex flex-col items-center gap-4",
                method === m.id 
                  ? "bg-gold-500/10 border-gold-500 gold-glow" 
                  : "bg-white/5 border-white/10 hover:border-white/20"
              )}
            >
              <m.icon className={cn("w-8 h-8", m.color)} />
              <span className="text-sm font-bold">{m.name}</span>
            </button>
          ))}
        </div>

        {/* Amount Input */}
        <div className="royal-card p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Amount to Deposit</label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-gold-400">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-6 text-3xl font-black focus:outline-none focus:border-gold-500 transition-all placeholder:text-white/10"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[50, 100, 500, 1000].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setAmount(val.toString())}
                className="py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-bold transition-all"
              >
                +${val}
              </button>
            ))}
          </div>
        </div>

        <button
          disabled={isProcessing}
          className="w-full py-6 bg-gold-500 disabled:opacity-50 text-royal-black font-black text-xl rounded-2xl gold-glow-hover transition-all flex items-center justify-center gap-3"
        >
          {isProcessing ? (
            <div className="w-6 h-6 border-4 border-royal-black/30 border-t-royal-black rounded-full animate-spin" />
          ) : (
            <>
              Confirm Deposit
              <ArrowRight className="w-6 h-6" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-white/20 text-xs uppercase tracking-widest font-bold">
          <ShieldCheck className="w-4 h-4" />
          Secure 256-bit Encrypted Transaction
        </div>
      </form>
    </div>
  );
}
