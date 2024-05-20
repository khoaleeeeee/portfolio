<script>
  import PageNumber from "$lib/PageNumber.svelte";
  import Job from "./Job.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  let expUrl =
    "https://raw.githubusercontent.com/khoaleeeeee/assets/main/data/experiences.json";

  $: experiences = [];

  onMount(async () => {
    try {
      const response = await axios.get(expUrl);
      experiences = response.data;
    } catch (error) {
      console.error(error);
    }
  });
</script>

<section
  id="experience"
  class="relative snap-center h-fit py-10 max-w-screen flex flex-col items-center"
>
  <PageNumber page="010" />
  <h1
    class="text-4xl font-semibold text-center p-10 font-mono dark:text-gray-100"
    data-aos="fade-down"
    data-aos-delay="200"
  >
    Experience 🚀
  </h1>

  <div
    class="w-3/4 shadow-lg bg-gray-100 dark:bg-gray-600 text-center p-7 rounded-lg font-mono my-5"
    data-aos="fade-down"
    data-aos-delay="300"
  >
    <p class="text-lg">
      Welcome to my professional journey. Below you'll find detailed
      descriptions of my work experiences, showcasing my skills and
      contributions in various roles. Let's dive in!
    </p>
    <p>(Hover to see more details.)</p>
  </div>

  {#if experiences.length === 0}
    <p class="text-center text-gray-600">No experiences to show.</p>
  {:else}
    {#each experiences as exp}
      <div
        class="w-full h-[40vh] flex justify-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Job {exp} />
      </div>
    {/each}
  {/if}
</section>
