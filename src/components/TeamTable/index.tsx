import { useState } from 'react'
import { Table, ScrollArea } from '@mantine/core'
import cx from 'clsx'
import classes from './TeamTable.module.css'
import { Team } from '../../types'

export function TeamTable({ team }: { team: Team }) {
	const [scrolled, setScrolled] = useState(false)

	const rows = team.players.map((player) => (
		<Table.Tr key={player.name}>
			<Table.Td>{player.name}</Table.Td>
		</Table.Tr>
	))

	return (
		<ScrollArea
			h={300}
			onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
		>
			<Table miw={700}>
				<Table.Thead
					className={cx(classes.header, { [classes.scrolled]: scrolled })}
				>
					<Table.Tr>
						<Table.Th>Name</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>{rows}</Table.Tbody>
			</Table>
		</ScrollArea>
	)
}
