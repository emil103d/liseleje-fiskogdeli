<script>
	import Button from '/src/lib/uielements/Button.svelte';
	import Burgermenu from '/src/lib/components/Burgermenu.svelte';
	import Footer from '/src/lib/components/Footer.svelte';
</script>

<Burgermenu />
<section class="grid px-10 justify-center align-middle w-[100%] h-[100vh] place-content-center">
	<div class="md:grid grid-cols-2 text-center md:text-left">
		<div class="col-start-2">
			<h2 class="font-bold text-textcolor pb-8 md:pb-0">
				Siden er under opbygning <b class="text-yellowdot"> . </b>
			</h2>
			<div class="h-[2px] w-20 bg-darkblue mb-6 mt-2 hidden md:block" />
			<h3 class="pb-8">
				Vi beklager ulejligheden, vend snart tilbage igen så er vi klar med en ny side.
			</h3>
			<div class="hidden md:block">
				<Button type="primary">Tilbage til forsiden</Button>
			</div>
		</div>
		<img
			src="construction.png"
			class=" m-auto max-w-[150px] md:max-w-xs col-start-1 pb-8"
			alt="Illustration af siden er under opbygning"
		/>
		<div class="block md:hidden m-auto">
			<Button class="m-auto" type="primary"><a href="/">Tilbage til forsiden</a></Button>
		</div>
	</div>
</section>

<Footer />

<style>
	section {
		background-image: url('vaeg.png');
		background-size: contain;
	}
</style>
