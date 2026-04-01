import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { User, Shield, Bell, Lock, LogOut, Camera } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Profile() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black uppercase tracking-tight">Account Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-2">
          {[
            { id: 'general', name: 'General', icon: User },
            { id: 'security', name: 'Security', icon: Lock },
            { id: 'verification', name: 'Verification', icon: Shield },
            { id: 'notifications', name: 'Notifications', icon: Bell },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                activeTab === tab.id 
                  ? "bg-gold-500 text-royal-black gold-glow" 
                  : "text-white/40 hover:bg-white/5 hover:text-white"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-400 hover:bg-red-500/10 transition-all mt-8">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Profile Header */}
          <div className="royal-card p-8 flex flex-col sm:flex-row items-center gap-8">
            <div className="relative group">
              <img src={user.avatar} alt="Avatar" className="w-32 h-32 rounded-full border-4 border-gold-500/20" />
              <button className="absolute bottom-0 right-0 p-2 bg-gold-500 text-royal-black rounded-full gold-glow opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center sm:text-left space-y-2">
              <h2 className="text-2xl font-black">{user.username}</h2>
              <p className="text-white/40 text-sm">Member since March 2026 • VIP Level 4</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gold-500/10 text-gold-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-gold-500/20">
                  Verified
                </span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-500/20">
                  VIP Gold
                </span>
              </div>
            </div>
          </div>

          {/* Settings Form */}
          <div className="royal-card p-8 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Username</label>
                <input 
                  type="text" 
                  defaultValue={user.username}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="player@royalgames.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Currency</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-all appearance-none">
                  <option value="usd">USD - US Dollar</option>
                  <option value="eur">EUR - Euro</option>
                  <option value="btc">BTC - Bitcoin</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button className="px-8 py-3 bg-gold-500 text-royal-black font-bold rounded-xl gold-glow-hover transition-all">
                Save Changes
              </button>
            </div>
          </div>

          {/* Security Panel */}
          <div className="royal-card p-8 space-y-6">
            <h3 className="font-bold flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold-400" />
              Security Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <div>
                  <p className="text-sm font-bold">Two-Factor Authentication</p>
                  <p className="text-xs text-white/40">Add an extra layer of security to your account.</p>
                </div>
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-all">
                  Enable
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
