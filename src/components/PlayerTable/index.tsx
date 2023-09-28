import cx from 'clsx'
import { Table, Checkbox, ScrollArea, Group, Text, rem } from '@mantine/core'
import { usePlayerStore } from '../../stores'
import classes from './PlayerTable.module.css'

export function PlayerTable() {
	const players = usePlayerStore((state) => state.players)
	const selectPlayer = usePlayerStore((state) => state.selectPlayer)
	const unselectPlayer = usePlayerStore((state) => state.unselectPlayer)
	const selectedPlayers = usePlayerStore((state) => state.selectedPlayers)

	const toggleRow = (id: number) => {
		if (selectedPlayers.find((player) => player.id === id)) {
			unselectPlayer(id)
		} else {
			selectPlayer(id)
		}
	}

	const rows = players.map((item) => {
		const selected = selectedPlayers.some((player) => player.id === item.id)
		return (
			<Table.Tr
				key={item.id}
				onClick={() => {
					toggleRow(item.id)
				}}
				className={cx({ [classes.rowSelected]: selected }, classes.row)}
			>
				<Table.Td>
					<Checkbox checked={selected} />
				</Table.Td>
				<Table.Td>
					<Group gap='sm'>
						<Text size='sm' fw={500}>
							{item.name}
						</Text>
					</Group>
				</Table.Td>
			</Table.Tr>
		)
	})

	return (
		<ScrollArea>
			<Table verticalSpacing='sm'>
				<Table.Thead>
					<Table.Tr>
						<Table.Th style={{ width: rem(40) }}></Table.Th>
						<Table.Th>Hráči</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>{rows}</Table.Tbody>
			</Table>
		</ScrollArea>
	)
}
