<script>
	import Label from '../uielements/Label.svelte';
	import Button from '../uielements/Button.svelte';
</script>

<section>
	<div class="wrapper py-20 px-10">
		<div class="grid  md:grid-cols-2 lg:max-w-[1024px] lg:m-auto place-items-center">

			<div class="w-full h-full skygge md:block relative">
				<img src="borat.jpg" alt="">
				<div class="h-32 w-32 rounded-full bg-yellowdot absolute top-[-20px] right-[-20px] button z-10 text-center">
					<p>Martin</p>
					<p>Fiske entusiast</p>
				</div>
			</div>

			<div class="pb-6 md:pb-0 gap-2 pr-6 m-auto lg:m-0 text-textcolor">
				<Label title="Nyhed"> </Label>
				<h2 class="font-bold ">Bland selv fisketapas <b class="text-yellowdot"> . </b></h2>
				<div class="h-[2px] w-20 bg-darkblue mb-6" />
				<p class="pb-6">
					Liseleje’s fisk og deli version af fiske tapas er farvefuldr, der byder på mere og andet
					end rå fisk. Den klassiske ret der nænsomt er krydret og smagt til med skandinaviske
					detaljer og visionære tanker om mad. Vælg fra menuen eller komponer din egen, vi glæder os
					til at se hvad du finder på.
				</p>
				<Button type="primary">Bestil takeaway</Button>
			</div>

			
		</div>
	</div>
</section>

<style> 

	.button {
		border: px solid red
	}
	
	</style>