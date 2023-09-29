import { ScrollArea, Table, Text } from '@mantine/core'
import classes from './TeamTable.module.css'
import { Team } from '../../types'

export function TeamTable({ team }: { team: Team }) {
	const rows = team.players.map((player) => (
		<Table.Tr key={player.lastName}>
			<Table.Td>
				<Text size='sm'>
					{player.lastName} {player.firstName}
				</Text>
			</Table.Td>
		</Table.Tr>
	))

	return (
		<ScrollArea>
			<Table className={classes.table}>
				<Table.Thead className={classes.header}>
					<Table.Tr>
						<Table.Th>Tým {team.id}</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>{rows}</Table.Tbody>
			</Table>
		</ScrollArea>
	)
}
