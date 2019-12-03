import slug from 'slug'

export const slugify = (str = '') => slug(str, { lower: true })
