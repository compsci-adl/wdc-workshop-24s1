export default {
	props: {
		tabs: Array,
		modelValue: String,
	},
	emits: ['update:modelValue'],
	template: /*html*/ `
    <div class="component_tab">
      <button
        v-for="tab in tabs"
        class="component_tab-item"
        :class="{ 'component_tab-item-active': modelValue === tab }"
        @click="$emit('update:modelValue', tab)"
      >
        {{ tab }}
      </button>
    </div>`,
};
