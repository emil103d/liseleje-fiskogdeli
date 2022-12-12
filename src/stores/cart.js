import { readable, writable } from 'svelte/store';

export const products = readable([
	{
		id: '1',
		title: 'Lynstegt tun',
		kategory: 'fisk',
		price: '35',
		image: '/products/fisk/tun.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '2',
		title: 'Pepper Laks',
		kategory: 'fisk',
		price: '20',
		image: '/products/fisk/laks1.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '3',
		title: 'Hvidløgs Rejer',
		kategory: 'skaldyr',
		price: '10',
		image: '/products/skaldyr/rejer.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '4',
		title: 'Fiskefrikadeller',
		kategory: 'fisk',
		price: '8',
		image: '/products/fisk/fiskefrikadelle.webp',
		quantity: 1,
		type: 'p'
	},

	{
		id: '5',
		title: 'Krabbeklo',
		kategory: 'skaldyr',
		price: '10',
		image: '/products/skaldyr/krappeklo.webp',
		quantity: 1,
		type: 'p'
	},

	{
		id: '6',
		title: 'Lakseroulade',
		kategory: 'fisk',
		price: '8',
		image: '/products/fisk/lakseroulade.webp',
		quantity: 1,
		type: 'p'
	},

	{
		id: '7',
		title: 'Sild',
		kategory: 'fisk',
		price: '15',
		image: '/products/fisk/sild.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '8',
		title: 'Krebs',
		kategory: 'skaldyr',
		price: '30',
		image: '/products/skaldyr/krebs.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '9',
		title: 'Pillede rejer',
		kategory: 'skaldyr',
		price: '30',
		image: '/products/skaldyr/pillederejer.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '10',
		title: 'Laksesalat',
		kategory: 'salater',
		price: '30',
		image: '/products/salater/laksesalat.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '11',
		title: 'Krebsesalat',
		kategory: 'salater',
		price: '30',
		image: '/products/salater/krebsesalat.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '11',
		title: 'Tangsalat',
		kategory: 'salater',
		price: '30',
		image: '/products/salater/tangsalat.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '12',
		title: 'Tunsalat',
		kategory: 'salater',
		price: '30',
		image: '/products/salater/tunsalat.webp',
		quantity: 1,
		type: 'p'
	}
]);

export const tilkoebs = readable([
	{
		id: '13',
		title: 'Chablis',
		kategory: 'drikkevarer',
		price: '30',
		image: '/products/drikkevarer/chablis.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '14',
		title: 'Pinotage',
		kategory: 'drikkevarer',
		price: '30',
		image: '/products/drikkevarer/pinotage.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '15',
		title: 'Rose',
		kategory: 'drikkevarer',
		price: '30',
		image: '/products/drikkevarer/rose.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '16',
		title: 'Rosso',
		kategory: 'drikkevarer',
		price: '30',
		image: '/products/drikkevarer/rosso.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '17',
		title: 'Sancerre',
		kategory: 'drikkevarer',
		price: '30',
		image: '/products/drikkevarer/sancerre.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '18',
		title: 'Limemayo',
		kategory: 'tapanader',
		price: '30',
		image: '/products/dyppelse/limemayo.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '19',
		title: 'Remoulade',
		kategory: 'tapanader',
		price: '30',
		image: '/products/dyppelse/remoulade.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '20',
		title: 'Tzatziki',
		kategory: 'tapanader',
		price: '30',
		image: '/products/dyppelse/tzatziki.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '21',
		title: 'Hvedebrød',
		kategory: 'brød',
		price: '30',
		image: '/products/broed/broed.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '22',
		title: 'Surdej',
		kategory: 'brød',
		price: '30',
		image: '/products/broed/surdej.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '23',
		title: 'Knækbrød',
		kategory: 'brød',
		price: '30',
		image: '/products/broed/knækbrød.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '24',
		title: 'Rugbrød',
		kategory: 'brød',
		price: '30',
		image: '/products/broed/rugbrød.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '25',
		title: 'Remoulade',
		kategory: 'tapanader',
		price: '30',
		image: '/products/dyppelse/remoulade.webp',
		quantity: 1,
		type: 't'
	}
]);

export const cart = writable([]);

export const count = writable(1);

export const categories = ['alle', 'fisk', 'skaldyr', 'salater'];

export const kategorier = ['alle', 'drikkevarer', 'tapanader', 'brød'];

// popup
export const modal = writable(null);
export const windowStyle = writable({});
