import { writebale } from 'svelte/store'; // kan læse og skrive fra store 

const products = writebale([
	{ id: 1, title: 'jeg er lækker' },
	{ id: 1, title: 'njdfnvkjd' }
]);

export default CartItemsStore;
