<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import Burgermenu from '../components/burgermenu.svelte';
	import Nyhedsbrev from '../components/nyhedsbrev.svelte';
	import Instafeed from '../components/Instafeed.svelte';
	import Footer from '../components/footer.svelte';
	
</script>

<Nav />
<Burgermenu />
<slot />
<Instafeed />
<Nyhedsbrev />
<Footer />
