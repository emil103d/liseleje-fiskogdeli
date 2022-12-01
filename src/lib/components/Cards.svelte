<script>
    import Button from "../uielements/Button.svelte";
    export let kategori;
    export let beskrivelse;
    export let image;
</script>

<div class="flex justify-center">
    <div class="bg-white max-w-xs skygge ">
      <a href="#!">
        <div class="overflow-hidden">
        <img class="w-full object-cover md:aspect-[4/5] hover:scale-105" src={image} alt=""/>
      </div>
      <div class="px-2 py-4">
        <h5 class="text-gray-900 text-l font-semibold mb-1">{kategori}</h5>
        <p class="text-gray-700 text-sm mb-4">
            {beskrivelse}
        </p>
        <p class="underline font-semibold text-right">Se udvalg</p>
      </div>
    </a>
    </div>
  </div>

  <style>
    .skygge{
        box-shadow: 6px 6px #b9ddf6;
    }
    
  </style>
  
