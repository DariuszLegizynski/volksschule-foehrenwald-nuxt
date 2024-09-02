import type { Button } from "./Button"
import type { Image } from "./Image"

export interface Class {
	id: number
	class: string
	description: string | null
	foto: Image
}

export interface Kids {
	id: number
	title: string
	classes: Class[]
}

export interface AboutUsAttributes {
	createdAt: string
	publishedAt: string
	updatedAt: string
	kids: Kids
	content: {
		id: number
		description: string
		title: string
	}
	btn: Button
}

export interface AboutUsClasses {
	attributes: AboutUsAttributes
	id: number
}
