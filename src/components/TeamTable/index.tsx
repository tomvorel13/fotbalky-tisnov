import { Table } from '@mantine/core'
import classes from './TeamTable.module.css'
import { Team } from '../../types'

export function TeamTable({ team }: { team: Team }) {
	const rows = team.players.map((player) => (
		<Table.Tr key={player.name}>
			<Table.Td>{player.name}</Table.Td>
		</Table.Tr>
	))

	return (
		<Table className={classes.table}>
			<Table.Thead className={classes.header}>
				<Table.Tr>
					<Table.Th>Name</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>{rows}</Table.Tbody>
		</Table>
	)
}
