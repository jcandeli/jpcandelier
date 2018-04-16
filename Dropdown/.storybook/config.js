import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

setAddon(infoAddon);
setOptions({ downPanelInRight: true });

require('../../theme/_styles.scss');
require('../src/styles/Dropdown.scss');

function loadStories() {
  require('../src/stories/Dropdown.story.js');
}

configure(loadStories, module);

