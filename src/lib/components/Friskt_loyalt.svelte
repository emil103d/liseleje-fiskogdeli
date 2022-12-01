<script>
	import Label from '../uielements/Label.svelte';
	import Button from '../uielements/Button.svelte';
</script>

<section class="bg-darkblue">
	<div class="wrapper py-32 md:py-44 px-10">
		<div class="grid  md:grid-cols-2 lg:max-w-[1024px] lg:m-auto place-items-center">

			<div class="w-full h-full skygge md:block relative">
				<img src="martin.webp" alt="" class="w-full">
				<div class="h-40 w-40 rounded-full bg-yellowdot absolute top-[-30px] right-[-30px] button z-10 text-center grid place-content-center">
					<div class="grid gap-2">
						<p class="font-headingtext text-2xl">Martin</p>
						<p class="font-headingtext text-sm "> Medejer & <br> fiske entusiast</p>
					</div>
				</div>
			</div>

			<div class="pt-6 mt-6 md:pl-10  md:pb-0 gap-2  m-auto lg:m-0 text-white">
				<h2 class="font-bold ">Friskt & Lokalt <b class="text-yellowdot"> . </b></h2>
				<div class="h-[2px] w-20 bg-white mb-6 mt-2" />
				<p class="pb-6">
					Vi elsker Liseleje og har derfor startet Liseleje Fisk & Deli så du kan forkæles med frisk fisk løbet af hele sommeren. Vi er født og opvokset i området og har derfor en stor passion forkæles med frisk fisk løbet af hele sommeren.
				</p>
				<a href="www.google.dk" class="font-semibold hover:underline"> Læs mere</a>
			</div>
		</div>
	</div>
	<div class="">
		<img src="fiskebillede.webp" class="w-full min-h-[200px]" alt="">
	</div>

</section>

<style> 

	.button {
		border: 7px solid #1f425f
	}
	
	</style>