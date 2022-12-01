<script>
	import Cards from "./Cards.svelte";
</script>

<section class="py-32 md:py-44 px-10">   
    <div class="lg:max-w-[1024px] lg:m-auto">
        <div class="text-textcolor">
            <h2>Fisk, Tapas & meget mere <b class="text-yellowdot">.</b></h2>
            <div class="h-[2px] w-20 bg-darkblue mb-6 mt-2"></div>
        </div>
        <div class="grid md:flex gap-12 md:justify-between">
            <Cards image="udvalg_fiskskaldyr.webp" kategori="Fisk & Skaldyr" beskrivelse="Alt godt fra havet - friskfanget i kattegat." />
            <Cards image="udvalg_fisketapas.webp" kategori="Fisketapas" beskrivelse="Køb vores tapasfade eller bland dit eget."/>  
            <Cards image="udvalg_tilbehør.webp" kategori="Tilbehør" beskrivelse="Vin, tapanader, brød m.m."/>
        </div>
    </div>
    
</section>

