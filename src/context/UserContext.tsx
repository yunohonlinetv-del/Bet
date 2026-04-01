import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface UserContextType {
  user: User;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    username: 'RoyalPlayer_777',
    balance: 15420.50,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RoyalPlayer',
  });

  const deposit = (amount: number) => {
    setUser(prev => ({ ...prev, balance: prev.balance + amount }));
  };

  const withdraw = (amount: number) => {
    if (user.balance >= amount) {
      setUser(prev => ({ ...prev, balance: prev.balance - amount }));
    }
  };

  return (
    <UserContext.Provider value={{ user, deposit, withdraw }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};
