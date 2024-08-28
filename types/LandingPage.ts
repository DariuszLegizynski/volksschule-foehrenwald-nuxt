import type { Content } from "./Content"
import type { Image } from "./Image"
import type { Button } from "./Button"

export interface Feature {
	id: number
	title: string
	description: string
	animationType: string
}

export interface Hero {
	id?: number
	title_up: string
	title_down: string
	content: Content
	background_media: Image
	btn_left: Button
	btn_right: Button
}

export interface Contact {
	id: number
	title: string
	phone: string
	name: string
	email: string
	city: string
	address: string
}

export interface AboutUs {
	id: number
	title: string
	features: Feature[]
	btn: Button
}

export interface FotoGallery {
	id: number
	btn: Button
	content: {
		id: number
		title: string
		subtitle: string
	}
}

export interface News {
	id: number
	btn: Button
	content: {
		id: number
		title: string
		subtitle: string
	}
}

export interface LandingPageAttributes {
	createdAt: string
	publishedAt: string
	updatedAt: string
	hero: Hero
	contact: Contact
	foto_gallery: FotoGallery
	news: News
}

export interface LandingPage {
	attributes: LandingPageAttributes
	id: number
}
