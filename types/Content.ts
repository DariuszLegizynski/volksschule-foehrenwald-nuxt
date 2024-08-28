export interface Child {
	type: string
	text: string
}

export interface Content {
	type: string
	children: Child[]
}
