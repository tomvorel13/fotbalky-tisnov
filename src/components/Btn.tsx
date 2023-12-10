import { Button, Text } from '@mantine/core'

function Btn({
	onClick,
	children,
}: {
	onClick: () => void
	children: React.ReactNode
}) {
	return (
		<Button p={5} variant='outline' onClick={onClick}>
			<Text size='md'>{children}</Text>
		</Button>
	)
}

export default Btn
