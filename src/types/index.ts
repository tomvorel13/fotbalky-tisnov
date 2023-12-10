export type Player = {
	id: string
	firstName: string
	lastName: string
	rychlost: number
	fotbalovost: number
	bojovnost: number
}

export type Team = {
	id: number
	players: Player[]
}

export type PlayerStore = {
	players: Player[]
	selectedPlayers: Player[] | []
	teams: Team[] | []
	searchTerm: string
	setSearchTerm: (searchTerm: string) => void
	setAllPlayers: (players: Player[]) => void
	selectPlayer: (playerId: string) => void
	unselectPlayer: (playerId: string) => void
	reset: () => void
	generateTeams: () => void
}
