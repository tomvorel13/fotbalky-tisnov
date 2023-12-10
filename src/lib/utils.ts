import { Player, Team } from '../types'

export const generateTwoTeamsFromPlayersArray = (players: Player[]): Team[] => {
	// Define weights for each attribute
	const WEIGHTS = { fotbalovost: 0.6, rychlost: 0.3, bojovnost: 0.1 }
	const RANDOM_FACTOR = 0.1 // Adjust this value to control the randomness

	// Calculate weighted score for each player with a random factor
	const calculateScore = (player: Player) => {
		const baseScore =
			player.fotbalovost * WEIGHTS.fotbalovost +
			player.rychlost * WEIGHTS.rychlost +
			player.bojovnost * WEIGHTS.bojovnost
		return baseScore + (Math.random() - 0.5) * RANDOM_FACTOR
	}

	// Sort players by score
	players.sort((a, b) => calculateScore(b) - calculateScore(a))

	// Distribute players into teams
	const teamOne: Player[] = []
	const teamTwo: Player[] = []
	let teamOneScore = 0
	let teamTwoScore = 0

	players.forEach((player) => {
		if (teamOneScore <= teamTwoScore) {
			teamOne.push(player)
			teamOneScore += calculateScore(player)
		} else {
			teamTwo.push(player)
			teamTwoScore += calculateScore(player)
		}
	})

	// Sort players in each team by name
	return [
		{
			id: 1,
			players: sortPlayersByName(teamOne),
		},
		{
			id: 2,
			players: sortPlayersByName(teamTwo),
		},
	]
}

export const sortPlayersByName = (players: Player[]): Player[] => {
	return players
		.slice()
		.sort((a, b) => a.lastName.toLocaleLowerCase().localeCompare(b.lastName))
}
