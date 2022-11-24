<script>    
    import Button from "../components/Button.svelte";
</script>

<section class="py-20 px-10">

    <div class=" md:flex md:justify-between lg:max-w-[1024px] lg:m-auto lg:flex-col">
 
        <div class="pb-6  gap-2 pr-4 m-auto lg:m-0">
            <p class="text-2xl font-bold">TILMELD DIG VORES NYHEDSBREV</p>
            <p>SPAR 10% på din første ordre</p>
        </div>


        <div class="">
            <div class="lg:flex lg:justify-between">
                <div class="grid pb-4 lg:pb-0">

                        <form class="grid gap-4 lg:flex lg:justify-between w-[100%]">
                            <div>
                                <label for="navn" class="text-textcolor font-semibold" >Navn</label>
                                <input class="h-[53.6px] appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Indtast navn" aria-label="Full name">
                            </div>
                    
                            <div>
                                <label for="e-mail" class="text-textcolor font-semibold">E-mail</label>
                                <input class="h-[53.6px] appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Indtast e-mail" aria-label="E-mail">
                            </div>
                        </form>
                        </div>
                
                        <div class="grid items-end">
                            <Button type="primary">primary </Button>
                        </div>
                </div>
            </div>
        </div>


</section>












<style>
    section {
        background-image: url("nyhedsbrev_baggrund.jpg");
        background-size: cover;
    }
</style>