<script>
	import Label from '../uielements/Label.svelte';
	import Button from '../uielements/Button.svelte';
</script>

<section id="section_2_container">
	<div class="wrapper py-32 md:py-44 px-10
	">
		<div class="grid  md:grid-cols-2 lg:max-w-[1024px] lg:m-auto place-items-center">
			<div class="pb-12 md:pb-0 gap-2 md:pr-10 m-auto lg:m-0 text-textcolor">
				<Label title="Nyhed" />
				<h2 class="font-bold ">Bland selv fisketapas <b class="text-yellowdot"> . </b></h2>
				<div class="h-[2px] w-20 bg-darkblue mb-6 mt-2" />
				<p class="pb-8">
					Vi har endnu engang udvalgt de bedste og lækreste fisketapasretter. Vi bringer alt det
					bedste fra havet til jer, og indhyller jer i smagsoplevelser fra start til slut. <br /> Gør
					som alle andre livsnyder og tag din mad nede på stranden. Kombiner dine egne favoritter eller
					vælg en af vores sammensætninger. Vi glæder os til at se, hvad du finder på.
				</p>

				<a href="/blandselvtapas">
					<Button type="primary"><a href="/blandselvtapas">Bland tapas</a></Button>
				</a>

				
			</div>

			<div class="w-full h-full skygge md:block">
				<video
					src="tapas.mp4"
					class="w-full h-full object-cover aspect-square"
					track
					kind="video/mp4"
					autoplay
					loop
					muted
				/>
				<!-- <img class="w-full h-full object-cover" src="borat.jpg" alt="" /> -->
			</div>
		</div>
	</div>
</section>

<style>
	.skygge {
		box-shadow: 20px 20px #e5f1f9;
	}
</style>
