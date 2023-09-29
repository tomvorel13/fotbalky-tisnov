import { Input } from '@mantine/core'
import { usePlayerStore } from '../../stores'

export function SearchBox() {
	const setSearchTerm = usePlayerStore((state) => state.setSearchTerm)

	return (
		<Input
			onChange={(e) => setSearchTerm(e.target.value)}
			placeholder='Hledej hráče'
		/>
	)
}
