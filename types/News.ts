import type { Image } from "./Fotos"

interface NewsAttributes {
	content: string[]
	createdAt: string
	description: string
	image: {
		data: {
			attributes: Image
			id: number
		}
	}
	publishedAt: string
	slug: string
	title: string
	updatedAt: string
}

export interface News {
	attributes: NewsAttributes
	id: number
}
