<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
	let current = '1';
</script>

<header class="bg-darkblue w-full border-t-2 m-auto" />

<slot />


<nav class="bg-darkblue">
	<div class="wrapper py-20 px-10">
		<div class="flex lg:max-w-[1024px] lg:m-auto justify-between">
	
            <div class="grid justify-center place-items-center text-center gap-4">
                <div class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid">
                    <img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="">
                </div>
				<a
						class={current === '1' ? 'selected' : ''}
						on:click={() => (current = '1')}
						href="/blandselvtapas/">Antal Personer
					</a>	


            </div>
            <div class="connector"></div>
            <div class="grid justify-center place-items-center text-center">
                <div class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center ">
                    <img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="">
                </div>
                <a
					class={current === '2' ? 'selected' : ''}
					on:click={() => (current = '2')}
					href="/blandselvtapas/vaelgfisketapas">Vælg tapasretter</a
				>
            </div>
            <div class="connector"></div>
            <div class="grid justify-center place-items-center text-center">
                <div class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center ">
                    <img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="">
                </div>
                <a
					class={current === '3' ? 'selected' : ''}
					on:click={() => (current = '3')}
					href="/blandselvtapas/tilkoeb">Tilkøb</a
				>
            </div>
            <div class="connector"></div>
            <div class="grid justify-center place-items-center text-center">
                <div class="h-14 w-14 rounded-full border-[3px] border-yellowdot bg-white grid place-content-center justify-center align-middle m-auto items-center ">
                    <img class="w-[70%] h-auto place-self-center logo" src="logo.png" alt="">
                </div>
                <a
					class={current === '4' ? 'selected' : ''}
					on:click={() => (current = '4')}
					href="/blandselvtapas/afslut">Afslut</a
				>
            </div>
		</div>
	</div>
</nav>







<style>
	.selected {
		font-weight: 600;
	}
</style>
