import { Button } from '@mantine/core'

function Btn({
	onClick,
	children,
}: {
	onClick: () => void
	children: React.ReactNode
}) {
	return (
		<Button variant='gradient' onClick={onClick}>
			{children}
		</Button>
	)
}

export default Btn
