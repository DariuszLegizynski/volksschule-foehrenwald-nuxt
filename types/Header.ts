import type { Image } from "./Image"

interface HeaderLink {
	id: number
	link: string
}

export interface Header {
	header: HeaderLink[]
	logo: Image
}

interface HeaderAttributes {
	createdAt: string
	publishedAt: string
	updatedAt: string
	header: Header
}

export interface HeaderComponent {
	attributes: HeaderAttributes
	id: number
}
