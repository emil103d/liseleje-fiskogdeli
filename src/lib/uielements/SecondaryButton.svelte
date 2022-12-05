<script>
	export let type = 'default';
</script>

<button class={type}>
	<slot />
</button>

<style>
	button,
	.secondary {
		font-size: var(--knapsize);
		font-weight: bold;
		font-family: 'Lato', sans-serif;
		display: inline-block;
		position: relative;
	}

	button:before {
		position: absolute;
		content: '';
		bottom: -15px;
		left: 0;
		height: 100%;
		width: 100%;
		background: url(/line.svg) repeat-x;
		background-position: 0;
	}

	button:hover::before {
		animation: waveline 4s linear infinite;
		/* opacity: 0; */
		transition: all ease 0.5s;
	}

	@keyframes waveline {
		to {
			background-position: -150px;
		}
	}
</style>
