<script>
	import Label from '../uielements/Label.svelte';
	import Button from '../uielements/Button.svelte';
</script>

<section>
	<div class="wrapper py-20 px-10">
		<div class="grid  md:grid-cols-2 lg:max-w-[1024px] lg:m-auto place-items-center">
			<div class="pb-6 md:pb-0 gap-2 md:pr-10 m-auto lg:m-0 text-textcolor">
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

			<div class="w-full h-full skygge md:block">
				<video src="tapas.mp4" class="w-full h-full object-cover aspect-square" track kind="video/mp4" autoplay loop ></video>
				<!-- <img class="w-full h-full object-cover" src="borat.jpg" alt="" /> -->
			</div>
		</div>
	</div>
</section>

<style>
	section {
	}

	.skygge {
		box-shadow: 20px 20px #f8fcfe;
	}
</style>
