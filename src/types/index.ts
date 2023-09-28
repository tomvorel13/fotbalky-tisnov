export type Player = {
  id: number;
  name: string;
};

export type Team = {
  id: number;
  players: Player[];
};

export type PlayerStore = {
  players: Player[];
  selectedPlayers: Player[] | [];
  teams: Team[] | [];
  selectPlayer: (playerId: number) => void;
  unselectPlayer: (playerId: number) => void;
  reset: () => void;
  generateTeams: () => void;
};
