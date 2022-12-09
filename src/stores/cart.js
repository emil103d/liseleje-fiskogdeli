import { readable, writable } from 'svelte/store';

export const products = readable([
	{
		id: '1',
		title: 'Lynstegt tun',
		kategory: 'fisk',
		price: '30',
		image: '/products/tun.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '2',
		title: 'Lynstegt Laks',
		kategory: 'fisk',
		price: '30',
		image: '/products/laks1.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '3',
		title: 'Lynstegt Rejer',
		kategory: 'skaldyr',
		price: '30',
		image: '/products/rejer.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '4',
		title: 'Laksemouse',
		kategory: 'salater',
		price: '30',
		image: '/products/laksemouse.webp',
		quantity: 1,
		type: 'p'
	},

	{
		id: '5',
		title: 'Fiskefrikadeller',
		kategory: 'fisk',
		price: '30',
		image: '/products/fiskefrikadelle.webp',
		quantity: 1,
		type: 'p'
	},

	{
		id: '6',
		title: 'Krabbeklo',
		kategory: 'skaldyr',
		price: '30',
		image: '/products/krappeklo.webp',
		quantity: 1,
		type: 'p'
	},

	{
		id: '7',
		title: 'Lakseroulade',
		kategory: 'fisk',
		price: '30',
		image: '/products/lakseroulade.webp',
		quantity: 1,
		type: 'p'
	},

	{
		id: '8',
		title: 'Sild',
		kategory: 'fisk',
		price: '30',
		image: '/products/sild.webp',
		quantity: 1,
		type: 'p'
	},

	{
		id: '9',
		title: 'Sild',
		kategory: 'fisk',
		price: '30',
		image: '/products/sild.webp',
		quantity: 1,
		type: 'p'
	},

	{
		id: '10',
		title: 'Sild',
		kategory: 'fisk',
		price: '30',
		image: '/products/sild.webp',
		quantity: 1,
		type: 'p'
	},

	{
		id: '11',
		title: 'Sild',
		kategory: 'fisk',
		price: '30',
		image: '/products/sild.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '9',
		title: 'Krabbeklo',
		kategory: 'skaldyr',
		price: '30',
		image: '/products/krappeklo.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '10',
		title: 'Krabbeklo',
		kategory: 'skaldyr',
		price: '30',
		image: '/products/krappeklo.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '11',
		title: 'Krabbeklo',
		kategory: 'skaldyr',
		price: '30',
		image: '/products/krappeklo.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '12',
		title: 'Krabbeklo',
		kategory: 'skaldyr',
		price: '30',
		image: '/products/krappeklo.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '13',
		title: 'Krabbeklo',
		kategory: 'skaldyr',
		price: '30',
		image: '/products/krappeklo.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '14',
		title: 'Laksemouse',
		kategory: 'salater',
		price: '30',
		image: '/products/laksemouse.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '15',
		title: 'Laksemouse',
		kategory: 'salater',
		price: '30',
		image: '/products/laksemouse.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '16',
		title: 'Laksemouse',
		kategory: 'salater',
		price: '30',
		image: '/products/laksemouse.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '17',
		title: 'Laksemouse',
		kategory: 'salater',
		price: '30',
		image: '/products/laksemouse.webp',
		quantity: 1,
		type: 'p'
	},
	{
		id: '18',
		title: 'Laksemouse',
		kategory: 'salater',
		price: '30',
		image: '/products/laksemouse.webp',
		quantity: 1,
		type: 'p'
	}
]);

export const tilkoebs = readable([
	{
		id: '19',
		title: 'Vino vino',
		kategory: 'vin',
		price: '30',
		image: '/products/vin.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '20',
		title: 'Tapanader',
		kategory: 'tapanader',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 't'
	},
	{
		id: '21',
		title: 'Surdejsbrød',
		kategory: 'brød',
		price: '30',
		image: '/products/broed.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '22',
		title: 'Rødvin',
		kategory: 'vin',
		price: '30',
		image: '/products/vin.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '23',
		title: 'Rødvin',
		kategory: 'vin',
		price: '30',
		image: '/products/vin.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '24',
		title: 'Rødvin',
		kategory: 'vin',
		price: '30',
		image: '/products/vin.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '25',
		title: 'Rødvin',
		kategory: 'vin',
		price: '30',
		image: '/products/vin.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '26',
		title: 'Rødvin',
		kategory: 'vin',
		price: '30',
		image: '/products/vin.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '27',
		title: 'Surdejsbrød',
		kategory: 'brød',
		price: '30',
		image: '/products/broed.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '28',
		title: 'Surdejsbrød',
		kategory: 'brød',
		price: '30',
		image: '/products/broed.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '29',
		title: 'Surdejsbrød',
		kategory: 'brød',
		price: '30',
		image: '/products/broed.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '30',
		title: 'Surdejsbrød',
		kategory: 'brød',
		price: '30',
		image: '/products/broed.webp',
		quantity: 1,
		type: 't'
	},
	{
		id: '31',
		title: 'Tapanader',
		kategory: 'tapanader',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 't'
	},
	{
		id: '32',
		title: 'Tapanader',
		kategory: 'tapanader',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 't'
	},
	{
		id: '33',
		title: 'Tapanader',
		kategory: 'tapanader',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 't'
	},
	{
		id: '34',
		title: 'Tapanader',
		kategory: 'tapanader',
		price: '30',
		image: '/borat.jpg',
		quantity: 1,
		type: 't'
	}
]);

export const cart = writable([]);

export const count = writable(1);

export const categories = ['alle', 'fisk', 'skaldyr', 'salater'];

export const kategorier = ['alle', 'vin', 'tapanader', 'brød'];

// popup
export const modal = writable(null);
export const windowStyle = writable({});
