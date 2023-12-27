import { Player, Team } from '../types'

export const generateTwoTeamsFromPlayersArray = (players: Player[]): Team[] => {
	const RANDOM_FACTOR = 0.1 // Adjust this value to control the randomness

	// Calculate score for each player with a random factor, using overall rating
	const calculateScore = (player: Player) => {
		// The overall rating is adjusted with a random factor
		return player.overall + (Math.random() - 0.5) * RANDOM_FACTOR * 100
	}

	// Sort players by adjusted score
	players.sort((a, b) => calculateScore(b) - calculateScore(a))

	// Distribute players into teams
	const teamOne: Player[] = []
	const teamTwo: Player[] = []
	let teamOneScore = 0
	let teamTwoScore = 0

	players.forEach((player) => {
		const playerScore = calculateScore(player)
		if (teamOneScore <= teamTwoScore) {
			teamOne.push(player)
			teamOneScore += playerScore
		} else {
			teamTwo.push(player)
			teamTwoScore += playerScore
		}
	})

	// Sort players in each team by name
	return [
		{
			id: 1,
			players: sortPlayersByRating(teamOne),
		},
		{
			id: 2,
			players: sortPlayersByRating(teamTwo),
		},
	]
}

export const sortPlayersByName = (players: Player[]): Player[] => {
	return players
		.slice()
		.sort((a, b) => a.lastName.toLocaleLowerCase().localeCompare(b.lastName))
}

export const sortPlayersByRating = (players: Player[]): Player[] => {
	return players
		.slice() // Create a shallow copy of the array to avoid mutating the original array
		.sort((a, b) => b.overall - a.overall) // Sort players by overallRating in descending order
}

export const calculateOverallRating = (player: Player): number => {
	const WEIGHTS = { fotbalovost: 0.6, behavost: 0.3, bojovnost: 0.1 }

	// Calculate weighted average
	const weightedAverage =
		player.fotbalovost * WEIGHTS.fotbalovost +
		player.behavost * WEIGHTS.behavost +
		player.bojovnost * WEIGHTS.bojovnost

	// Scale the weighted average from a 1-10 scale to a 1-100 scale
	const scaledRating = weightedAverage * 10

	// Round the result to the nearest whole number
	return Math.round(scaledRating)
}

export const transformRating = (overallRating: number) => {
	// Convert the rating from a 1-100 scale to a 1-5 scale
	const scaledRating = (overallRating / 100) * 5

	// Round to the nearest half
	return Math.round(scaledRating * 2) / 2
}
