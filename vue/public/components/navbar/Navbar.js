export default {
	props: {
		navs: Array,
		active: String,
	},
	template: /*html*/ `
    <nav class="component_navbar">
      <a v-for="nav in navs" :key="nav.text" :href="nav.href" class="component_navbar-item" :class="{ 'component_navbar-item-active': nav.text === active }">
        {{ nav.text }}
      </a>
    </nav>
  `,
};
