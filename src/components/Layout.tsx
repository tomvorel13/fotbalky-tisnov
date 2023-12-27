import { Link } from '@tanstack/react-router'

type Props = {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<div className='p-2 flex gap-4 justify-center'>
				<Link to='/' className='[&.active]:font-bold uppercase'>
					Hráči
				</Link>{' '}
				<Link to='/generator' className='[&.active]:font-bold uppercase'>
					Generátor
				</Link>
			</div>
			<hr />
			{children}
		</>
	)
}

export default Layout
