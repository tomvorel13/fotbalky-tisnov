export type Player = {
	id: string
	jmeno: string
	prijmeni: string
	rychlost: number
	strelba: number
	nahravka: number
	driblink: number
	obrana: number
	sila: number
}

export type Team = {
	id: number
	players: Player[]
}
