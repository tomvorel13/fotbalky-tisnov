import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { Player, PlayerStore } from "../types";
import { generateTwoTeamsFromPlayersArray } from "../lib/utils";

export const usePlayerStore = create<PlayerStore>()(devtools((set) => ({
  setAllPlayers: (players: Player[]) => set({ players }),
  players: [],
  selectedPlayers: [],
  searchTerm: "",
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  teams: [],
  selectPlayer: (playerId: string) =>
    set((state) => ({
      selectedPlayers: [
        ...state.selectedPlayers,
        state.players.find((p) => p.id === playerId) as unknown as Player,
      ],
    })),
  unselectPlayer: (playerId: string) => {
    set((state) => ({
      selectedPlayers: state.selectedPlayers.filter((p) => p.id !== playerId),
    }));
  },
  reset: () => set({ selectedPlayers: [], teams: [] }),
  generateTeams: () =>
    set((state) => ({
      teams: [...generateTwoTeamsFromPlayersArray(state.selectedPlayers)],
    })),
})));
