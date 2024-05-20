<script>
  import PageNumber from "$lib/PageNumber.svelte";
  import Image from "./Image.svelte";
  import Bio from "./Bio.svelte";
</script>

<section
  id="about"
  class="relative snap-center h-screen max-w-screen flex flex-col"
>
  <div
    class="sm:block hidden bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 absolute right-0 top-0 h-full w-1/4 text-white flex items-center justify-center text-xl font-bold"
  />

  <PageNumber page="001" />
  <h1
    class="text-4xl font-bold text-center p-10 dark:text-gray-100"
    data-aos="zoom-in"
    data-aos-delay="200"
  >
    ABOUT ME 👋
  </h1>

  <div
    class="h-full w-full flex p-5 sm:flex-row flex-col justify-center items-center"
  >
    <Image />
    <Bio />
  </div>
</section>
