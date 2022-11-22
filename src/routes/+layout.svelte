<script>
	import '../app.css';
	import Nav from "../components/nav.svelte";
	import Nyhedsbrev from '../components/nyhedsbrev.svelte';
	import Footer from "../components/footer.svelte";
</script>

<Nav />
<slot />
<Nyhedsbrev />
<Footer />
