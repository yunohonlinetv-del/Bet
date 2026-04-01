export interface Game {
  id: string;
  title: string;
  category: string;
  image: string;
  icon: string;
  multiplier?: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface Winner {
  id: string;
  username: string;
  game: string;
  amount: number;
  time: string;
}

export interface Transaction {
  id: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  date: string;
}

export interface User {
  username: string;
  balance: number;
  avatar: string;
}
