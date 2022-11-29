<script>
	import { fade } from 'svelte/transition';
</script>

<div class="sideboxRight flex bg-lightblue p-4 min min-h-full">
	<ul class="self-center md:pl-32" in:fade={{ y: 200, duration: 1000 }}>
		<li>
			<a class="hover-underline-animation" href="tel:7027 9007">+45 3976 2065</a>
		</li>
		<li>
			<a class="hover-underline-animation" href="mailto:info@hojskolendk.dk">fisk@liseleje.dk</a>
		</li>
		<li>
			<a
				class="hover-underline-animation"
				href="adress:Standvejen 69,
4930 Liseleje">Standvejen 69, 4930 Liseleje</a
			>
		</li>
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
