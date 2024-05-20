<script>
  import Links from "./Links.svelte";
</script>

<div
  class="flex justify-center items-center w-full sm:w-1/3 sm:h-full h-1/5 hover-gradient"
  data-aos="fade-up"
  data-aos-delay="500"
  data-aos-duration="500"
>
  <Links />
</div>

<style>
  @keyframes gradientMove {
    0% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 50% 0%;
    }
  }

  .hover-gradient {
    background: linear-gradient(to bottom right, cyan, skyblue, teal);
    background-size: 100% 200%;
    transition: background 0.5s ease;
  }

  .hover-gradient:hover {
    animation: gradientMove 3s ease infinite;
  }
</style>
