import { ScrollArea, Table, Text, Rating, Badge } from '@mantine/core'
import classes from './TeamTable.module.css'
import { Team } from '../../types'
import { transformRating } from '../../lib/utils'

export function TeamTable({ team }: { team: Team }) {
	const rows = team.players.map((player) => (
		<Table.Tr key={player.lastName}>
			<Table.Td>
				<Text size='sm'>
					<div className={classes.name_row}>
						{player.lastName} {player.firstName}
						<div className={classes.rating}>
							<Badge color='teal' size='lg'>
								{player.overall}
							</Badge>
							<Rating value={transformRating(player.overall)} fractions={2} />
						</div>
					</div>
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
