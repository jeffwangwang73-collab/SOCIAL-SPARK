
export enum UserStatus {
  AVAILABLE = 'available',
  ONLINE = 'online',
  BUSY = 'busy',
  OFFLINE = 'offline'
}

export interface UserProfile {
  id: string;
  nickname: string;
  avatar: string;
  reputation: number;
  status: UserStatus;
  preferences: string[];
  location?: { lat: number; lng: number; name: string };
}

export interface InteractionRequest {
  id: string;
  type: 'fire' | 'cigarette' | 'chat';
  userId: string;
  timestamp: number;
  status: 'pending' | 'matched' | 'completed' | 'cancelled';
  note?: string;
  itemsOffered?: string[];
}
