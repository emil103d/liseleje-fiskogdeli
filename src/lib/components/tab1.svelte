<script>
	import { fade } from 'svelte/transition';
	import Label from './Label.svelte';
</script>

<div class="sideboxRight flex bg-lightblue p-4 min-h-full ">
	<ul class="self-center md:pl-32" in:fade={{ y: 200, duration: 1000 }}>
		<li>
			<a class="hover-underline-animation" href="/blandselvtapasflow">Fisk og Skaldyr</a>
		</li>
		<li>
			<div class="flex gap-2">
				<a class="hover-underline-animation" href="/construction">Fisketapas</a>
				<Label title="Populært" />
			</div>
		</li>
		<li>
			<a class="hover-underline-animation" href="/construction">Delikatesser</a>
		</li>
		<li>
			<a class="hover-underline-animation" href="/construction">Tilbehør</a>
		</li>
		<li><a class="hover-underline-animation" href="/construction">Alle Produkter</a></li>
	</ul>
</div>

<style>
	.hover-underline-animation {
		display: inline-block;
		position: relative;
		text-decoration: none;
		color: #1f425f;
		font-size: clamp(1.0625rem, 0.9688rem + 0.375vw, 1.25rem);
		margin-bottom: 1rem;
	}

	/* .hover-underline-animation::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #1f425f;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.hover-underline-animation:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	} */

	.hover-underline-animation {
		padding-bottom: 10px;
		background: radial-gradient(circle 6px at bottom, currentColor 95%, #0000) bottom 4px left 9px,
			radial-gradient(circle 6px at top, currentColor 95%, #0000) bottom 0 left 0;
		background-size: 17px 6px;
		background-repeat: repeat-x;
		-webkit-mask: linear-gradient(#000 0 0) top / 100% calc(100% - 12px),
			linear-gradient(#000 0 0) bottom left/var(--p, 0%) 12px;
		-webkit-mask-repeat: no-repeat;
		transition: 0.5s;
	}
	.hover-underline-animation:hover {
		--p: 100%;
	}
</style>
