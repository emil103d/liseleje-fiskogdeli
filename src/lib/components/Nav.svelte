<script>
    import '/src/app.css';
	import Burgermenu from './Burgermenu.svelte';
</script>

<header class="flex justify-center">
    <div class="logo">
        <a href="">
            <p>Fisk & Deli</p>
            <p>LiseLeje</p>
            <div>
                <img src="logo.svg" alt="">
            </div>
        </a>
    </div>
    <div class="burgermenu">
        <Burgermenu />
    </div>
</header>

<style>

img {
    max-width: 50px;
    height: auto;
}
</style>