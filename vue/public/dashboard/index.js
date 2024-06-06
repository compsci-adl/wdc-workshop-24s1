import { createApp } from 'vue';
import components from '../components/index.js';

createApp({
	components,
	data() {
		return {
			tab: 'Events',
		};
	},
}).mount('body');
