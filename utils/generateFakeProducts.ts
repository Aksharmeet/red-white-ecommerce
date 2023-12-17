import { faker } from '@faker-js/faker'

interface FakeProduct  {
	id: string
	name: string;
	price: string;
	productMaterial : string
	productDescription: string
	href: string
	thumbnail: string
	images: string[]
	imageAlt: string
}

const generateFakeProduct = ():FakeProduct  => {
	return {
		id: faker.commerce.isbn(),
		name: faker.commerce.product(),
		price: faker.commerce.price(),
		productMaterial : faker.commerce.productMaterial(),
		productDescription: faker.commerce.productDescription(),
		href: `/${faker.commerce.productAdjective().toLowerCase()}`,
		thumbnail: faker.image.urlLoremFlickr({ width: 500, height: 700, category: 'clothes'}),
		images: Array(10).fill(faker.image.url()),
		imageAlt: faker.commerce.productName(),
	}
}
export const generateFakeProducts = (length: number) => {
	const products: FakeProduct[] = []

	Array.from({ length }).forEach(() => products.push(generateFakeProduct()))

	return products
}
