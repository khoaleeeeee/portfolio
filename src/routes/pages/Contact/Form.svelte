<script>
  import { Input } from "flowbite-svelte";
  import emailjs from "$lib/helpers/email";
  import { Spinner } from "flowbite-svelte";

  import {
    EnvelopeSolid,
    PaperPlaneSolid,
    PenSolid,
  } from "flowbite-svelte-icons";

  let userEmail = "";
  let sender = "";
  let content = "";
  let message = "";
  let sending = false;

  const sendEmail = async () => {
    if (sending) return;
    sending = true;
    try {
      const templateParams = {
        user_email: userEmail,
        sender,
        content,
      };
      await emailjs.send(templateParams);
      message = "Thank you for your time! I'll get back to you shortly :)";
    } catch (error) {
      message = "Failed to send email. Please try again later.";
    } finally {
      userEmail = "";
      sender = "";
      content = "";
      sending = false;
    }
  };
</script>

<div
  class="w-3/4 flex sm:flex-row flex-col bg-gray-100 dark:bg-gray-700 p-10 rounded-md gap-10"
>
  <div
    class="sm:w-1/3 w-full flex flex-col justify-center items-center"
    data-aos="fade-right"
    data-aos-delay="400"
  >
    <p class="text-lg text-center dark:text-gray-200">
      😁 Have a question or want to work together? Feel free to send me an email
      and I'll get back to you as soon as possible!
    </p>
  </div>
  <form class="space-y-4 flex-grow" on:submit|preventDefault={sendEmail}>
    <div data-aos="fade-left" data-aos-delay="400">
      <Input
        required
        id="email"
        bind:value={userEmail}
        type="email"
        placeholder="Your Email"
      >
        <EnvelopeSolid
          slot="left"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
        />
      </Input>
    </div>

    <div data-aos="fade-up" data-aos-delay="400">
      <Input
        required
        id="sender"
        bind:value={sender}
        type="text"
        placeholder="Your Name"
      >
        <PenSolid
          slot="left"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
        />
      </Input>
    </div>

    <div data-aos="fade-up" data-aos-delay="500">
      <label for="content" class="block text-lg font-semibold mb-2"
        >Content</label
      >
      <textarea
        id="content"
        bind:value={content}
        placeholder="Just tell me what you think!"
        rows="5"
        class="w-full p-3 rounded-lg shadow-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
        required
      />
    </div>

    <div class="text-center mt-6" data-aos="fade-up" data-aos-delay="600">
      <button
        type="submit"
        class="flex px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        {#if sending}
          <Spinner class="w-5 h-5" color="gray" />
        {:else}
          <PaperPlaneSolid class="w-5 h-5 mr-2 rotate-90" />
          Send
        {/if}
      </button>
      {#if message}
        {#if message.includes("Thank")}
          <p class="mt-4 text-md text-green-500">{message}</p>
        {:else}
          <p class="mt-4 text-md text-red-500">{message}</p>
        {/if}
      {/if}
    </div>
  </form>
</div>
