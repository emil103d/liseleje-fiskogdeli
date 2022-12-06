import { writable } from 'svelte/store';

export const products = writable([
	{
		id: '1',
		title: 'Lynstegt tun PRODUCT',
		kategory: 'Tapas',
		Subkategory: 'Fisk',
		price: '30 kr.',
		image: 'borat.jpg',
		quantity: 1
	},
	{
		id: '2',
		title: 'Lynstegt Laks PRODUCT',
		kategory: 'Tapas',
		Subkategory: 'Fisk',
		price: '30 kr.',
		image: 'borat.jpg',
		quantity: 1
	},
	{
		id: '3',
		title: 'Lynstegt Rejer PRODUCT',
		kategory: 'Tapas',
		Subkategory: 'Skaldyr',
		price: '30 kr.',
		image: 'borat.jpg',
		quantity: 1
	},
]);

// export default products;
