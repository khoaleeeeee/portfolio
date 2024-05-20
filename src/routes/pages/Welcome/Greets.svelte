<script>
  import { onMount, onDestroy } from "svelte";
  import { slide } from "svelte/transition";

  let greetings = [
    "Hello", // English
    "Hola", // Spanish
    "你好", // Chinese (Mandarin)
    "नमस्ते", // Hindi
    "السلام عليكم", // Arabic
    "Привет", // Russian
    "Olá", // Portuguese
    "হ্যালো", // Bengali
    "こんにちは", // Japanese
    "Bonjour", // French
    "Guten Tag", // German
    "안녕하세요", // Korean
    "Ciao", // Italian
    "Merhaba", // Turkish
    "سلام", // Persian
    "Xin chào", // Vietnamese
    "שלום", // Hebrew
    "สวัสดี", // Thai
    "Asalaam alaikum", // Urdu
    "Hallo", // Dutch
  ];
  let index = 0;
  let roller;

  onMount(() => {
    roller = setInterval(() => {
      if (index === greetings.length - 1) index = 0;
      else index++;
    }, 1250);
  });

  onDestroy(() => {
    clearInterval(roller);
  });
</script>

<div data-aos="fade-right" data-aos-duration="500" data-aos-delay="800">
  {#key index}
    <h1
      class="text-4xl font-semibold text-gray-900 dark:text-gray-100 pb-5"
      transition:slide
    >
      {greetings[index]}!
    </h1>
  {/key}
</div>
