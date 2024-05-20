<script>
  import Title from "./Title.svelte";
  import ColorPannel from "./ColorPannel.svelte";
  import ArrowUp from "./ArrowUp.svelte";
  import Form from "./Form.svelte";
  import PageNumber from "$lib/PageNumber.svelte";
</script>

<section
  id="contact"
  class="relative h-screen w-screen flex flex-col justify-center items-center"
>
  <PageNumber page="101" />
  <ColorPannel />
  <Title />
  <Form />
  <ArrowUp />
</section>
