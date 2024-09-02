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

export interface AboutUsTeacher {
	createdAt: string
	publishedAt: string
	updatedAt: string
	team: Team
	content: {
		id: number
		description: string
		title: string
	}
	btn: Button
}
