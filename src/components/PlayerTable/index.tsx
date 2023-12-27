import cx from 'clsx'
import { Badge, Table, Checkbox, ScrollArea, Text, Box } from '@mantine/core'
import { Rating } from '@mantine/core'
import { usePlayerStore } from '../../stores'
import classes from './PlayerTable.module.css'
import { sortPlayersByName, transformRating } from '../../lib/utils'
import { Player } from '../../types'
import { SearchBox } from '../SearchBox'

export function PlayerTable({ players }: { players: Player[] }) {
	const selectPlayer = usePlayerStore((state) => state.selectPlayer)
	const unselectPlayer = usePlayerStore((state) => state.unselectPlayer)
	const selectedPlayers = usePlayerStore((state) => state.selectedPlayers)
	const searchTerm = usePlayerStore((state) => state.searchTerm)

	const toggleRow = (id: string) => {
		if (selectedPlayers.find((player) => player.id === id)) {
			unselectPlayer(id)
		} else {
			selectPlayer(id)
		}
	}

	const rows = sortPlayersByName(
		players.filter((player) =>
			player.lastName
				.toLocaleLowerCase()
				.startsWith(searchTerm.toLocaleLowerCase())
		)
	).map((item) => {
		const selected = selectedPlayers.some((player) => player.id === item.id)
		return (
			<Table.Tr
				key={item.id}
				onClick={() => {
					toggleRow(item.id)
				}}
				className={cx({ [classes.rowSelected]: selected }, classes.row)}
			>
				<Table.Td w={0}>
					<Checkbox
						checked={selected}
						onChange={() => console.log('clicked')}
					/>
				</Table.Td>
				<Table.Td>
					<Text size='sm' fw={500}>
						<div className={classes.name_row}>
							{item.lastName} {item.firstName}{' '}
							<div className={classes.rating}>
								<Badge color='teal' size='md'>
									{item.overall}
								</Badge>
								<Rating value={transformRating(item.overall)} fractions={2} />
							</div>
						</div>
					</Text>
				</Table.Td>
			</Table.Tr>
		)
	})

	return (
		<>
			<Box mb={5}>
				<SearchBox />
			</Box>
			<ScrollArea h={400}>
				<Table verticalSpacing='md'>
					<Table.Tbody>{rows}</Table.Tbody>
				</Table>
			</ScrollArea>
		</>
	)
}
