import type { Button } from "./Button"

export interface AboutUsAttributes {
	createdAt: string
	publishedAt: string
	updatedAt: string

	btn: Button
}

export interface AboutUs {
	attributes: AboutUsAttributes
	id: number
}
