import { Player, Team } from "../types";

export const generateTwoTeamsFromPlayersArray = (players: Player[]): Team[] => {
  const shuffledPlayers = players.sort(() => 0.5 - Math.random());
  const teamOne = shuffledPlayers.slice(0, shuffledPlayers.length / 2);
  const teamTwo = shuffledPlayers.slice(shuffledPlayers.length / 2);

  return [
    {
      id: 1,
      players: teamOne,
    },
    {
      id: 2,
      players: teamTwo,
    },
  ];
};
