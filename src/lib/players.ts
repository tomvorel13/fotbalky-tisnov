import { Player } from '../types'
import { db } from './db'

export async function getPlayers(): Promise<Player[]> {
	const { data, error } = await db.from('hraci').select()

	if (error) {
		console.error('Error fetching players', error)
	}

	const players =
		data &&
		data.map((player) => ({
			id: player.id,
			jmeno: player.jmeno,
			prijmeni: player.prijmeni,
			rychlost: player.rychlost,
			strelba: player.strelba,
			nahravka: player.nahravka,
			driblink: player.driblink,
			obrana: player.obrana,
			sila: player.sila,
		}))

	return players || []
}
