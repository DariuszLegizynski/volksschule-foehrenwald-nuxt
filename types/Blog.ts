interface Entry {
  createdAt: string
  publishedAt: string
  slug: string
  title: string
  updatedAt: string
}

export interface Blog {
  attributes: Entry,
  id: number
}