import { usePlayerStore } from '../stores'
import { TeamTable } from './TeamTable'
import styles from '../styles/player-selector.module.css'

function Teams() {
	const teams = usePlayerStore((state) => state.teams)

	return (
		<div className={styles.teams}>
			{teams.map((team) => (
				<TeamTable key={team.id} team={team} />
			))}
		</div>
	)
}

export default Teams
