<script>
  import { ArrowDownOutline } from "flowbite-svelte-icons";
</script>

<div
  class="flex font-bold justify-center absolute bottom-1 w-screen items-center p-5"
>
  <button
    class="animate-bounce flex flex-col items-center justify-center"
    title="Find out more"
    on:click={() => document.getElementById("about").scrollIntoView()}
    >More Below
    <ArrowDownOutline class="w-10 h-10" />
  </button>
</div>
