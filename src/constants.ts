import { Game, Winner, Transaction } from './types';

export const GAMES: Game[] = [
  {
    id: 'slots-1',
    title: 'Royal Slots',
    category: 'Slots',
    image: 'https://picsum.photos/seed/slots/400/300',
    icon: 'SlotMachine',
    isPopular: true,
  },
  {
    id: 'crash-1',
    title: 'Aviator Crash',
    category: 'Crash',
    image: 'https://picsum.photos/seed/crash/400/300',
    icon: 'Plane',
    multiplier: '1.5x',
    isPopular: true,
  },
  {
    id: 'roulette-1',
    title: 'European Roulette',
    category: 'Roulette',
    image: 'https://picsum.photos/seed/roulette/400/300',
    icon: 'CircleDot',
    isPopular: true,
  },
  {
    id: 'blackjack-1',
    title: 'Classic Blackjack',
    category: 'Blackjack',
    image: 'https://picsum.photos/seed/blackjack/400/300',
    icon: 'Club',
    isPopular: true,
  },
  {
    id: 'dice-1',
    title: 'Lucky Dice',
    category: 'Dice',
    image: 'https://picsum.photos/seed/dice/400/300',
    icon: 'Dices',
  },
  {
    id: 'plinko-1',
    title: 'Plinko Gold',
    category: 'Plinko',
    image: 'https://picsum.photos/seed/plinko/400/300',
    icon: 'Triangle',
  },
  {
    id: 'baccarat-1',
    title: 'Royal Baccarat',
    category: 'Baccarat',
    image: 'https://picsum.photos/seed/baccarat/400/300',
    icon: 'Diamond',
  },
  {
    id: 'poker-1',
    title: 'Texas Hold\'em',
    category: 'Poker',
    image: 'https://picsum.photos/seed/poker/400/300',
    icon: 'Spade',
  },
];

export const RECENT_WINNERS: Winner[] = [
  { id: '1', username: 'GoldenKing', game: 'Royal Slots', amount: 1250.50, time: '2m ago' },
  { id: '2', username: 'LuckyQueen', game: 'Aviator Crash', amount: 450.00, time: '5m ago' },
  { id: '3', username: 'AceHigh', game: 'Texas Hold\'em', amount: 3200.00, time: '8m ago' },
  { id: '4', username: 'RoulettePro', game: 'European Roulette', amount: 150.00, time: '12m ago' },
  { id: '5', username: 'DiceMaster', game: 'Lucky Dice', amount: 890.00, time: '15m ago' },
];

export const TRANSACTIONS: Transaction[] = [
  { id: 'tr-1', type: 'deposit', amount: 500, status: 'completed', date: '2026-03-30 14:20' },
  { id: 'tr-2', type: 'withdraw', amount: 200, status: 'completed', date: '2026-03-28 09:15' },
  { id: 'tr-3', type: 'deposit', amount: 1000, status: 'completed', date: '2026-03-25 18:45' },
];
