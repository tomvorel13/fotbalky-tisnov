import { usePlayerStore } from '../stores'
import PlayerSelectorControls from './PlayerSelectorControls'
import Teams from './Teams'
import styles from '../styles/player-selector.module.css'
import { PlayerTable } from './PlayerTable'
import { getPlayers } from '../lib/players'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

function PlayerSelector() {
	const teams = usePlayerStore((state) => state.teams)
	const setAllPlayers = usePlayerStore((state) => state.setAllPlayers)
	const players = usePlayerStore((state) => state.players)

	console.log(players, 'pl')

	const { data, isLoading } = useQuery({
		queryKey: ['players'],
		queryFn: getPlayers,
	})

	// Save initial data to global store
	useEffect(() => {
		if (data) {
			setAllPlayers(data)
		}
	}, [data, setAllPlayers])

	if (data && !isLoading) {
		return (
			<div className={styles.container}>
				<PlayerSelectorControls />
				{teams.length > 0 ? <Teams /> : <PlayerTable players={players} />}
			</div>
		)
	}
}

export default PlayerSelector
