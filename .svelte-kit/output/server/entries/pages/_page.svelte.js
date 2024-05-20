import { c as create_ssr_component, b as compute_rest_props, s as setContext, d as createEventDispatcher, f as spread, h as escape_attribute_value, i as escape_object, j as add_attribute, g as getContext, e as escape, v as validate_component, k as compute_slots, a as subscribe, l as is_promise, n as noop, o as each } from "../../chunks/ssr.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "../../chunks/index.js";
import "@formatjs/intl-segmenter/polyfill.js";
import "@emailjs/browser";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "node",
    "use",
    "options",
    "role",
    "transition",
    "params",
    "open"
  ]);
  const noop2 = () => {
  };
  setContext("background", true);
  let { tag = $$restProps.href ? "a" : "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop2 } = $$props;
  let { options = {} } = $$props;
  let { role = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { params = {} } = $$props;
  let { open = true } = $$props;
  const dispatch = createEventDispatcher();
  const bgColors = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    orange: "bg-orange-50 dark:bg-orange-800",
    none: ""
  };
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  {
    dispatch(open ? "open" : "close");
  }
  {
    dispatch("show", open);
  }
  color = color ?? "default";
  {
    setContext("color", color);
  }
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${transition && open ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        { role: escape_attribute_value(role) },
        escape_object($$restProps),
        { class: escape_attribute_value(divClass) }
      ],
      {}
    )}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${open ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        { role: escape_attribute_value(role) },
        escape_object($$restProps),
        { class: escape_attribute_value(divClass) }
      ],
      {}
    )}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : ``}`} `;
});
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size", "href"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400 hover:bg-gray-100"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  buttonClass = twMerge(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "dark:hover:bg-gray-600" : "dark:hover:bg-gray-700"),
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`} `;
});
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "size", "ariaLabel"]);
  let { btnClass: btnClass2 = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5" } = $$props;
  let { size = "md" } = $$props;
  let { ariaLabel = "Dark mode" } = $$props;
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass2 !== void 0)
    $$bindings.btnClass(btnClass2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `${$$result.head += `<!-- HEAD_svelte-1pa505f_START --><script data-svelte-h="svelte-mp99qu">if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) window.document.documentElement.classList.add('dark');
    }<\/script><!-- HEAD_svelte-1pa505f_END -->`, ""} <button${spread(
    [
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(btnClass2, $$props.class))
      }
    ],
    {}
  )}><span class="hidden dark:block">${slots.lightIcon ? slots.lightIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> `}</span> <span class="block dark:hidden">${slots.darkIcon ? slots.darkIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> `}</span></button> `;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`} `;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["footerType"]);
  let { footerType = void 0 } = $$props;
  let footerClass = twMerge(footerType === "sitemap" && "bg-gray-800", footerType === "socialmedia" && "p-4 bg-white sm:p-6 dark:bg-gray-800", footerType === "logo" && "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800", footerType === "default" && "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800", $$props.class);
  if ($$props.footerType === void 0 && $$bindings.footerType && footerType !== void 0)
    $$bindings.footerType(footerType);
  return `<footer${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(footerClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</footer> `;
});
const FooterBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "spanClass", "imgClass", "href", "src", "alt", "name", "target"]);
  let { aClass = "flex items-center" } = $$props;
  let { spanClass = "self-center text-2xl font-semibold whitespace-nowrap dark:text-white" } = $$props;
  let { imgClass = "me-3 h-8" } = $$props;
  let { href = "" } = $$props;
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let { name = "" } = $$props;
  let { target = void 0 } = $$props;
  let aCls = twMerge(aClass, $$props.classA);
  let spanCls = twMerge(spanClass, $$props.classSpan);
  let imgCls = twMerge(imgClass, $$props.classImg);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aCls) }
    ],
    {}
  )}><img${add_attribute("src", src, 0)}${add_attribute("class", imgCls, 0)}${add_attribute("alt", alt, 0)}> <span${add_attribute("class", spanCls, 0)}>${escape(name)}</span> ${slots.default ? slots.default({}) : ``}</a>` : `<img${spread(
    [
      escape_object($$restProps),
      { src: escape_attribute_value(src) },
      { class: escape_attribute_value(imgCls) },
      { alt: escape_attribute_value(alt) }
    ],
    {}
  )}>`} `;
});
const FooterCopyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["spanClass", "aClass", "year", "href", "by", "target", "copyrightMessage"]);
  let { spanClass = "block text-sm text-gray-500 sm:text-center dark:text-gray-400" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { year = (/* @__PURE__ */ new Date()).getFullYear() } = $$props;
  let { href = "" } = $$props;
  let { by = "" } = $$props;
  let { target = void 0 } = $$props;
  let { copyrightMessage = "All Rights Reserved." } = $$props;
  let spanCls = twMerge(spanClass, $$props.classSpan);
  let aCls = twMerge(aClass, $$props.classA);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.by === void 0 && $$bindings.by && by !== void 0)
    $$bindings.by(by);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.copyrightMessage === void 0 && $$bindings.copyrightMessage && copyrightMessage !== void 0)
    $$bindings.copyrightMessage(copyrightMessage);
  return `<span${add_attribute("class", spanCls, 0)}>© ${escape(year)} ${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aCls) }
    ],
    {}
  )}>${escape(by)}</a>` : `<span class="ms-1">${escape(by)}</span>`} ${escape(copyrightMessage)}</span> `;
});
const FooterLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["liClass", "aClass", "href", "target"]);
  let { liClass = "me-4 last:me-0 md:me-6" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { href = "" } = $$props;
  let { target = void 0 } = $$props;
  let liCls = twMerge(liClass, $$props.classLi);
  let aCls = twMerge(aClass, $$props.classA);
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0)
    $$bindings.liClass(liClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<li${add_attribute("class", liCls, 0)}><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(aCls) },
      { target: escape_attribute_value(target) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a></li> `;
});
const FooterLinkGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ulClass = "text-gray-600 dark:text-gray-400" } = $$props;
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  return `<ul${add_attribute("class", twMerge(ulClass, $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</ul> `;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color", "floatClass"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "ps-9", md: "ps-10", lg: "ps-11" };
  const rightPadding = { sm: "pe-9", md: "pe-10", lg: "pe-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0)
    $$bindings.floatClass(floatClass);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = twMerge([
        defaultClass,
        inputPadding[_size],
        $$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size],
        ringClasses[color],
        colorClasses[_color],
        borderClasses[_color],
        textSizes[_size],
        group || "rounded-lg",
        group && "first:rounded-s-lg last:rounded-e-lg",
        group && "border-s-0 first:border-s last:border-e",
        $$props.class
      ]);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " start-0 ps-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : ` <input${spread(
          [
            escape_object($$restProps),
            escape_object({ type }),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " end-0 pe-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``}`;
      }
    }
  )} `;
});
const NavContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fluid = false } = $$props;
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  return `<div${add_attribute("class", twMerge("mx-auto flex flex-wrap justify-between items-center ", fluid ? "w-full" : "container", $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["fluid"]);
  let $hidden, $$unsubscribe_hidden;
  let { fluid = false } = $$props;
  let hidden = writable(true);
  $$unsubscribe_hidden = subscribe(hidden, (value) => $hidden = value);
  setContext("navHidden", hidden);
  let toggle = () => hidden.update((hidden2) => !hidden2);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  {
    {
      $$restProps.color = $$restProps.color ?? "navbar";
    }
  }
  $$unsubscribe_hidden();
  return `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object.assign({}, { tag: "nav" }, $$restProps, {
      class: twMerge("px-2 sm:px-4 py-2.5 w-full", $$props.class)
    }),
    {},
    {
      default: () => {
        return `${validate_component(NavContainer, "NavContainer").$$render($$result, { fluid }, {}, {
          default: () => {
            return `${slots.default ? slots.default({ hidden: $hidden, toggle, NavContainer }) : ``}`;
          }
        })}`;
      }
    }
  )} `;
});
const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href"]);
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("flex items-center", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a> `;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let { ariaLabel = "bars 3" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { role: "button" },
      { tabindex: "0" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg> `;
});
let btnClass = "ms-3 md:hidden";
const NavHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["menuClass", "onClick"]);
  let { menuClass = "h-6 w-6 shrink-0" } = $$props;
  let { onClick = void 0 } = $$props;
  getContext("navHidden") ?? writable(true);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass !== void 0)
    $$bindings.menuClass(menuClass);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name: "Open main menu" }, $$restProps, { class: twMerge(btnClass, $$props.class) }), {}, {
    default: () => {
      return `${validate_component(Menu, "Menu").$$render(
        $$result,
        {
          class: twMerge(menuClass, $$props.classMenu)
        },
        {},
        {}
      )}`;
    }
  })} `;
});
const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["href", "activeClass", "nonActiveClass"]);
  let { href = "" } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("navbarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  active = navUrl ? href === navUrl : false;
  liClass = twMerge(
    "block py-2 pe-4 ps-3 md:p-0 rounded md:border-0",
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li>${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        {
          role: escape_attribute_value(href ? void 0 : "link")
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        { class: escape_attribute_value(liClass) }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}</li> `;
});
const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeUrl",
    "divClass",
    "ulClass",
    "hidden",
    "slideParams",
    "activeClass",
    "nonActiveClass"
  ]);
  let $hiddenStore, $$unsubscribe_hiddenStore;
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { divClass = "w-full md:block md:w-auto" } = $$props;
  let { ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = void 0 } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let { activeClass = "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  setContext("navbarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  let hiddenStore = getContext("navHidden");
  $$unsubscribe_hiddenStore = subscribe(hiddenStore, (value) => $hiddenStore = value);
  let _hidden;
  let _divClass;
  let _ulClass;
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.slideParams === void 0 && $$bindings.slideParams && slideParams !== void 0)
    $$bindings.slideParams(slideParams);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  {
    {
      activeUrlStore.set(activeUrl);
    }
  }
  _hidden = hidden ?? $hiddenStore ?? true;
  _divClass = twMerge(divClass, $$props.class);
  _ulClass = twMerge(
    ulClass,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.classUl
  );
  $$unsubscribe_hiddenStore();
  return `${!_hidden ? `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { role: "button" },
      { tabindex: "0" }
    ],
    {}
  )}>${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>` : `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { hidden: _hidden || null }
    ],
    {}
  )}><ul${add_attribute("class", _ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>`} `;
});
const css$6 = {
  code: ".navbar.svelte-tftsnu{position:fixed;width:100%;z-index:50;transition:top 0.3s ease-in-out}",
  map: `{"version":3,"file":"NavBar.svelte","sources":["NavBar.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n  import {\\n    Navbar,\\n    NavBrand,\\n    NavLi,\\n    NavUl,\\n    NavHamburger,\\n    DarkMode,\\n  } from \\"flowbite-svelte\\";\\n\\n  let lastScrollY = 0;\\n  let hidden = false;\\n\\n  onMount(() => {\\n    const handleScroll = () => {\\n      const currentScrollY = window.scrollY;\\n      hidden = currentScrollY > lastScrollY && currentScrollY > 50;\\n      lastScrollY = currentScrollY;\\n    };\\n\\n    window.addEventListener(\\"scroll\\", handleScroll, { passive: true });\\n    return () => window.removeEventListener(\\"scroll\\", handleScroll);\\n  });\\n<\/script>\\n\\n<div\\n  style=\\"top: {hidden ? '-100px' : '0'}\\"\\n  class=\\"shadow-md z-50 fixed w-full flex-shrink-0 navbar\\"\\n>\\n  <Navbar>\\n    <NavBrand href=\\"/\\" data-aos=\\"fade-bottom\\" data-aos-delay=\\"200\\">\\n      <div\\n        class=\\"self-center fixed whitespace-nowrap text-xl font-semibold dark:text-white\\"\\n      >\\n        Khoa Le\\n      </div>\\n    </NavBrand>\\n\\n    <div class=\\"flex items-center md:order-2\\">\\n      <DarkMode class=\\"md:order-3\\" data-aos=\\"fade-right\\" data-aos-delay=\\"600\\" />\\n      <NavHamburger class1=\\"w-full md:flex md:w-auto md:order-1\\" />\\n    </div>\\n\\n    <div class=\\"flex gap-3\\">\\n      <NavUl>\\n        <NavLi\\n          href=\\"#welcome\\"\\n          active={true}\\n          data-aos=\\"fade-right\\"\\n          data-aos-delay=\\"0\\"><span class=\\"font-bold\\"> Welcome </span></NavLi\\n        >\\n        <NavLi\\n          href=\\"#about\\"\\n          active={true}\\n          data-aos=\\"fade-right\\"\\n          data-aos-delay=\\"0\\"><span class=\\"font-bold\\"> About </span></NavLi\\n        >\\n        <NavLi href=\\"#experience\\" data-aos=\\"fade-right\\" data-aos-delay=\\"100\\"\\n          ><span class=\\"font-bold\\">Experience</span></NavLi\\n        >\\n        <NavLi href=\\"#projects\\" data-aos=\\"fade-right\\" data-aos-delay=\\"200\\">\\n          <span class=\\"font-bold\\">Projects</span>\\n        </NavLi>\\n        <NavLi href=\\"#resume\\" data-aos=\\"fade-right\\" data-aos-delay=\\"300\\">\\n          <span class=\\"font-bold\\">Resume</span>\\n        </NavLi>\\n        <NavLi href=\\"#contact\\" data-aos=\\"fade-right\\" data-aos-delay=\\"500\\"\\n          ><span class=\\"font-bold\\"> Contact Me</span></NavLi\\n        >\\n      </NavUl>\\n    </div>\\n  </Navbar>\\n</div>\\n\\n<style>\\n  .navbar {\\n    position: fixed;\\n    width: 100%;\\n    z-index: 50;\\n    transition: top 0.3s ease-in-out; /* Apply smooth transition */\\n  }\\n</style>\\n"],"names":[],"mappings":"AA4EE,qBAAQ,CACN,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WACvB"}`
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div style="${"top: " + escape("0", true)}" class="shadow-md z-50 fixed w-full flex-shrink-0 navbar svelte-tftsnu">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(NavBrand, "NavBrand").$$render(
        $$result,
        {
          href: "/",
          "data-aos": "fade-bottom",
          "data-aos-delay": "200"
        },
        {},
        {
          default: () => {
            return `<div class="self-center fixed whitespace-nowrap text-xl font-semibold dark:text-white" data-svelte-h="svelte-vik6pi">Khoa Le</div>`;
          }
        }
      )} <div class="flex items-center md:order-2">${validate_component(DarkMode, "DarkMode").$$render(
        $$result,
        {
          class: "md:order-3",
          "data-aos": "fade-right",
          "data-aos-delay": "600"
        },
        {},
        {}
      )} ${validate_component(NavHamburger, "NavHamburger").$$render(
        $$result,
        {
          class1: "w-full md:flex md:w-auto md:order-1"
        },
        {},
        {}
      )}</div> <div class="flex gap-3">${validate_component(NavUl, "NavUl").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(NavLi, "NavLi").$$render(
            $$result,
            {
              href: "#welcome",
              active: true,
              "data-aos": "fade-right",
              "data-aos-delay": "0"
            },
            {},
            {
              default: () => {
                return `<span class="font-bold" data-svelte-h="svelte-1rfiioa">Welcome</span>`;
              }
            }
          )} ${validate_component(NavLi, "NavLi").$$render(
            $$result,
            {
              href: "#about",
              active: true,
              "data-aos": "fade-right",
              "data-aos-delay": "0"
            },
            {},
            {
              default: () => {
                return `<span class="font-bold" data-svelte-h="svelte-mq4ir7">About</span>`;
              }
            }
          )} ${validate_component(NavLi, "NavLi").$$render(
            $$result,
            {
              href: "#experience",
              "data-aos": "fade-right",
              "data-aos-delay": "100"
            },
            {},
            {
              default: () => {
                return `<span class="font-bold" data-svelte-h="svelte-1va80my">Experience</span>`;
              }
            }
          )} ${validate_component(NavLi, "NavLi").$$render(
            $$result,
            {
              href: "#projects",
              "data-aos": "fade-right",
              "data-aos-delay": "200"
            },
            {},
            {
              default: () => {
                return `<span class="font-bold" data-svelte-h="svelte-iifmbk">Projects</span>`;
              }
            }
          )} ${validate_component(NavLi, "NavLi").$$render(
            $$result,
            {
              href: "#resume",
              "data-aos": "fade-right",
              "data-aos-delay": "300"
            },
            {},
            {
              default: () => {
                return `<span class="font-bold" data-svelte-h="svelte-1k5t7px">Resume</span>`;
              }
            }
          )} ${validate_component(NavLi, "NavLi").$$render(
            $$result,
            {
              href: "#contact",
              "data-aos": "fade-right",
              "data-aos-delay": "500"
            },
            {},
            {
              default: () => {
                return `<span class="font-bold" data-svelte-h="svelte-748ot0">Contact Me</span>`;
              }
            }
          )}`;
        }
      })}</div>`;
    }
  })} </div>`;
});
const css$5 = {
  code: "@keyframes svelte-1gv2i7t-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-1gv2i7t *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-1gv2i7t .finished-typing::after{content:none}.cursor.svelte-1gv2i7t .typing::after{content:'';width:var(--cursor-width, 1ch);height:2ch;display:inline-block;vertical-align:text-top;background-color:var(--cursor-color, #000000);animation:svelte-1gv2i7t-cursorFade 1.25s infinite}",
  map: `{"version":3,"file":"Typewriter.svelte","sources":["Typewriter.svelte"],"sourcesContent":["<script>\\n    import '@formatjs/intl-segmenter/polyfill'\\n\\n    export let mode = \\"concurrent\\"\\n\\n    // general-purpose props\\n\\texport let interval = 30\\n\\texport let cursor = true\\n    export let keepCursorOnFinish = false\\n\\texport let delay = 0\\n    export let showCursorOnDelay = false\\n    export let disabled = false\\n    export let element = \\"div\\"\\n\\n    // mode-specific props\\n    export let scrambleDuration = 3000\\n    export let scrambleSlowdown = true\\n\\texport let unwriteInterval = 30\\n    export let wordInterval = 1500\\n\\n    $: isLoopMode = /^loop(Once|Random)?$/.test(mode)\\n\\n    // these modes stop once all given elements have finished their animations\\n    // and support the cursor\\n    $: isFiniteCursorMode = [\\"concurrent\\", \\"cascade\\", \\"loopOnce\\"].includes(mode)\\n\\n    $: invalidCursorOnFinish = !isFiniteCursorMode && keepCursorOnFinish\\n    $: invalidCursorOnDelay = delay < 1 && showCursorOnDelay\\n    $: invalidLoopProps = !isLoopMode && ($$props.unwriteInterval || $$props.wordInterval)\\n    $: invalidScrambleProps = mode !== \\"scramble\\" && ($$props.scrambleDuration || $$props.scrambleSlowdown)\\n    $: unnecessaryCursorOnFinish = typeof keepCursorOnFinish === 'number' && keepCursorOnFinish < 1\\n\\n    const modes = {\\n        concurrent: () => import(\\"./modes/concurrent\\"),\\n        cascade: () => import(\\"./modes/cascade\\"),\\n        loop: () => import(\\"./modes/loop\\"),\\n        loopOnce: () => import(\\"./modes/loopOnce\\"),\\n        loopRandom: () => import(\\"./modes/loopRandom\\"),\\n        scramble: () => import(\\"./modes/scramble\\")\\n    }\\n\\n    $: invalidCursorOnFinish && console.warn(\\"[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes\\")\\n    $: invalidCursorOnDelay && console.warn(\\"[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0\\")\\n    $: invalidLoopProps && console.warn(\\"[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes\\")\\n    $: invalidScrambleProps && console.warn(\\"[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode\\")\\n    $: unnecessaryCursorOnFinish && console.warn(\\"[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1\\")\\n\\n    $: delayPromise = () => new Promise(resolve => setTimeout(() => resolve(delay), delay))\\n\\n    $: props = {\\n        interval,\\n        cursor,\\n        keepCursorOnFinish,\\n        delay,\\n        showCursorOnDelay,\\n        disabled,\\n        element,\\n        scrambleDuration,\\n        scrambleSlowdown,\\n        unwriteInterval,\\n        wordInterval\\n    }\\n<\/script>\\n\\n<style>\\n\\t@keyframes cursorFade {\\n\\t\\t0%,\\n\\t\\t100% {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\n\\t\\t50% {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n\\n\\t.typewriter-container :global(*:not(.typing):not(.finished-typing):not([data-static])) {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t.typewriter-container :global(.finished-typing::after) {\\n\\t\\tcontent: none;\\n\\t}\\n\\n    .cursor :global(.typing::after) {\\n        content: '';\\n        width: var(--cursor-width, 1ch);\\n        height: 2ch;\\n        display: inline-block;\\n        vertical-align: text-top;\\n        background-color: var(--cursor-color, #000000);\\n        animation: cursorFade 1.25s infinite;\\n    }\\n</style>\\n\\n<noscript>\\n    <slot />\\n</noscript>\\n\\n{#key $$props}\\n    {#if disabled}\\n        <div class=\\"typewriter-container\\">\\n            <slot />\\n        </div>\\n    {:else}\\n        {#await delayPromise()}\\n            {#if showCursorOnDelay}\\n                <div class=\\"typewriter-container cursor\\">\\n                    <p class=\\"typing\\"></p>\\n                </div>\\n            {/if}\\n        {:then}\\n            {#await modes[mode]() then selectedMode}\\n                <svelte:element this={element} use:selectedMode.default={props} class:cursor class=\\"typewriter-container\\">\\n                    <slot />\\n                </svelte:element>\\n            {/await}\\n        {/await}\\n    {/if}\\n{/key}\\n"],"names":[],"mappings":"AAiEC,WAAW,yBAAW,CACrB,EAAE,CACF,IAAK,CACJ,OAAO,CAAE,CACV,CAEA,GAAI,CACH,OAAO,CAAE,CACV,CACD,CAEA,oCAAqB,CAAS,uDAAyD,CACtF,OAAO,CAAE,IACV,CAEA,oCAAqB,CAAS,uBAAyB,CACtD,OAAO,CAAE,IACV,CAEG,sBAAO,CAAS,cAAgB,CAC5B,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,IAAI,cAAc,CAAC,IAAI,CAAC,CAC/B,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,YAAY,CACrB,cAAc,CAAE,QAAQ,CACxB,gBAAgB,CAAE,IAAI,cAAc,CAAC,QAAQ,CAAC,CAC9C,SAAS,CAAE,yBAAU,CAAC,KAAK,CAAC,QAChC"}`
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLoopMode;
  let isFiniteCursorMode;
  let invalidCursorOnFinish;
  let invalidCursorOnDelay;
  let invalidLoopProps;
  let invalidScrambleProps;
  let unnecessaryCursorOnFinish;
  let delayPromise;
  let { mode = "concurrent" } = $$props;
  let { interval = 30 } = $$props;
  let { cursor = true } = $$props;
  let { keepCursorOnFinish = false } = $$props;
  let { delay = 0 } = $$props;
  let { showCursorOnDelay = false } = $$props;
  let { disabled = false } = $$props;
  let { element = "div" } = $$props;
  let { scrambleDuration = 3e3 } = $$props;
  let { scrambleSlowdown = true } = $$props;
  let { unwriteInterval = 30 } = $$props;
  let { wordInterval = 1500 } = $$props;
  const modes = {
    concurrent: () => import("../../chunks/concurrent.js"),
    cascade: () => import("../../chunks/cascade.js"),
    loop: () => import("../../chunks/loop.js"),
    loopOnce: () => import("../../chunks/loopOnce.js"),
    loopRandom: () => import("../../chunks/loopRandom.js"),
    scramble: () => import("../../chunks/scramble.js")
  };
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  if ($$props.keepCursorOnFinish === void 0 && $$bindings.keepCursorOnFinish && keepCursorOnFinish !== void 0)
    $$bindings.keepCursorOnFinish(keepCursorOnFinish);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.showCursorOnDelay === void 0 && $$bindings.showCursorOnDelay && showCursorOnDelay !== void 0)
    $$bindings.showCursorOnDelay(showCursorOnDelay);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.scrambleDuration === void 0 && $$bindings.scrambleDuration && scrambleDuration !== void 0)
    $$bindings.scrambleDuration(scrambleDuration);
  if ($$props.scrambleSlowdown === void 0 && $$bindings.scrambleSlowdown && scrambleSlowdown !== void 0)
    $$bindings.scrambleSlowdown(scrambleSlowdown);
  if ($$props.unwriteInterval === void 0 && $$bindings.unwriteInterval && unwriteInterval !== void 0)
    $$bindings.unwriteInterval(unwriteInterval);
  if ($$props.wordInterval === void 0 && $$bindings.wordInterval && wordInterval !== void 0)
    $$bindings.wordInterval(wordInterval);
  $$result.css.add(css$5);
  isLoopMode = /^loop(Once|Random)?$/.test(mode);
  isFiniteCursorMode = ["concurrent", "cascade", "loopOnce"].includes(mode);
  invalidCursorOnFinish = !isFiniteCursorMode && keepCursorOnFinish;
  invalidCursorOnDelay = delay < 1 && showCursorOnDelay;
  invalidLoopProps = !isLoopMode && ($$props.unwriteInterval || $$props.wordInterval);
  invalidScrambleProps = mode !== "scramble" && ($$props.scrambleDuration || $$props.scrambleSlowdown);
  unnecessaryCursorOnFinish = typeof keepCursorOnFinish === "number" && keepCursorOnFinish < 1;
  invalidCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes");
  invalidCursorOnDelay && console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0");
  invalidLoopProps && console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes");
  invalidScrambleProps && console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode");
  unnecessaryCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1");
  delayPromise = () => new Promise((resolve) => setTimeout(() => resolve(delay), delay));
  return `<noscript>${slots.default ? slots.default({}) : ``}</noscript> ${disabled ? `<div class="typewriter-container svelte-1gv2i7t">${slots.default ? slots.default({}) : ``}</div>` : `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${showCursorOnDelay ? `<div class="typewriter-container cursor svelte-1gv2i7t" data-svelte-h="svelte-1ssf3hl"><p class="typing"></p></div>` : ``} `;
    }
    return function() {
      return ` ${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(selectedMode) {
          return ` ${((tag) => {
            return tag ? `<${element} class="${["typewriter-container svelte-1gv2i7t", cursor ? "cursor" : ""].join(" ").trim()}">${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
          })(element)} `;
        }();
      }(modes[mode]())} `;
    }();
  }(delayPromise())}`}`;
});
const ArrowUpOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "arrow up outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M12 6v13m0-13 4 4m-4-4-4 4"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M12 6v13m0-13 4 4m-4-4-4 4"></path></svg>`} `;
});
const DiscordSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "discord solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path></svg>`} `;
});
const EnvelopeSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "envelope solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"></path><path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"></path><path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"></path></svg>`} `;
});
const GithubSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "github solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"></path></svg>`} `;
});
const LinkOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "link outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"></path></svg>`} `;
});
const LinkedinSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "linkedin solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"></path><path d="M7.2 8.809H4V19.5h3.2V8.809Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"></path><path d="M7.2 8.809H4V19.5h3.2V8.809Z"></path></svg>`} `;
});
const PaperPlaneSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "paper plane solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clip-rule="evenodd"></path></svg>`} `;
});
const PenSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "pen solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z" clip-rule="evenodd"></path></svg>`} `;
});
const IntroBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col justify-center sm:p-10 p-5" data-aos="fade-right" data-aos-duration="500" data-aos-delay="800">${``} <div class="border-2 font-mono text-gray-100 dark:text-gray-900 rounded-lg p-7 bg-[#2d2d2d] dark:bg-gray-100 min-w-full min-h-1/3">${validate_component(Typewriter, "Typewriter").$$render($$result, { delay: "1500", interval: "20" }, {}, {
    default: () => {
      return `<h1 class="text-4xl font-semibold border-b border-gray-700 pb-2" data-svelte-h="svelte-1hordvk">// Welcome to my Portfolio! 🙋‍♂️</h1>`;
    }
  })} ${``} ${``} ${``}</div> ${``}</div> ${``}`;
});
const Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let github;
  let linkedin;
  let discord;
  let email;
  github = "";
  linkedin = "";
  discord = "";
  email = "";
  return `<div class="flex-row flex items-center mt-10 sm:mt-0 text-gray-700"><div class="bottom-0 flex flex-row items-center space-y-4 space-x-4 sm:space-x-0 sm:flex-col"><a${add_attribute("href", github, 0)} target="_blank" rel="noopener noreferrer">${validate_component(GithubSolid, "GithubSolid").$$render(
    $$result,
    {
      class: "w-10 h-10",
      "data-aos": "fade-up",
      "data-aos-delay": "600"
    },
    {},
    {}
  )}</a> <a${add_attribute("href", linkedin, 0)} target="_blank" rel="noopener noreferrer">${validate_component(LinkedinSolid, "LinkedinSolid").$$render(
    $$result,
    {
      class: "w-10 h-10",
      "data-aos": "fade-up",
      "data-aos-delay": "700"
    },
    {},
    {}
  )}</a> <a${add_attribute("href", discord, 0)} target="_blank" rel="noopener noreferrer">${validate_component(DiscordSolid, "DiscordSolid").$$render(
    $$result,
    {
      class: "w-10 h-10",
      "data-aos": "fade-up",
      "data-aos-delay": "800"
    },
    {},
    {}
  )}</a> <a${add_attribute("href", `mailto:${email}?subject=Hello!`, 0)} target="_blank" rel="noopener noreferrer">${validate_component(EnvelopeSolid, "EnvelopeSolid").$$render(
    $$result,
    {
      class: "w-10 h-10",
      "data-aos": "fade-up",
      "data-aos-delay": "900"
    },
    {},
    {}
  )}</a> <div class="absolute sm:block hidden bottom-0 w-5 h-40 bg-gray-700" data-aos="fade-up" data-aos-delay="900"></div></div></div>`;
});
const css$4 = {
  code: "@keyframes svelte-2fi21j-gradientMove{0%{background-position:50% 0%}50%{background-position:50% 100%}100%{background-position:50% 0%}}.hover-gradient.svelte-2fi21j{background:linear-gradient(to bottom right, cyan, skyblue, teal);background-size:100% 200%;transition:background 0.5s ease}.hover-gradient.svelte-2fi21j:hover{animation:svelte-2fi21j-gradientMove 3s ease infinite}",
  map: '{"version":3,"file":"ColorPanel.svelte","sources":["ColorPanel.svelte"],"sourcesContent":["<script>\\n  import Links from \\"./Links.svelte\\";\\n<\/script>\\n\\n<div\\n  class=\\"flex justify-center items-center w-full sm:w-1/3 sm:h-full h-1/5 hover-gradient\\"\\n  data-aos=\\"fade-up\\"\\n  data-aos-delay=\\"500\\"\\n  data-aos-duration=\\"500\\"\\n>\\n  <Links />\\n</div>\\n\\n<style>\\n  @keyframes gradientMove {\\n    0% {\\n      background-position: 50% 0%;\\n    }\\n    50% {\\n      background-position: 50% 100%;\\n    }\\n    100% {\\n      background-position: 50% 0%;\\n    }\\n  }\\n\\n  .hover-gradient {\\n    background: linear-gradient(to bottom right, cyan, skyblue, teal);\\n    background-size: 100% 200%;\\n    transition: background 0.5s ease;\\n  }\\n\\n  .hover-gradient:hover {\\n    animation: gradientMove 3s ease infinite;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAcE,WAAW,0BAAa,CACtB,EAAG,CACD,mBAAmB,CAAE,GAAG,CAAC,EAC3B,CACA,GAAI,CACF,mBAAmB,CAAE,GAAG,CAAC,IAC3B,CACA,IAAK,CACH,mBAAmB,CAAE,GAAG,CAAC,EAC3B,CACF,CAEA,6BAAgB,CACd,UAAU,CAAE,gBAAgB,EAAE,CAAC,MAAM,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,CAAC,CAAC,IAAI,CAAC,CACjE,eAAe,CAAE,IAAI,CAAC,IAAI,CAC1B,UAAU,CAAE,UAAU,CAAC,IAAI,CAAC,IAC9B,CAEA,6BAAe,MAAO,CACpB,SAAS,CAAE,0BAAY,CAAC,EAAE,CAAC,IAAI,CAAC,QAClC"}'
};
const ColorPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="flex justify-center items-center w-full sm:w-1/3 sm:h-full h-1/5 hover-gradient svelte-2fi21j" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">${validate_component(Links, "Links").$$render($$result, {}, {}, {})} </div>`;
});
const Welcome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="welcome" class="main h-screen flex sm:flex-row flex-col">${validate_component(ColorPanel, "ColorPanel").$$render($$result, {}, {}, {})} ${validate_component(IntroBox, "IntroBox").$$render($$result, {}, {}, {})}</section>`;
});
const PageNumber = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  return `<div class="sm:block hidden top-0 right-0 absolute w-16 h-40 max-w-screen z-30" data-aos="fade-down" data-aos-delay="300" data-aos-duration="500"><div class="bg-gray-700 w-1/3 h-full dark:bg-gray-300"></div> <div class="flex items-center justify-center w-1/3 py-5 font-mono font-bold text-black dark:text-gray-300 text-2xl">${escape(page)}</div></div>`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full sm:w-1/3 h-1/3 sm:h-3/4 p-5 m-5 shadow-lg rounded-lg" data-aos="flip-right" data-aos-delay="400" data-svelte-h="svelte-v9xycw"><img class="relative w-full h-full object-cover rounded-lg shadow-lg hover:opacity-80 transition duration-500 ease-in-out cursor-pointer" src="https://raw.githubusercontent.com/khoaleeeeee/assets/main/images/Profile.jpeg" alt="profile picture"></div>`;
});
const Bio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full sm:w-1/3 sm:h-fit h-1/3 overflow-auto p-5 m-2 shadow-lg rounded-lg font-mono text-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-300" data-aos="flip-left" data-aos-delay="400" data-svelte-h="svelte-1rjop50"><br> <div class="flex items-baseline"><span class="font-semibold text-5xl">W</span> <p class="indent-1">hat&#39;s up?</p></div> <br> <p class="indent-4">I’m Khoa, a software developer with expertise in web development.</p> <br> <p class="indent-4">Currently, I am a Full-stack Software Engineer located in Bay Area. The
    passion to create and innovate has always been in me. I strive to build
    quality, clean, intuitive, and robust software with attention and
    deliberation.</p> <br> <p class="indent-4">My expertise include JavaScript, CSS, and the MERN stack. Recently I have
    been intrigue with Machine Learning. Aside from coding, I enjoy playing
    soccer, video games, and guitar.</p></div>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="about" class="relative snap-center h-screen max-w-screen flex flex-col"><div class="sm:block hidden bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 absolute right-0 top-0 h-full w-1/4 text-white flex items-center justify-center text-xl font-bold"></div> ${validate_component(PageNumber, "PageNumber").$$render($$result, { page: "001" }, {}, {})} <h1 class="text-4xl font-bold text-center p-10 dark:text-gray-100" data-aos="zoom-in" data-aos-delay="200" data-svelte-h="svelte-1rvp18e">ABOUT ME 👋</h1> <div class="h-full w-full flex p-5 sm:flex-row flex-col justify-center items-center">${validate_component(Image, "Image").$$render($$result, {}, {}, {})} ${validate_component(Bio, "Bio").$$render($$result, {}, {}, {})}</div></section>`;
});
const get = (startDate, endDate) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const [startMonth, startYear] = startDate.split(" ");
  const startDateObj = new Date(startYear, monthNames.indexOf(startMonth));
  let endDateObj;
  if (endDate === "Present") {
    endDateObj = /* @__PURE__ */ new Date();
  } else {
    const [endMonth, endYear] = endDate.split(" ");
    endDateObj = new Date(endYear, monthNames.indexOf(endMonth));
  }
  const yearsDiff = endDateObj.getFullYear() - startDateObj.getFullYear();
  const monthsDiff = endDateObj.getMonth() - startDateObj.getMonth();
  const totalMonths = yearsDiff * 12 + monthsDiff;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years < 1)
    return `${months} months`;
  return `${years} years and ${months} months`;
};
const duration = { get };
const css$3 = {
  code: ".title.svelte-7oy83w{font-size:1.125rem;font-weight:600;color:#4a5568}.company.svelte-7oy83w{font-size:1.125rem;font-weight:600}.date.svelte-7oy83w{font-size:0.85rem;color:#4a5568;margin-bottom:0.5rem}",
  map: '{"version":3,"file":"Job.svelte","sources":["Job.svelte"],"sourcesContent":["<script>\\n  import duration from \\"$lib/helpers/duration\\";\\n\\n  export let exp;\\n<\/script>\\n\\n<div\\n  class=\\"shadow-lg w-3/4 sm:w-1/2 mt-5 rounded-lg relative cursor-pointer items-center flex justify-center\\"\\n  style=\\"background-color: {exp.theme};\\"\\n  data-aos=\\"fade-up\\"\\n>\\n  <img class=\\"w-1/2 h-1/2 object-scale-down rounded-lg\\" src={exp.logo} alt=\\"\\" />\\n\\n  <div\\n    class=\\"absolute p-7 font-mono flex-col inset-0 overflow-y-auto bg-gray-300 bg-opacity-90 flex text-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out\\"\\n  >\\n    <h1 class=\\"title\\">{exp.title}</h1>\\n    <h1 class=\\"company\\" style=\\"color: {exp.companyColor};\\">@ {exp.company}</h1>\\n    <h1 class=\\"date\\">\\n      {exp.startDate} - {exp.endDate}\\n      ({duration.get(exp.startDate, exp.endDate)})\\n    </h1>\\n\\n    {#if exp.technologies}\\n      <h1 class=\\"text-sm text-gray-700 font-semibold\\">Tech stack:</h1>\\n      <div class=\\"flex flex-wrap pb-2\\">\\n        {#each exp.technologies as tech}\\n          <div\\n            class=\\"text-sm p-1 text-blue-900\\n            shadow-md\\n            bg-sky-200 rounded-lg m-1\\n            hover:bg-sky-300 transition duration-300 ease-in-out\\n            \\"\\n          >\\n            {tech}\\n          </div>\\n        {/each}\\n      </div>\\n    {/if}\\n\\n    {#each exp.description as desc}\\n      <p class=\\"text-md indent-1 p-1 text-gray-700\\">- {desc}</p>\\n    {/each}\\n\\n    {#if exp.achievements}\\n      <h1 class=\\"title mt-2\\">Achievements</h1>\\n      {#each exp.achievements as ach}\\n        <p class=\\"text-md indent-1 p-1 text-gray-700\\">- {ach}</p>\\n      {/each}\\n    {/if}\\n  </div>\\n</div>\\n\\n<style>\\n  .title {\\n    font-size: 1.125rem; /* text-md */\\n    font-weight: 600; /* font-semibold */\\n    color: #4a5568; /* text-gray-700 */\\n  }\\n\\n  .company {\\n    font-size: 1.125rem; /* text-md */\\n    font-weight: 600; /* font-semibold */\\n  }\\n\\n  .date {\\n    font-size: 0.85rem; /* text-xs */\\n    color: #4a5568; /* text-gray-700 */\\n    margin-bottom: 0.5rem; /* mb-2 */\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsDE,oBAAO,CACL,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OACT,CAEA,sBAAS,CACP,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,GACf,CAEA,mBAAM,CACJ,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,OAAO,CACd,aAAa,CAAE,MACjB"}'
};
const Job = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { exp } = $$props;
  if ($$props.exp === void 0 && $$bindings.exp && exp !== void 0)
    $$bindings.exp(exp);
  $$result.css.add(css$3);
  return `<div class="shadow-lg w-3/4 sm:w-1/2 mt-5 rounded-lg relative cursor-pointer items-center flex justify-center" style="${"background-color: " + escape(exp.theme, true) + ";"}" data-aos="fade-up"><img class="w-1/2 h-1/2 object-scale-down rounded-lg"${add_attribute("src", exp.logo, 0)} alt=""> <div class="absolute p-7 font-mono flex-col inset-0 overflow-y-auto bg-gray-300 bg-opacity-90 flex text-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"><h1 class="title svelte-7oy83w">${escape(exp.title)}</h1> <h1 class="company svelte-7oy83w" style="${"color: " + escape(exp.companyColor, true) + ";"}">@ ${escape(exp.company)}</h1> <h1 class="date svelte-7oy83w">${escape(exp.startDate)} - ${escape(exp.endDate)}
      (${escape(duration.get(exp.startDate, exp.endDate))})</h1> ${exp.technologies ? `<h1 class="text-sm text-gray-700 font-semibold" data-svelte-h="svelte-qwfu0h">Tech stack:</h1> <div class="flex flex-wrap pb-2">${each(exp.technologies, (tech) => {
    return `<div class="text-sm p-1 text-blue-900 shadow-md bg-sky-200 rounded-lg m-1 hover:bg-sky-300 transition duration-300 ease-in-out ">${escape(tech)} </div>`;
  })}</div>` : ``} ${each(exp.description, (desc) => {
    return `<p class="text-md indent-1 p-1 text-gray-700">- ${escape(desc)}</p>`;
  })} ${exp.achievements ? `<h1 class="title mt-2 svelte-7oy83w" data-svelte-h="svelte-16xxzy1">Achievements</h1> ${each(exp.achievements, (ach) => {
    return `<p class="text-md indent-1 p-1 text-gray-700">- ${escape(ach)}</p>`;
  })}` : ``}</div> </div>`;
});
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let experiences;
  experiences = [];
  return `<section id="experience" class="relative snap-center h-fit py-10 max-w-screen flex flex-col items-center">${validate_component(PageNumber, "PageNumber").$$render($$result, { page: "010" }, {}, {})} <h1 class="text-4xl font-semibold text-center p-10 font-mono dark:text-gray-100" data-aos="fade-down" data-aos-delay="200" data-svelte-h="svelte-1nug6nt">Experience 🚀</h1> <div class="w-3/4 shadow-lg bg-gray-100 dark:bg-gray-600 text-center p-7 rounded-lg font-mono my-5" data-aos="fade-down" data-aos-delay="300" data-svelte-h="svelte-yakuvt"><p class="text-lg">Welcome to my professional journey. Below you&#39;ll find detailed
      descriptions of my work experiences, showcasing my skills and
      contributions in various roles. Let&#39;s dive in!</p> <p>(Hover to see more details.)</p></div> ${experiences.length === 0 ? `<p class="text-center text-gray-600" data-svelte-h="svelte-sey9a0">No experiences to show.</p>` : `${each(experiences, (exp) => {
    return `<div class="w-full h-[40vh] flex justify-center" data-aos="fade-up" data-aos-delay="400">${validate_component(Job, "Job").$$render($$result, { exp }, {}, {})} </div>`;
  })}`}</section>`;
});
const Title$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Typewriter, "Typewriter").$$render(
    $$result,
    {
      delay: "800",
      interval: "40",
      keepCursorOnFinish: true
    },
    {},
    {
      default: () => {
        return `<h1 class="z-20 text-4xl font-bold text-center p-10 font-mono text-black" data-svelte-h="svelte-2hgbtm">MY PROJECT(S) 🖥️</h1>`;
      }
    }
  )}`;
});
const css$2 = {
  code: "@keyframes svelte-1xlihpc-gradientMove{0%{background-position:50% 0%}50%{background-position:50% 100%}100%{background-position:50% 0%}}.gradient.svelte-1xlihpc{background-image:linear-gradient(\n      to bottom right,\n      hsl(172deg 98% 79%) 0%,\n      hsl(167deg 99% 77%) 11%,\n      hsl(162deg 99% 75%) 22%,\n      hsl(157deg 98% 75%) 33%,\n      hsl(150deg 97% 74%) 44%,\n      hsl(141deg 95% 75%) 56%,\n      hsl(129deg 91% 76%) 67%,\n      hsl(114deg 88% 75%) 78%,\n      hsl(100deg 86% 71%) 89%,\n      hsl(89deg 84% 66%) 100%\n    );background-size:100% 200%;transition:background 0.5s ease;animation:svelte-1xlihpc-gradientMove 3s ease infinite}",
  map: `{"version":3,"file":"introPannel.svelte","sources":["introPannel.svelte"],"sourcesContent":["<script>\\n  import Title from \\"./Title.svelte\\";\\n<\/script>\\n\\n<div\\n  class=\\"relative p-5 rounded-lg z-10 gradient items-center flex flex-col justify-center\\"\\n  data-aos=\\"fade-up\\"\\n  data-aos-delay=\\"200\\"\\n  data-aos-duration=\\"500\\"\\n>\\n  <Title />\\n  <p\\n    class=\\"bg-gray-200 w-5/6 rounded-lg text-center font-mono indent-2 text-gray-700 text-xl p-10 shadow-lg\\"\\n    data-aos=\\"fade-up\\"\\n    data-aos-delay=\\"1000\\"\\n    data-aos-duration=\\"500\\"\\n  >\\n    I love creating innovative and solving real-world problems with industrial\\n    technologies. My projects focus on using advanced tools to enhance\\n    efficiency and user experience. I'm dedicated to delivering practical,\\n    high-quality solutions.\\n  </p>\\n</div>\\n\\n<style>\\n  @keyframes gradientMove {\\n    0% {\\n      background-position: 50% 0%;\\n    }\\n    50% {\\n      background-position: 50% 100%;\\n    }\\n    100% {\\n      background-position: 50% 0%;\\n    }\\n  }\\n\\n  .gradient {\\n    background-image: linear-gradient(\\n      to bottom right,\\n      hsl(172deg 98% 79%) 0%,\\n      hsl(167deg 99% 77%) 11%,\\n      hsl(162deg 99% 75%) 22%,\\n      hsl(157deg 98% 75%) 33%,\\n      hsl(150deg 97% 74%) 44%,\\n      hsl(141deg 95% 75%) 56%,\\n      hsl(129deg 91% 76%) 67%,\\n      hsl(114deg 88% 75%) 78%,\\n      hsl(100deg 86% 71%) 89%,\\n      hsl(89deg 84% 66%) 100%\\n    );\\n    background-size: 100% 200%;\\n    transition: background 0.5s ease;\\n    animation: gradientMove 3s ease infinite;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAyBE,WAAW,2BAAa,CACtB,EAAG,CACD,mBAAmB,CAAE,GAAG,CAAC,EAC3B,CACA,GAAI,CACF,mBAAmB,CAAE,GAAG,CAAC,IAC3B,CACA,IAAK,CACH,mBAAmB,CAAE,GAAG,CAAC,EAC3B,CACF,CAEA,wBAAU,CACR,gBAAgB,CAAE;AACtB,MAAM,EAAE,CAAC,MAAM,CAAC,KAAK,CAAC;AACtB,MAAM,IAAI,MAAM,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC;AAC7B,MAAM,IAAI,MAAM,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC9B,MAAM,IAAI,MAAM,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC9B,MAAM,IAAI,MAAM,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC9B,MAAM,IAAI,MAAM,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC9B,MAAM,IAAI,MAAM,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC9B,MAAM,IAAI,MAAM,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC9B,MAAM,IAAI,MAAM,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC9B,MAAM,IAAI,MAAM,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC9B,MAAM,IAAI,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,IAAI;AAC7B,KAAK,CACD,eAAe,CAAE,IAAI,CAAC,IAAI,CAC1B,UAAU,CAAE,UAAU,CAAC,IAAI,CAAC,IAAI,CAChC,SAAS,CAAE,2BAAY,CAAC,EAAE,CAAC,IAAI,CAAC,QAClC"}`
};
const IntroPannel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="relative p-5 rounded-lg z-10 gradient items-center flex flex-col justify-center svelte-1xlihpc" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">${validate_component(Title$2, "Title").$$render($$result, {}, {}, {})} <p class="bg-gray-200 w-5/6 rounded-lg text-center font-mono indent-2 text-gray-700 text-xl p-10 shadow-lg" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="500" data-svelte-h="svelte-1oewauj">I love creating innovative and solving real-world problems with industrial
    technologies. My projects focus on using advanced tools to enhance
    efficiency and user experience. I&#39;m dedicated to delivering practical,
    high-quality solutions.</p> </div>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { startDate } = $$props;
  let { endDate } = $$props;
  let { description } = $$props;
  let { tags = [] } = $$props;
  let { imageUrl } = $$props;
  let { githubUrl } = $$props;
  let { demoUrl } = $$props;
  let { reverse = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.startDate === void 0 && $$bindings.startDate && startDate !== void 0)
    $$bindings.startDate(startDate);
  if ($$props.endDate === void 0 && $$bindings.endDate && endDate !== void 0)
    $$bindings.endDate(endDate);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0)
    $$bindings.imageUrl(imageUrl);
  if ($$props.githubUrl === void 0 && $$bindings.githubUrl && githubUrl !== void 0)
    $$bindings.githubUrl(githubUrl);
  if ($$props.demoUrl === void 0 && $$bindings.demoUrl && demoUrl !== void 0)
    $$bindings.demoUrl(demoUrl);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  return `<div${add_attribute("class", `flex ${reverse ? "lg:flex-row-reverse ml-auto" : "mr-auto"} flex-col lg:flex-row overflow-hidden mb-10 max-w-4xl`, 0)}${add_attribute("data-aos", reverse ? "fade-left" : "fade-right", 0)} data-aos-delay="200"> <div class="w-full lg:w-1/2 flex flex-col gap-2"><img${add_attribute("src", imageUrl, 0)}${add_attribute("alt", title, 0)} class="w-full h-full cursor-pointer object-fit hover:scale-105 transition-transform duration-500 ease-in-out"> <div class="flex space-x-4 items-center justify-evenly"><a${add_attribute("href", githubUrl, 0)} target="_blank" class="flex items-center justify-center font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:bg-gray-800">${validate_component(GithubSolid, "GithubSolid").$$render($$result, { class: "w-10 h-10 m-1" }, {}, {})} GitHub</a> <a${add_attribute("href", demoUrl, 0)} target="_blank" class="flex items-center justify-center font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:bg-gray-800">${validate_component(LinkOutline, "LinkOutline").$$render($$result, { class: "w-10 h-10 m-1" }, {}, {})} Demo</a></div></div>  <div class="w-full lg:w-2/3 p-6 flex flex-col justify-between"><div><h2 class="text-2xl font-bold mb-2">${escape(title)}</h2> <p class="text-gray-600 dark:text-gray-100 mb-2">${escape(startDate)} - ${escape(endDate)} (${escape(duration.get(startDate, endDate))})</p> <p class="text-gray-800 dark:text-gray-200 mb-4">${escape(description)}</p> <div class="mb-4">${each(tags, (tag) => {
    return `<span class="inline-block bg-gray-300 border-[1px] shadow-sm border-gray-500 text-gray-900 text-sm px-2 py-1 rounded mr-2 mb-2">${escape(tag)}</span>`;
  })}</div></div></div></div>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projects;
  projects = [];
  return `<section id="projects" class="relative gap-10 snap-center h-fit max-w-screen flex flex-col items-center">${validate_component(PageNumber, "PageNumber").$$render($$result, { page: "011" }, {}, {})} ${validate_component(IntroPannel, "IntroPannel").$$render($$result, {}, {}, {})} <div class="w-full p-10 space-y-10">${projects.length === 0 ? `<p class="text-center text-gray-600" data-svelte-h="svelte-10cni2t">No projects to show.</p>` : ``} ${each(projects, (project, index) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        title: project.title,
        startDate: project.startDate,
        endDate: project.endDate,
        description: project.description,
        tags: project.tags,
        imageUrl: project.imageUrl,
        githubUrl: project.githubUrl,
        demoUrl: project.demoUrl,
        reverse: index % 2 === 1
      },
      {},
      {}
    )} ${index !== projects.length - 1 ? `<hr class="h-px w my-8 bg-white border-0 dark:bg-gray-700">` : ``}`;
  })}</div></section>`;
});
const Title$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="z-20 text-4xl font-bold text-center p-10 font-mono" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-svelte-h="svelte-s93vb6">MY RESUME 📄</h1>`;
});
const resumeUrl = "https://raw.githubusercontent.com/khoaleeeeee/assets/main/data/resume.pdf";
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="m-5" data-aos="zoom-in-up" data-aos-delay="300"><a${add_attribute("href", resumeUrl, 0)} class="flex justify-center"><div class="flex items-center space-x-4 text-md font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 px-6 py-3 rounded-lg shadow-md" data-svelte-h="svelte-xz3gea"><p>👉 Click to download 👈</p></div></a></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contact;
  let experiences;
  let skills;
  let education;
  contact = {};
  experiences = [];
  skills = [];
  education = {};
  return `<div class="max-w-5xl h-fit overflow-auto mx-auto p-6 sm:p-10 bg-white dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-lg" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="500">${!contact || !experiences || !skills || !education ? `<div class="text-center text-2xl font-bold" data-svelte-h="svelte-fmh9nv">Loading...</div>` : `<div class="mb-6"><h1 class="text-3xl sm:text-4xl font-bold text-center mb-4">${escape(contact.name)}</h1> <div class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-lg"><p>${escape(contact.phone)}</p> <p data-svelte-h="svelte-1ceyy2c">|</p> <p><a${add_attribute("href", `mailto:${contact.email}`, 0)} class="text-blue-600 dark:text-blue-400">${escape(contact.email)}</a></p> <p data-svelte-h="svelte-1ceyy2c">|</p> <p><a${add_attribute("href", contact.linkedin, 0)} class="text-blue-600 dark:text-blue-400" target="_blank">LinkedIn</a></p></div></div> <div class="mb-6"><h2 class="text-2xl sm:text-3xl font-bold mb-4" data-svelte-h="svelte-wbm0ll">Experience</h2> ${each(experiences, (exp) => {
    return `<div class="mb-4"><h3 class="text-xl sm:text-2xl font-semibold">${escape(exp.title)} - ${escape(exp.company)}</h3> <p class="text-gray-600 dark:text-gray-400">${escape(exp.period)}</p> <ul class="list-disc list-inside ml-4">${each(exp.details, (detail) => {
      return `<li>${escape(detail)}</li>`;
    })}</ul> </div>`;
  })}</div> <div class="mb-6"><h2 class="text-2xl sm:text-3xl font-bold mb-4" data-svelte-h="svelte-1g6huu7">Skills</h2> <div class="flex flex-wrap">${each(skills, (skill) => {
    return `<span class="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm px-2 py-1 rounded mr-2 mb-2">${escape(skill)}</span>`;
  })}</div></div> <div class="mb-6"><h2 class="text-2xl sm:text-3xl font-bold mb-4" data-svelte-h="svelte-ymc7c3">Education</h2> <p class="text-lg sm:text-xl">${escape(education.degree)}</p> <p class="text-gray-600 dark:text-gray-400">${escape(education.institution)} (${escape(education.year)})</p></div>`}</div>`;
});
const css$1 = {
  code: ".color-panel.svelte-w59xm8{position:absolute;top:0;right:0;width:50%;height:100%;z-index:-1;animation:expand 1s ease-in-out forwards}",
  map: '{"version":3,"file":"ColorPannel.svelte","sources":["ColorPannel.svelte"],"sourcesContent":["<div\\n  class=\\"color-panel bg-gray-300\\"\\n  data-aos=\\"slide-left\\"\\n  data-aos-delay=\\"200\\"\\n  data-aos-duration=\\"500\\"\\n/>\\n\\n<style>\\n  .color-panel {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    width: 50%;\\n    height: 100%;\\n    z-index: -1;\\n    animation: expand 1s ease-in-out forwards;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAQE,0BAAa,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,EAAE,CACX,SAAS,CAAE,MAAM,CAAC,EAAE,CAAC,WAAW,CAAC,QACnC"}'
};
const ColorPannel$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="color-panel bg-gray-300 svelte-w59xm8" data-aos="slide-left" data-aos-delay="200" data-aos-duration="500"></div>`;
});
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="resume" class="relative h-[200vh] w-screen flex flex-col items-center">${validate_component(PageNumber, "PageNumber").$$render($$result, { page: "100" }, {}, {})} ${validate_component(ColorPannel$1, "ColorPannel").$$render($$result, {}, {}, {})} ${validate_component(Title$1, "Title").$$render($$result, {}, {}, {})} ${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})} ${validate_component(Layout, "Layout").$$render($$result, {}, {}, {})}</section>`;
});
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="z-20 text-4xl font-bold text-center p-10 font-mono" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-svelte-h="svelte-1cqgk4y">CONTACT ME 📞</h1>`;
});
const css = {
  code: ".color-panel.svelte-sqqspk{position:absolute;top:0;left:0;width:50%;height:100%;background-image:linear-gradient(\n      45deg,\n      hsl(303deg 98% 79%) 0%,\n      hsl(319deg 100% 78%) 11%,\n      hsl(335deg 100% 78%) 22%,\n      hsl(355deg 100% 80%) 33%,\n      hsl(15deg 100% 77%) 44%,\n      hsl(29deg 100% 73%) 56%,\n      hsl(38deg 100% 71%) 67%,\n      hsl(46deg 93% 70%) 78%,\n      hsl(64deg 71% 68%) 89%,\n      hsl(89deg 83% 75%) 100%\n    );z-index:-1;animation:expand 1s ease-in-out forwards}",
  map: '{"version":3,"file":"ColorPannel.svelte","sources":["ColorPannel.svelte"],"sourcesContent":["<div\\n  class=\\"color-panel\\"\\n  data-aos=\\"slide-right\\"\\n  data-aos-delay=\\"200\\"\\n  data-aos-duration=\\"500\\"\\n/>\\n\\n<style>\\n  .color-panel {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 50%;\\n    height: 100%;\\n    background-image: linear-gradient(\\n      45deg,\\n      hsl(303deg 98% 79%) 0%,\\n      hsl(319deg 100% 78%) 11%,\\n      hsl(335deg 100% 78%) 22%,\\n      hsl(355deg 100% 80%) 33%,\\n      hsl(15deg 100% 77%) 44%,\\n      hsl(29deg 100% 73%) 56%,\\n      hsl(38deg 100% 71%) 67%,\\n      hsl(46deg 93% 70%) 78%,\\n      hsl(64deg 71% 68%) 89%,\\n      hsl(89deg 83% 75%) 100%\\n    );\\n    z-index: -1;\\n    animation: expand 1s ease-in-out forwards;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAQE,0BAAa,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE;AACtB,MAAM,KAAK,CAAC;AACZ,MAAM,IAAI,MAAM,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC;AAC7B,MAAM,IAAI,MAAM,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC/B,MAAM,IAAI,MAAM,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC/B,MAAM,IAAI,MAAM,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC/B,MAAM,IAAI,KAAK,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC9B,MAAM,IAAI,KAAK,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC9B,MAAM,IAAI,KAAK,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC9B,MAAM,IAAI,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC7B,MAAM,IAAI,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC7B,MAAM,IAAI,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,IAAI;AAC7B,KAAK,CACD,OAAO,CAAE,EAAE,CACX,SAAS,CAAE,MAAM,CAAC,EAAE,CAAC,WAAW,CAAC,QACnC"}'
};
const ColorPannel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="color-panel svelte-sqqspk" data-aos="slide-right" data-aos-delay="200" data-aos-duration="500"></div>`;
});
const ArrowUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex font-bold justify-center absolute bottom-1 w-screen items-center p-5"><button class="animate-bounce flex flex-col items-center justify-center" title="Back to top">Back to top
    ${validate_component(ArrowUpOutline, "ArrowUpOutline").$$render($$result, { class: "w-10 h-10" }, {}, {})}</button></div>`;
});
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userEmail = "";
  let sender = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="w-3/4 flex sm:flex-row flex-col bg-gray-100 dark:bg-gray-700 p-10 rounded-md gap-10"><div class="sm:w-1/3 w-full flex flex-col justify-center items-center" data-aos="fade-right" data-aos-delay="400" data-svelte-h="svelte-nj27p"><p class="text-lg text-center dark:text-gray-200">😁 Have a question or want to work together? Feel free to send me an email
      and I&#39;ll get back to you as soon as possible!</p></div> <form class="space-y-4 flex-grow"><div data-aos="fade-left" data-aos-delay="400">${validate_component(Input, "Input").$$render(
      $$result,
      {
        required: true,
        id: "email",
        type: "email",
        placeholder: "Your Email",
        value: userEmail
      },
      {
        value: ($$value) => {
          userEmail = $$value;
          $$settled = false;
        }
      },
      {
        left: () => {
          return `${validate_component(EnvelopeSolid, "EnvelopeSolid").$$render(
            $$result,
            {
              slot: "left",
              class: "w-5 h-5 text-gray-500 dark:text-gray-400"
            },
            {},
            {}
          )}`;
        }
      }
    )}</div> <div data-aos="fade-up" data-aos-delay="400">${validate_component(Input, "Input").$$render(
      $$result,
      {
        required: true,
        id: "sender",
        type: "text",
        placeholder: "Your Name",
        value: sender
      },
      {
        value: ($$value) => {
          sender = $$value;
          $$settled = false;
        }
      },
      {
        left: () => {
          return `${validate_component(PenSolid, "PenSolid").$$render(
            $$result,
            {
              slot: "left",
              class: "w-5 h-5 text-gray-500 dark:text-gray-400"
            },
            {},
            {}
          )}`;
        }
      }
    )}</div> <div data-aos="fade-up" data-aos-delay="500"><label for="content" class="block text-lg font-semibold mb-2" data-svelte-h="svelte-1oyguty">Content</label> <textarea id="content" placeholder="Just tell me what you think!" rows="5" class="w-full p-3 rounded-lg shadow-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200" required>${escape("")}</textarea></div> <div class="text-center mt-6" data-aos="fade-up" data-aos-delay="600"><button type="submit" class="flex px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">${`${validate_component(PaperPlaneSolid, "PaperPlaneSolid").$$render($$result, { class: "w-5 h-5 mr-2 rotate-90" }, {}, {})}
          Send`}</button> ${``}</div></form></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="contact" class="relative h-screen w-screen flex flex-col justify-center items-center">${validate_component(PageNumber, "PageNumber").$$render($$result, { page: "101" }, {}, {})} ${validate_component(ColorPannel, "ColorPannel").$$render($$result, {}, {}, {})} ${validate_component(Title, "Title").$$render($$result, {}, {}, {})} ${validate_component(Form, "Form").$$render($$result, {}, {}, {})} ${validate_component(ArrowUp, "ArrowUp").$$render($$result, {}, {}, {})}</section>`;
});
const Footer_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Footer, "Footer").$$render($$result, { footerType: "logo" }, {}, {
    default: () => {
      return `<div class="sm:flex sm:items-center sm:justify-between">${validate_component(FooterBrand, "FooterBrand").$$render(
        $$result,
        {
          href: "https://khoadev.com",
          name: "Khoa Le"
        },
        {},
        {}
      )} ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render(
        $$result,
        {
          ulClass: "flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
        },
        {},
        {
          default: () => {
            return `${validate_component(FooterLink, "FooterLink").$$render($$result, { href: "#welcome" }, {}, {
              default: () => {
                return `About`;
              }
            })} ${validate_component(FooterLink, "FooterLink").$$render($$result, { href: "#contact" }, {}, {
              default: () => {
                return `Contact`;
              }
            })}`;
          }
        }
      )}</div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> ${validate_component(FooterCopyright, "FooterCopyright").$$render($$result, { href: "/", by: "Khoa Le™" }, {}, {})}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} <main class="snap-y flex flex-col flex-grow">${validate_component(Welcome, "Welcome").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} ${validate_component(Resume, "Resume").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} ${validate_component(Footer_1, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
