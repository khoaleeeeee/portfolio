<script>
  import "../app.css";
  import "aos/dist/aos.css";
  import { onMount } from "svelte";
  import AOS from "aos";

  onMount(() => {
    AOS.init();
  });
</script>

<slot />
