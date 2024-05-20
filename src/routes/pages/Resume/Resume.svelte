<script>
  import Title from "./Title.svelte";
  import Intro from "./Intro.svelte";
  import Layout from "./Layout.svelte";
  import PageNumber from "$lib/PageNumber.svelte";
  import ColorPannel from "./ColorPannel.svelte";
</script>

<section
  id="resume"
  class="relative h-[200vh] w-screen flex flex-col items-center"
>
  <PageNumber page="100" />
  <ColorPannel />
  <Title />
  <Intro />
  <Layout />
</section>
