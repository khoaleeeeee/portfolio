<script>
  import Title from "./Title.svelte";
</script>

<div
  class="relative p-5 rounded-lg z-10 gradient items-center flex flex-col justify-center"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="500"
>
  <Title />
  <p
    class="bg-gray-200 w-5/6 rounded-lg text-center font-mono indent-2 text-gray-700 text-xl p-10 shadow-lg"
    data-aos="fade-up"
    data-aos-delay="1000"
    data-aos-duration="500"
  >
    I love creating innovative and solving real-world problems with industrial
    technologies. My projects focus on using advanced tools to enhance
    efficiency and user experience. I'm dedicated to delivering practical,
    high-quality solutions.
  </p>
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

  .gradient {
    background-image: linear-gradient(
      to bottom right,
      hsl(172deg 98% 79%) 0%,
      hsl(167deg 99% 77%) 11%,
      hsl(162deg 99% 75%) 22%,
      hsl(157deg 98% 75%) 33%,
      hsl(150deg 97% 74%) 44%,
      hsl(141deg 95% 75%) 56%,
      hsl(129deg 91% 76%) 67%,
      hsl(114deg 88% 75%) 78%,
      hsl(100deg 86% 71%) 89%,
      hsl(89deg 84% 66%) 100%
    );
    background-size: 100% 200%;
    transition: background 0.5s ease;
    animation: gradientMove 3s ease infinite;
  }
</style>
