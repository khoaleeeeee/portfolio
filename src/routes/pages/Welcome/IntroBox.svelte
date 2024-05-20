<script>
  import Typewriter from "svelte-typewriter";
  import ArrowDown from "./ArrowDown.svelte";
  import Buttons from "./Buttons.svelte";
  import Greets from "./Greets.svelte";

  let startFirstLine = false;
  let startSecondLine = false;
  let startThirdLine = false;

  let showMore = false;
</script>

<div
  class="flex flex-col justify-center sm:p-10 p-5"
  data-aos="fade-right"
  data-aos-duration="500"
  data-aos-delay="800"
>
  {#if showMore}
    <Greets />
  {/if}

  <div
    class="border-2 font-mono text-gray-100 dark:text-gray-900 rounded-lg p-7 bg-[#2d2d2d] dark:bg-gray-100 min-w-full min-h-1/3"
  >
    <Typewriter
      delay="1500"
      interval="20"
      on:done={() => (startFirstLine = true)}
    >
      <h1 class="text-4xl font-semibold border-b border-gray-700 pb-2">
        // Welcome to my Portfolio! 🙋‍♂️
      </h1>
    </Typewriter>

    {#if startFirstLine}
      <Typewriter interval="10" on:done={() => (startSecondLine = true)}>
        <p class="text-xl">/* Hi, I am Khoa Le,</p>
      </Typewriter>
    {/if}

    {#if startSecondLine}
      <Typewriter interval="10" on:done={() => (startThirdLine = true)}>
        <p class="text-xl">* A software engineer based in San Jose, CA.</p>
      </Typewriter>
    {/if}

    {#if startThirdLine}
      <Typewriter interval="10" on:done={() => (showMore = true)}>
        <p class="text-xl">
          * I specialize in building web applications with modern technologies.
          */
        </p>
      </Typewriter>
    {/if}
  </div>

  {#if showMore}
    <Buttons />
  {/if}
</div>

{#if showMore}
  <ArrowDown />
{/if}
