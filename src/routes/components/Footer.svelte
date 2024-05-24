<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterBrand,
    FooterLink,
  } from "flowbite-svelte";
</script>

<Footer footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand href="https://khoadev.com" name="Khoa Le" />
    <FooterLinkGroup
      ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
    >
      <FooterLink href="#welcome">About</FooterLink>
      <FooterLink href="#contact">Contact</FooterLink>
    </FooterLinkGroup>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <FooterCopyright href="/" by="Khoa Le™" />
  <span
    class="block text-sm text-gray-500 mt-1 sm:text-center dark:text-gray-400"
  >
    Designed and developed with passion by Khoa Le™
  </span>
</Footer>
