<script>
	import '../app.css';
	import Nav from '../lib/components/Nav.svelte';
	import Herosection from '../lib/components/Herosection.svelte';
	import Fiskekrog from '../lib/components/fiskekrog.svelte';
	import Blandselvtapas from '../lib/components/Blandselvtapas.svelte';
	import Friskt_loyalt from '../lib/components/Friskt_loyalt.svelte';
	import Udvalg from '../lib/components/Udvalg.svelte';
	import Testimonials from '../lib/components/Testimonials.svelte';
	import Nyhedsbrev from '../lib/components/Nyhedsbrev.svelte';
	import Howitworks from '../lib/components/Howitworks.svelte';
	import Instafeed from '../lib/components/Instafeed.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Burgermenu from '../lib/components/Burgermenu.svelte';
	import Saos from 'saos';
</script>

<svelte:head>
	<title>Fiskebutik, Fisketapas & Deli - Liseleje Fisk & Tapas </title>
	<meta name="viewport" content="width=device-width" />
	<meta name="content" content="Frisk fisk eller fisketapas til frokost i Liseleje." />
</svelte:head>

<Nav />
<Burgermenu />
<Herosection />
<Fiskekrog />

<Blandselvtapas />

<Friskt_loyalt />

<Udvalg />

<Testimonials />
<Howitworks />
<Instafeed />
<Nyhedsbrev />
<Footer />

<style>
	@keyframes -global-fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes -global-scale-in-center {
		0% {
			transform: scale(0.5);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
