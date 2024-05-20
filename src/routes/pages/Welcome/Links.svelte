<script>
  import {
    GithubSolid,
    LinkedinSolid,
    EnvelopeSolid,
    DiscordSolid,
  } from "flowbite-svelte-icons";
  import { onMount } from "svelte";
  import axios from "axios";

  let linksUrl =
    "https://raw.githubusercontent.com/khoaleeeeee/assets/main/data/links.json";

  $: github = "";
  $: linkedin = "";
  $: discord = "";
  $: email = "";

  onMount(async () => {
    try {
      const response = await axios.get(linksUrl);
      github = response.data.github;
      linkedin = response.data.linkedin;
      discord = response.data.discord;
      email = response.data.email;
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div class="flex-row flex items-center mt-10 sm:mt-0 text-gray-700">
  <div
    class="bottom-0 flex flex-row items-center space-y-4 space-x-4 sm:space-x-0 sm:flex-col"
  >
    <a href={github} target="_blank" rel="noopener noreferrer">
      <GithubSolid class="w-10 h-10" data-aos="fade-up" data-aos-delay="600" />
    </a>
    <a href={linkedin} target="_blank" rel="noopener noreferrer">
      <LinkedinSolid
        class="w-10 h-10"
        data-aos="fade-up"
        data-aos-delay="700"
      />
    </a>

    <a href={discord} target="_blank" rel="noopener noreferrer">
      <DiscordSolid class="w-10 h-10" data-aos="fade-up" data-aos-delay="800" />
    </a>

    <a
      href={`mailto:${email}?subject=Hello!`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <EnvelopeSolid
        class="w-10 h-10"
        data-aos="fade-up"
        data-aos-delay="900"
      />
    </a>

    <div
      class="absolute sm:block hidden bottom-0 w-5 h-40 bg-gray-700"
      data-aos="fade-up"
      data-aos-delay="900"
    />
  </div>
</div>
