import { Container, Flex, Text } from '@mantine/core'
import { usePlayerStore } from '../stores'
import Btn from './Btn'

function PlayerSelectorControls() {
	const reset = usePlayerStore((state) => state.reset)
	const generateTeams = usePlayerStore((state) => state.generateTeams)
	const selectedPlayers = usePlayerStore((state) => state.selectedPlayers)

	return (
		<Container p={0} mb={10}>
			<Flex justify='space-between' align='center'>
				<Text>Počet vybraných hráčů: {selectedPlayers.length}</Text>
				{selectedPlayers.length > 0 && (
					<Flex gap={10}>
						<Btn onClick={generateTeams}>Generuj</Btn>
						<Btn onClick={reset}>Reset</Btn>
					</Flex>
				)}
			</Flex>
		</Container>
	)
}

export default PlayerSelectorControls
