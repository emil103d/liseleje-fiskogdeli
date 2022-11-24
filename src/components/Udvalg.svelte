<script>
	import Cards from "./Cards.svelte";
</script>

<section class="py-20 px-10">   
    <div class="lg:max-w-[1024px] lg:m-auto">
        <div class="text-textcolor pb-6">
            <h2>Fisk, Tapas & meget mere <b class="text-yellowdot">.</b></h2>
            <div class="h-[2px] w-20 bg-darkblue"></div>
        </div>
        <div class="md:flex gap-4 md:justify-between">
            <Cards />
            <Cards />  
            <Cards />
        </div>
    </div>
    
</section>

