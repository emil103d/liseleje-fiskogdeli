<script>
	import Button from '../uielements/Button.svelte';
</script>

<div class=" p-10">
	<h2 class="font-bold text-darkblue">Du har fisk i fadet <b class="text-yellowdot"> . </b></h2>
	<div class="h-[2px] w-20 bg-darkblue mb-6 mt-2" />
	<p class="pb-2">Du er ved at forlade din bestilling og dine valg vil ikke blive gemt.</p>

	<div
		class="flex pb-6
	"
	>
		<p>Ønsker du af forlade bestillingen?</p>
	</div>
	<div class=" flex justify-between">
		<Button type="secondary"><a href="/">Til forsiden</a></Button>
		<Button type="primary"><a href="/blandselvtapas">Forsæt bestilling</a></Button>
	</div>
</div>

<style>
</style>
