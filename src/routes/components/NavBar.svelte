<script>
  import { onMount } from "svelte";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    DarkMode,
  } from "flowbite-svelte";

  let lastScrollY = 0;
  let hidden = false;

  onMount(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      hidden = currentScrollY > lastScrollY && currentScrollY > 50;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<div
  style="top: {hidden ? '-100px' : '0'}"
  class="shadow-md z-50 fixed w-full flex-shrink-0 navbar"
>
  <Navbar>
    <NavBrand href="/" data-aos="fade-bottom" data-aos-delay="200">
      <div
        class="self-center fixed whitespace-nowrap text-xl font-semibold dark:text-white"
      >
        Khoa Le
      </div>
    </NavBrand>

    <div class="flex items-center md:order-2">
      <DarkMode class="md:order-3" data-aos="fade-right" data-aos-delay="600" />
      <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
    </div>

    <div class="flex gap-3">
      <NavUl>
        <NavLi
          href="#welcome"
          active={true}
          data-aos="fade-right"
          data-aos-delay="0"><span class="font-bold"> Welcome </span></NavLi
        >
        <NavLi
          href="#about"
          active={true}
          data-aos="fade-right"
          data-aos-delay="0"><span class="font-bold"> About </span></NavLi
        >
        <NavLi href="#experience" data-aos="fade-right" data-aos-delay="100"
          ><span class="font-bold">Experience</span></NavLi
        >
        <NavLi href="#projects" data-aos="fade-right" data-aos-delay="200">
          <span class="font-bold">Projects</span>
        </NavLi>
        <NavLi href="#resume" data-aos="fade-right" data-aos-delay="300">
          <span class="font-bold">Resume</span>
        </NavLi>
        <NavLi href="#contact" data-aos="fade-right" data-aos-delay="500"
          ><span class="font-bold"> Contact Me</span></NavLi
        >
      </NavUl>
    </div>
  </Navbar>
</div>

<style>
  .navbar {
    position: fixed;
    width: 100%;
    z-index: 50;
    transition: top 0.3s ease-in-out; /* Apply smooth transition */
  }
</style>
