export interface UserInterface {
    _id: string;
    username: string;
    email: string;
    img?: string;
    isAdmin: boolean;
    isTeam: boolean;
    phone?: string;
    address?: string;
  }