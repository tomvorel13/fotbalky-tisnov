export type Player = {
  id: string;
  firstName: string;
  lastName: string;
};

export type Team = {
  id: number;
  players: Player[];
};

export type PlayerStore = {
  setAllPlayers: (players: Player[]) => void;
  players: Player[];
  selectedPlayers: Player[] | [];
  teams: Team[] | [];
  selectPlayer: (playerId: string) => void;
  unselectPlayer: (playerId: string) => void;
  reset: () => void;
  generateTeams: () => void;
};
