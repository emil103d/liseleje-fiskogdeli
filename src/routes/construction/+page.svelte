<script>
	import Button from '/src/lib/uielements/Button.svelte';
	import Burgermenu from '/src/lib/components/Burgermenu.svelte';
	import Footer from '/src/lib/components/Footer.svelte';
</script>

<Burgermenu />


<main class="pt-[150px] pb-[150px] md:py-32 lg:py-44 md:h-[100vh] px-5 md:px-10 place-content-center w-full grid overflow-y-hidden" id="bla">
	<div class="grid lg:max-w-[1024px] lg:m-auto">
		
		<div class="md:grid grid-cols-2 gap-10 text-center md:text-left items-center">
			<div class="items-center col-start-2 row-start-1">
				<h2 class="font-bold text-textcolor pb-8 md:pb-0">
					Siden er under opbygning <b class="text-yellowdot"> . </b>
				</h2>
				<div class="h-[2px] w-20 bg-darkblue mb-6 mt-2 hidden md:block" />
				<p class="pb-8">
					Vi beklager ulejligheden, vend snart tilbage igen så er vi klar med en ny side. Siden er ved
					at blive bygget men tag en rundrejse på vores andre sider imens
				</p>
				<div class="hidden md:block">
					<a href="/">
						<Button type="primary">Tilbage til forsiden</Button>
					</a>
				</div>
			</div>

			<div class="col-start-1 row-start-1" >
			<img
				src="construction.png"
				class=" m-auto max-w-[150px] md:max-w-xs pb-6"
				alt="Illustration af siden er under opbygning"
			/>
			<div class="block md:hidden m-auto">
				<a href="/">
					<button class="m-auto" type="primary">Tilbage til forsiden</button>
				</a>
			</div>
			</div>
			
		</div>
	</div>
</main>

<Footer />

<style>
	section {
		background-image: url('vaeg.png');
		background-size: contain;
	}
</style>
