<script>
  import { MessageDotsSolid, FileLinesSolid } from "flowbite-svelte-icons";

  const resumeUrl =
    "https://raw.githubusercontent.com/khoaleeeeee/assets/main/data/resume.pdf";
</script>

<div class="flex flex-row font-bold gap-3 mt-5">
  <a
    href={resumeUrl}
    class="p-3 flex shadow-md rounded-lg text-zinc-700 bg-sky-300"
    data-aos="fade-right"
    data-aos-delay="200"
  >
    <FileLinesSolid class="w-6 h-6" />
    Resume
  </a>

  <a
    href="#contact"
    class="p-3 flex shadow-md rounded-lg text-zinc-700 bg-[#07B5D5]"
    data-aos="fade-right"
    data-aos-delay="300"
  >
    <MessageDotsSolid class="w-6 h-6" />
    Let's chat
  </a>
</div>
