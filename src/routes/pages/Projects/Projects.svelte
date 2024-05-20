<script>
  import PageNumber from "$lib/PageNumber.svelte";
  import IntroPannel from "./introPannel.svelte";
  import Card from "./Card.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  let projectsUrl =
    "https://raw.githubusercontent.com/khoaleeeeee/assets/main/data/projects.json";

  $: projects = [];

  onMount(async () => {
    try {
      const response = await axios.get(projectsUrl);
      projects = response.data;
    } catch (error) {
      console.error(error);
    }
  });
</script>

<section
  id="projects"
  class="relative gap-10 snap-center h-fit max-w-screen flex flex-col items-center"
>
  <PageNumber page="011" />

  <IntroPannel />

  <div class="w-full p-10 space-y-10">
    {#if projects.length === 0}
      <p class="text-center text-gray-600">No projects to show.</p>
    {/if}

    {#each projects as project, index}
      <Card
        title={project.title}
        startDate={project.startDate}
        endDate={project.endDate}
        description={project.description}
        tags={project.tags}
        imageUrl={project.imageUrl}
        githubUrl={project.githubUrl}
        demoUrl={project.demoUrl}
        reverse={index % 2 === 1}
      />

      {#if index !== projects.length - 1}
        <hr class="h-px w my-8 bg-white border-0 dark:bg-gray-700" />
      {/if}
    {/each}
  </div>
</section>
