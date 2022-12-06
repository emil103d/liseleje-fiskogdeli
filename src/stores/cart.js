import { readable, writable } from 'svelte/store';

export const products = readable([
	{
		id: '1',
		title: 'Lynstegt tun',
		kategory: 'fisk',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 'p'
	},
	{
		id: '2',
		title: 'Lynstegt Laks',
		kategory: 'fisk',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 'p'
	},
	{
		id: '3',
		title: 'Lynstegt Rejer',
		kategory: 'skaldyr',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 'p'
	},
	{
		id: '4',
		title: 'Lynstegt Rejer',
		kategory: 'salater',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 'p'
	}
]);

export const tilkoebs = readable([
	{
		id: '5',
		title: 'Vino vino',
		kategory: 'vin',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 't'
	},
	{
		id: '6',
		title: 'Tapanader',
		kategory: 'tapanader',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 't'
	},
	{
		id: '7',
		title: 'Surdejsbrød',
		kategory: 'Brød',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 't'
	},
	{
		id: '8',
		title: 'Rødvin',
		kategory: 'Vin',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 't'
	}
]);

export const cart = writable([]);

export const categories = ['alle', 'fisk', 'skaldyr', 'salater'];

export const kategorier = ['alle', 'vin', 'tapanader', 'brød'];
