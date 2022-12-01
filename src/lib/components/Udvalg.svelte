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
            <Cards image="udvalg_fiskskaldyr.webp" kategori="Fisk & Skaldyr" beskrivelse="Alt godt fra havet - friskfanget i kattegat." />
            <Cards image="udvalg_fisketapas.webp" kategori="Fisketapas" beskrivelse="Køb vores tapasfade eller bland dit eget."/>  
            <Cards image="udvalg_tilbehør.webp" kategori="Tilbehør" beskrivelse="Vin, tapanader, brød m.m."/>
        </div>
    </div>
    
</section>

