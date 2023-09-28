import { MantineProvider } from '@mantine/core'
import PlayerSelector from './components/PlayerSelector'
import styles from './styles/app.module.css'
import '@mantine/core/styles.css'

function App() {
	return (
		<MantineProvider>
			<main className={styles.main}>
				<PlayerSelector />
			</main>
		</MantineProvider>
	)
}

export default App
