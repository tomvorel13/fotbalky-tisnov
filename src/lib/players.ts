import { Player } from '../types'
import { db } from './db'
import { calculateOverallRating } from './utils'

export async function getPlayers(): Promise<Player[]> {
	const { data, error } = await db.from('hraci_2').select()

	if (error) {
		console.error('Error fetching players', error)
	}

	const playersRaw =
		data &&
		(data.map((player) => ({
			id: player.id,
			firstName: player.jmeno,
			lastName: player.prijmeni,
			fotbalovost: player.fotbalovost,
			behavost: player.behavost,
			bojovnost: player.bojovnost,
		})) as Player[])

	const players = playersRaw?.map((player) => {
		return {
			...player,
			overall: calculateOverallRating(player),
		}
	})

	return players || []
}
