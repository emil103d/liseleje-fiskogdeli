<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import Burgermenu from '../components/burgermenu.svelte';
	import Nyhedsbrev from '../components/nyhedsbrev.svelte';
	import howitworks from '../components/howitworks.svelte';
	import Instafeed from '../components/Instafeed.svelte';
	import Footer from '../components/footer.svelte';
	
</script>

<Nav />
<Burgermenu />
<slot />
<howitworks />
<Instafeed />
<Nyhedsbrev />
<Footer />
