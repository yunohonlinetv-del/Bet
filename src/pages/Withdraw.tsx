import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { Landmark, Wallet, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const METHODS = [
  { id: 'crypto', name: 'Crypto Wallet', icon: Wallet, color: 'text-gold-400' },
  { id: 'bank', name: 'Bank Transfer', icon: Landmark, color: 'text-green-400' },
];

export default function Withdraw() {
  const { user, withdraw } = useUser();
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('crypto');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(amount);
    
    if (isNaN(val) || val <= 0) {
      setError('Please enter a valid amount');
      return;
    }
    
    if (val > user.balance) {
      setError('Insufficient balance');
      return;
    }

    setError('');
    setIsProcessing(true);
    setTimeout(() => {
      withdraw(val);
      setIsProcessing(false);
      setIsSuccess(true);
      setAmount('');
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto text-center space-y-8 py-12">
        <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto border border-gold-500/30">
          <ShieldCheck className="w-10 h-10 text-gold-500" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black uppercase tracking-tight text-gold-400">Request Received!</h2>
          <p className="text-white/60">Your withdrawal request is being processed. Funds will arrive in your account shortly.</p>
        </div>
        <button 
          onClick={() => setIsSuccess(false)}
          className="w-full py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
        >
          Back to Wallet
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tight">Withdraw Funds</h1>
        <p className="text-white/40">Securely withdraw your winnings to your preferred account.</p>
      </div>

      <div className="royal-card p-6 bg-gold-500/5 border-gold-500/20 flex items-center justify-between">
        <div>
          <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Available Balance</p>
          <p className="text-2xl font-black gold-text">${user.balance.toLocaleString()}</p>
        </div>
        <div className="p-3 bg-gold-500/10 rounded-xl">
          <Wallet className="w-6 h-6 text-gold-400" />
        </div>
      </div>

      <form onSubmit={handleWithdraw} className="space-y-8">
        {/* Method Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Amount to Withdraw</label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-gold-400">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setError('');
                }}
                placeholder="0.00"
                className={cn(
                  "w-full bg-white/5 border rounded-2xl px-12 py-6 text-3xl font-black focus:outline-none transition-all placeholder:text-white/10",
                  error ? "border-red-500/50" : "border-white/10 focus:border-gold-500"
                )}
                required
              />
            </div>
            {error && (
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest mt-2">
                <AlertCircle className="w-3 h-3" />
                {error}
              </div>
            )}
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[100, 500, 1000, 5000].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => {
                  setAmount(val.toString());
                  setError('');
                }}
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
              Request Withdrawal
              <ArrowRight className="w-6 h-6" />
            </>
          )}
        </button>

        <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-[10px] text-white/40 leading-relaxed text-center uppercase tracking-widest font-bold">
          Withdrawals are processed within 24 hours. Minimum withdrawal amount is $50.00. 
          Please ensure your account verification is complete.
        </div>
      </form>
    </div>
  );
}
