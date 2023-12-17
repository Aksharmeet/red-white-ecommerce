import {faker} from '@faker-js/faker'

interface FakeImage  {
	id: string
	imageAlt: string;
	src: string
}

const generateFakeImage = ():FakeImage  => {
	return {
		id: faker.commerce.isbn(),
		src: faker.image.urlLoremFlickr({category: 'clothes', width:300, height:500}),
		imageAlt: faker.commerce.productAdjective(),
	}
}
export const generateFakeImages = (length: number) => {
	const images: FakeImage[] = []

	Array.from({ length }).forEach(() => images.push(generateFakeImage()))

	return images
}
