<script>
  import { GithubSolid, LinkOutline } from "flowbite-svelte-icons";
  import duration from "$lib/helpers/duration";

  export let title;
  export let startDate;
  export let endDate;
  export let description;
  export let tags = [];
  export let imageUrl;
  export let githubUrl;
  export let demoUrl;
  export let reverse = false;
</script>

<div
  class={`flex ${
    reverse ? "lg:flex-row-reverse ml-auto" : "mr-auto"
  } flex-col lg:flex-row overflow-hidden mb-10 max-w-4xl`}
  data-aos={reverse ? "fade-left" : "fade-right"}
  data-aos-delay="200"
>
  <!-- Image Section -->
  <div class="w-full lg:w-1/2 flex flex-col gap-2">
    <img
      src={imageUrl}
      alt={title}
      class="w-full h-full cursor-pointer object-fit hover:scale-105 transition-transform duration-500 ease-in-out"
    />
    <div class="flex space-x-4 items-center justify-evenly">
      <a
        href={githubUrl}
        target="_blank"
        class="flex items-center justify-center font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:bg-gray-800"
      >
        <GithubSolid class="w-10 h-10 m-1" /> GitHub
      </a>
      <a
        href={demoUrl}
        target="_blank"
        class="flex items-center justify-center font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:bg-gray-800"
      >
        <LinkOutline class="w-10 h-10 m-1" /> Demo
      </a>
    </div>
  </div>
  <!-- Content Section -->
  <div class="w-full lg:w-2/3 p-6 flex flex-col justify-between">
    <div>
      <h2 class="text-2xl font-bold mb-2">{title}</h2>
      <p class="text-gray-600 dark:text-gray-100 mb-2">
        {startDate} - {endDate} ({duration.get(startDate, endDate)})
      </p>
      <p class="text-gray-800 dark:text-gray-200 mb-4">{description}</p>
      <div class="mb-4">
        {#each tags as tag}
          <span
            class="inline-block bg-gray-300 border-[1px] shadow-sm border-gray-500 text-gray-900 text-sm px-2 py-1 rounded mr-2 mb-2"
            >{tag}</span
          >
        {/each}
      </div>
    </div>
  </div>
</div>
