<script>
  import NavBar from "./components/NavBar.svelte";
  import Welcome from "./pages/Welcome/Welcome.svelte";
  import About from "./pages/About/About.svelte";
  import Experience from "./pages/Experience/Experience.svelte";
  import Projects from "./pages/Projects/Projects.svelte";
  import Resume from "./pages/Resume/Resume.svelte";
  import Contact from "./pages/Contact/Contact.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<NavBar />
<main class="snap-y flex flex-col flex-grow">
  <Welcome />
  <About />
  <Experience />
  <Projects />
  <Resume />
  <Contact />
  <Footer />
</main>
