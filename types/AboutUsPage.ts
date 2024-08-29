import type { Button } from "./Button"
import type { Image } from "./Image"

export interface Teacher {
	id: number
	name: string
	position: string
	other: string
	profile: Image
}

interface Team {
	id: number
	title: string
	teachers: Teacher[]
}

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
	team: Team
	kids: Kids
	content: {
		id: number
		description: string
		title_up: string
		title_down: string
	}
	btn: Button
}

export interface AboutUs {
	attributes: AboutUsAttributes
	id: number
}
