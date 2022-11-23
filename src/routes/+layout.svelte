<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
	import Burgermenu from '../components/burgermenu.svelte';
</script>

<Nav />
<Burgermenu />
<slot />
<Footer />
