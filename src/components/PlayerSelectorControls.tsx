import { usePlayerStore } from '../stores'
import Btn from './Btn'
import styles from '../styles/player-selector-controls.module.css'

function PlayerSelectorControls() {
	const reset = usePlayerStore((state) => state.reset)
	const generateTeams = usePlayerStore((state) => state.generateTeams)
	const selectedPlayers = usePlayerStore((state) => state.selectedPlayers)

	return (
		<div className={styles.container}>
			<p>Počet vybraných hráčů: {selectedPlayers.length}</p>
			{selectedPlayers.length > 0 && (
				<div className={styles.btns}>
					<Btn onClick={generateTeams}>Generuj</Btn>
					<Btn onClick={reset}>Reset</Btn>
				</div>
			)}
		</div>
	)
}

export default PlayerSelectorControls
