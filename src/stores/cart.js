import { readable, writable } from 'svelte/store';

export const products = readable([
	{
		id: '1',
		title: 'Lynstegt tun PRODUCT',
		kategory: 'fisk',
		price: '30',
		image: '/borat.jpg',
		quantity: 1
	},
	{
		id: '2',
		title: 'Lynstegt Laks PRODUCT',
		kategory: 'fisk',
		price: '30',
		image: '/borat.jpg',
		quantity: 1
	},
	{
		id: '3',
		title: 'Lynstegt Rejer PRODUCT',
		kategory: 'skaldyr',
		price: '30',
		image: '/borat.jpg',
		quantity: 1
	},
	{
		id: '4',
		title: 'Lynstegt Rejer PRODUCT',
		kategory: 'salater',
		price: '30',
		image: '/borat.jpg',
		quantity: 1
	}
]);

export const tilkoeb = readable([
	{
		id: '1',
		title: 'Vino vino',
		kategory: 'vin',
		price: '30',
		image: '/borat.jpg',
		quantity: 1
	},
	{
		id: '2',
		title: 'Tapanader',
		kategory: 'tapanader',
		price: '30',
		image: '/borat.jpg',
		quantity: 1
	},
	{
		id: '3',
		title: 'Surdejsbrød',
		kategory: 'Brød',
		price: '30',
		image: '/borat.jpg',
		quantity: 1
	},
	{
		id: '4',
		title: 'Rødvin',
		kategory: 'Vin',
		price: '30',
		image: '/borat.jpg',
		quantity: 1
	}
]);

export const cart = writable([]);

export const categories = ['alle', 'fisk', 'skaldyr', 'salater'];

export const kategorier = ['vin', 'tapanader', 'brød'];
