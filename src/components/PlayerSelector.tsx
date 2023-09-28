import { usePlayerStore } from '../stores'
import PlayerSelectorControls from './PlayerSelectorControls'
import Teams from './Teams'
import styles from '../styles/player-selector.module.scss'
import { PlayerTable } from './PlayerTable'

function PlayerSelector() {
	const teams = usePlayerStore((state) => state.teams)

	return (
		<div className={styles.container}>
			<PlayerSelectorControls />
			{teams.length > 0 ? <Teams /> : <PlayerTable />}
		</div>
	)
}

export default PlayerSelector
