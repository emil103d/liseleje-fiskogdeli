<script>
	export let type = 'default';
</script>

<button class={type}>
	<slot />
	<svg viewBox="0 0 455.555 48" preserveAspectRatio="none" width="150" height="10">
		<path
			d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44"
		/><path
			d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44"
		/></svg
	>
</button>

<style>
	button,
	.secondary {
		font-size: var(--knapsize);
		font-weight: bold;
		font-family: 'Lato', sans-serif;
		display: inline-block;
		position: relative;
		color: inherit;
		text-decoration: none;
		position: relative;
		margin-bottom: 1rem;
	}

	svg {
		height: 5px;
		position: absolute;
		width: 100%;
	}
	svg path {
		fill: transparent;
		stroke-width: 4px;
		stroke: currentColor;
		stroke-dasharray: 547.4111328125;
		stroke-dashoffset: 547.4111328125;
		transition: stroke-dashoffset 0.5s cubic-bezier(0.29, 0.68, 0.74, 1.02);
	}
	button:hover svg path {
		stroke-dashoffset: 0;
	}
</style>
