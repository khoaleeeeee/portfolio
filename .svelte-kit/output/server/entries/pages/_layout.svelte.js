import { c as create_ssr_component } from "../../chunks/ssr.js";
import "aos";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
