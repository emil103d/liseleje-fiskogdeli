import { readable, writable } from 'svelte/store';

export const products = readable([
	{
		id: '1',
		title: 'Lynstegt tun PRODUCT',
		kategory: 'Fisk',
		price: '30',
		image: 'borat.jpg',
		quantity: 1
	},
	{
		id: '2',
		title: 'Lynstegt Laks PRODUCT',
		kategory: 'Fisk',
		price: '30',
		image: 'borat.jpg',
		quantity: 1
	},
	{
		id: '3',
		title: 'Lynstegt Rejer PRODUCT',
		kategory: 'Skaldyr',
		price: '30',
		image: 'borat.jpg',
		quantity: 1
	}
]);

export const cart = writable([]);
