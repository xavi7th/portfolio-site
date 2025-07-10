import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: { adapter: adapter() },
  alias: {
    $partials: "./src/partials",
    $stores: "./src/stores",
  },
  onwarn: (warning, handler) => {
    const { code, frame } = warning;

    if (
      code == "anchor_is_valid" ||
      code == "a11y_invalid_attribute" ||
      code == "a11y_media_has_caption" ||
      code == "a11y_no_static_element_interactions" ||
      code == "a11y_missing_attribute" ||
      code == "css_unused_selector" ||
      code == "a11y_missing_content" ||
      code == "a11y_label_has_associated_control" ||
      // code.startsWith('a11y_') ||
      (code == "missing_declaration" && frame.includes("route"))
    ) {
      return;
    }

    console.log("\x1b[41m%s\x1b[0m", code);

    handler(warning);
  },
};

export default config;
