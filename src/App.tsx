import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PlayerSelector from './components/PlayerSelector'
import styles from './styles/app.module.css'
import '@mantine/core/styles.css'

function App() {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider>
				<main className={styles.main}>
					<PlayerSelector />
				</main>
			</MantineProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
