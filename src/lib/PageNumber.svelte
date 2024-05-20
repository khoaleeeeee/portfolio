<script>
  export let page;
</script>

<div
  class="sm:block hidden top-0 right-0 absolute w-16 h-40 max-w-screen z-30"
  data-aos="fade-down"
  data-aos-delay="300"
  data-aos-duration="500"
>
  <div class="bg-gray-700 w-1/3 h-full dark:bg-gray-300" />

  <div
    class="flex items-center justify-center w-1/3 py-5 font-mono font-bold text-black dark:text-gray-300 text-2xl"
  >
    {page}
  </div>
</div>
