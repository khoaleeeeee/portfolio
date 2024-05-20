<script>
  import duration from "$lib/helpers/duration";

  export let exp;
</script>

<div
  class="shadow-lg w-3/4 sm:w-1/2 mt-5 rounded-lg relative cursor-pointer items-center flex justify-center"
  style="background-color: {exp.theme};"
  data-aos="fade-up"
>
  <img class="w-1/2 h-1/2 object-scale-down rounded-lg" src={exp.logo} alt="" />

  <div
    class="absolute p-7 font-mono flex-col inset-0 overflow-y-auto bg-gray-300 bg-opacity-90 flex text-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
  >
    <h1 class="title">{exp.title}</h1>
    <h1 class="company" style="color: {exp.companyColor};">@ {exp.company}</h1>
    <h1 class="date">
      {exp.startDate} - {exp.endDate}
      ({duration.get(exp.startDate, exp.endDate)})
    </h1>

    {#if exp.technologies}
      <h1 class="text-sm text-gray-700 font-semibold">Tech stack:</h1>
      <div class="flex flex-wrap pb-2">
        {#each exp.technologies as tech}
          <div
            class="text-sm p-1 text-blue-900
            shadow-md
            bg-sky-200 rounded-lg m-1
            hover:bg-sky-300 transition duration-300 ease-in-out
            "
          >
            {tech}
          </div>
        {/each}
      </div>
    {/if}

    {#each exp.description as desc}
      <p class="text-md indent-1 p-1 text-gray-700">- {desc}</p>
    {/each}

    {#if exp.achievements}
      <h1 class="title mt-2">Achievements</h1>
      {#each exp.achievements as ach}
        <p class="text-md indent-1 p-1 text-gray-700">- {ach}</p>
      {/each}
    {/if}
  </div>
</div>

<style>
  .title {
    font-size: 1.125rem; /* text-md */
    font-weight: 600; /* font-semibold */
    color: #4a5568; /* text-gray-700 */
  }

  .company {
    font-size: 1.125rem; /* text-md */
    font-weight: 600; /* font-semibold */
  }

  .date {
    font-size: 0.85rem; /* text-xs */
    color: #4a5568; /* text-gray-700 */
    margin-bottom: 0.5rem; /* mb-2 */
  }
</style>
