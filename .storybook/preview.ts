import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3';
import '../src/assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import VueSafeHTML from 'vue-safe-html';

library.add(fas, far, fab);


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },
      expanded: true
    },
  }
}
setup((app) => {
  app.use(VueSafeHTML)
})

export default preview
