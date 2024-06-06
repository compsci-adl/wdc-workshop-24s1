import Navbar from '../navbar/Navbar.js';

export default {
	components: { wNavbar: Navbar },
	data() {
		return {
			navs: [
				{ text: 'Home', href: '/' },
				{ text: 'Dashboard', href: '/dashboard' },
				{ text: 'About', href: '/about' },
				{ text: 'Contact', href: '/contact' },
			],
		};
	},
	computed: {
		active() {
			return (
				this.navs.find((nav) => {
					let url = window.location.pathname;
					if (url.endsWith('/')) {
						url = url.slice(0, -1);
					}
					return nav.href === url;
				})?.text || 'Home'
			);
		},
	},
	template: /*html*/ `
    <div>
      <w-navbar :navs="navs" :active="active"></w-navbar>
      <slot></slot>
    </div>
  `,
};
