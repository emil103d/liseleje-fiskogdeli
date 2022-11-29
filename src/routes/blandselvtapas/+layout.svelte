<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
	import Header from '/src/lib/components/Header.svelte';
	let current = '1';
</script>

<Header	/>

<slot />


<nav class="bg-darkblue">
	<div class="wrapper py-20 px-10">

		<div class="flex lg:max-w-[1024px] lg:m-auto justify-between relative">
        
			<div class="grid justify-center place-items-center text-center gap-4 w-[123px] relative">
				<div class="absolute right-0 w-[50%] h-[3px] bg-white z-0"></div>
				<div class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid z-20">
                    <img class="w-[70%] h-auto place-self-center logo " src="logo.png" alt="">
                </div>
			</div>

            <div class="connector"></div>
            
			<div class="grid justify-center place-items-center text-center w-[134px] relative">
				<div class="absolute right-0 w-[100%] h-[3px] bg-white z-0"></div>
                <div class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center z-30">
                    <img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="">
                </div>
            </div>
            
			<div class="connector"></div>
            
			<div class="grid justify-center place-items-center text-center w-[48px]">
                <div class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center ">
                    <img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="">
                </div>
            </div>
            
			<div class="connector"></div>
            
			<div class="grid justify-center place-items-center text-center w-[124px] relative">
				<div class="absolute left-0 w-[50%] h-[3px] bg-white z-0"></div>
                <div class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center z-30 ">
                    <img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="">
                </div>
            </div>
		
		</div>

		<div class="flex justify-between lg:max-w-[1024px] lg:m-auto pt-2">
			<div class="w-[123px]">
				<a  
							class={current === '1' ? 'selected' : ''}
							on:click={() => (current = '1')}
							href="/blandselvtapas/">Antal Personer 
						</a>	

			</div>

			<div class="">
				<a
						class={current === '2' ? 'selected' : ''}
						on:click={() => (current = '2')}
						href="/blandselvtapas/vaelgfisketapas">Vælg tapasretter</a
					>

			</div>

			<div>
				<a
					class={current === '3' ? 'selected' : ''}
					on:click={() => (current = '3')}
					href="/blandselvtapas/tilkoeb">Tilkøb</a
				>

			</div>

			<div>
				<a
					class={current === '4' ? 'selected' : ''}
					on:click={() => (current = '4')}
					href="/blandselvtapas/afslut">Afslut bestilling</a
				>

			</div>
		</div>
	</div>
</nav>


<style>
	.selected {
		font-weight: 600;
	}

	.connector {
  display: inline-block;
  background: white;
  height: 3px;
  flex-grow: 1;
  place-self: center;
}
</style>
