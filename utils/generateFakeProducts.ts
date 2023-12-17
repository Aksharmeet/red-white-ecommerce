import { faker } from '@faker-js/faker'

interface FakeProduct  {
	id: string
	product: string;
	price: string;
	productMaterial : string
	productDescription: string
	slug: string
	thumbnail: string
	images: string[]
}

const generateFakeProduct = ():FakeProduct  => {
	return {
		id: faker.commerce.isbn(),
		product: faker.commerce.product(),
		price: faker.commerce.price(),
		productMaterial : faker.commerce.productMaterial(),
		productDescription: faker.commerce.productDescription(),
		slug: faker.commerce.productAdjective(),
		thumbnail: faker.image.urlLoremFlickr({ width: 500, height: 350}),
		images: Array(10).fill(faker.image.url())
	}
}
export const generateFakeProducts = (length: number) => {
	const products: FakeProduct[] = []

	Array.from({ length }).forEach(() => products.push(generateFakeProduct()))

	return products
}
