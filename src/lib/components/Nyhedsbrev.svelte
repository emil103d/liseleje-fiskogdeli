<script>
	import Button from '../uielements/Button.svelte';
</script>

<section class="py-32 md:py-44 px-10 min-h-[20rem]">
	<div class=" md:flex md:justify-between gap-10 lg:max-w-[1024px] lg:m-auto lg:flex-col">
		<div class="pb-12 lg:pb-2 gap-2 m-auto lg:m-0 text-textcolor">
			<h2 class="font-bold ">Modtag nyheder og inspiration <b class="text-yellowdot"> . </b></h2>
			<div class="h-[2px] w-20 bg-darkblue mb-6 mt-2" />
			<p>Tilmeld dig vores nyhedsbrev & spar 10% på din første ordre</p>
		</div>

		<div class="">
			<div class="lg:flex lg:justify-between">
				<div class="grid pb-4 lg:pb-0">
					<form class="grid gap-4 lg:flex lg:justify-between w-[100%]">
						<div>
							<label for="navn" class="text-textcolor font-semibold">Navn</label>
							<input
								class="h-[53.6px] appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
								type="text"
								placeholder="Indtast navn"
								aria-label="Full name"
							/>
						</div>

						<div>
							<label for="e-mail" class="text-textcolor font-semibold ">E-mail</label>
							<input
								class="h-[53.6px] appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
								type="text"
								placeholder="Indtast e-mail"
								aria-label="E-mail"
							/>
						</div>
					</form>
				</div>

				<div class="grid items-end">
					<Button type="primary">Tilmeld mig</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background-image: url('../../borat.jpg');
		background-size: contain;
	}

	::placeholder {
		font-size: 0.8em;
	}
</style>
