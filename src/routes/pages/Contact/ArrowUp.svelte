<script>
  import { ArrowUpOutline } from "flowbite-svelte-icons";
</script>

<div
  class="flex font-bold justify-center absolute bottom-1 w-screen items-center p-5"
>
  <button
    class="animate-bounce flex flex-col items-center justify-center"
    title="Back to top"
    on:click={() => document.getElementById("welcome").scrollIntoView()}
    >Back to top
    <ArrowUpOutline class="w-10 h-10" />
  </button>
</div>
