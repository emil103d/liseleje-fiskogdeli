<script>
	import { fade } from 'svelte/transition';
</script>

<div class="sideboxRight flex bg-lightblue p-4 min min-h-full">
	<ul class="menu self-center md:pl-32" in:fade={{ y: 200, duration: 1000 }}>
		<li>
			<div class="flex gap-2">
				<a class="hover-underline-animation" href="tel:7027 9007"
					>+45 3976 2065<svg
						viewBox="0 0 455.555 48"
						preserveAspectRatio="none"
						width="150"
						height="10"
					>
						<path
							d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44"
						/><path
							d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44"
						/></svg
					></a
				>
			</div>
		</li>
		<li>
			<div class="flex gap-2">
				<a class="hover-underline-animation" href="mailto:info@hojskolendk.dk"
					>fisk@liseleje.dk<svg
						viewBox="0 0 455.555 48"
						preserveAspectRatio="none"
						width="150"
						height="10"
					>
						<path
							d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44"
						/><path
							d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44"
						/></svg
					></a
				>
			</div>
		</li>
		<li>
			<div class="flex gap-2">
				<a
					class="hover-underline-animation"
					href="adress:Standvejen 69,
4930 Liseleje"
					>Standvejen 69, 4930 Liseleje<svg
						viewBox="0 0 455.555 48"
						preserveAspectRatio="none"
						width="150"
						height="10"
					>
						<path
							d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44"
						/><path
							d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44"
						/></svg
					></a
				>
			</div>
		</li>
	</ul>
</div>

<style>
	.menu {
		justify-content: center;
		display: flex;
		flex-direction: column;
		position: relative;
		text-decoration: none;
		color: #1f425f;
		font-size: clamp(1.0625rem, 0.9688rem + 0.375vw, 1.25rem);
		margin-bottom: 1rem;
	}

	ul {
		list-style: none;
	}

	li a {
		color: inherit;
		text-decoration: none;
		position: relative;
		margin-bottom: 1rem;
	}

	.menu a svg {
		/* height: 10px; */
		position: absolute;
		width: 100%;
	}

	.menu a svg path {
		fill: transparent;
		stroke-width: 4px;
		stroke: currentColor;
		stroke-dasharray: 547.4111328125;
		stroke-dashoffset: 547.4111328125;
		transition: stroke-dashoffset 0.5s cubic-bezier(0.29, 0.68, 0.74, 1.02);
	}

	.menu a:hover svg path {
		stroke-dashoffset: 0;
	}
</style>
