import { RootRoute, Route, Outlet, Router } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Home from '../components/Home'
import Layout from '../components/Layout'
import Generator from '../components/Generator'

const rootRoute = new RootRoute({
	component: () => (
		<>
			<Layout>
				<Outlet />
			</Layout>
			<TanStackRouterDevtools position='bottom-right' />
		</>
	),
})

const indexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Home,
})

const generatorRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/generator',
	component: Generator,
})

const routeTree = rootRoute.addChildren([indexRoute, generatorRoute])

export const router = new Router({ routeTree })
