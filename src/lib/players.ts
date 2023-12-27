import { Player } from '../types'
import { db } from './db'

export async function getPlayers(): Promise<Player[]> {
	const { data, error } = await db.from('hraci_2').select()

	if (error) {
		console.error('Error fetching players', error)
	}

	const players =
		data &&
		data.map((player) => ({
			id: player.id,
			firstName: player.jmeno,
			lastName: player.prijmeni,
			fotbalovost: player.fotbalovost,
			behavost: player.behavost,
			bojovnost: player.bojovnost,
		}))

	return players || []
}
