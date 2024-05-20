<script>
  import { onMount } from "svelte";
  import axios from "axios";

  const resumeUrl =
    "https://raw.githubusercontent.com/khoaleeeeee/assets/main/data/resume.json";

  $: contact = {};
  $: experiences = [];
  $: skills = [];
  $: education = {};

  onMount(async () => {
    try {
      const response = await axios.get(resumeUrl);
      const data = response.data;
      contact = data.contact;
      experiences = data.experiences;
      skills = data.skills;
      education = data.education;
    } catch (error) {
      console.error("Error fetching resume data:", error);
    }
  });
</script>

<div
  class="max-w-5xl h-fit overflow-auto mx-auto p-6 sm:p-10 bg-white dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-lg"
  data-aos="zoom-in-up"
  data-aos-delay="400"
  data-aos-duration="500"
>
  {#if !contact || !experiences || !skills || !education}
    <div class="text-center text-2xl font-bold">Loading...</div>
  {:else}
    <div class="mb-6">
      <h1 class="text-3xl sm:text-4xl font-bold text-center mb-4">
        {contact.name}
      </h1>
      <div
        class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-lg"
      >
        <p>{contact.phone}</p>
        <p>|</p>
        <p>
          <a
            href={`mailto:${contact.email}`}
            class="text-blue-600 dark:text-blue-400">{contact.email}</a
          >
        </p>
        <p>|</p>
        <p>
          <a
            href={contact.linkedin}
            class="text-blue-600 dark:text-blue-400"
            target="_blank">LinkedIn</a
          >
        </p>
      </div>
    </div>

    <div class="mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold mb-4">Experience</h2>
      {#each experiences as exp}
        <div class="mb-4">
          <h3 class="text-xl sm:text-2xl font-semibold">
            {exp.title} - {exp.company}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">{exp.period}</p>
          <ul class="list-disc list-inside ml-4">
            {#each exp.details as detail}
              <li>{detail}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <div class="mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold mb-4">Skills</h2>
      <div class="flex flex-wrap">
        {#each skills as skill}
          <span
            class="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm px-2 py-1 rounded mr-2 mb-2"
            >{skill}</span
          >
        {/each}
      </div>
    </div>

    <div class="mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold mb-4">Education</h2>
      <p class="text-lg sm:text-xl">{education.degree}</p>
      <p class="text-gray-600 dark:text-gray-400">
        {education.institution} ({education.year})
      </p>
    </div>
  {/if}
</div>
