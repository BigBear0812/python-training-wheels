import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';
import {library, dom} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

// Kick off the process of finding <i> tags and replacing with <svg>
dom.watch()

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.options.pushState = true;
    config.options.root = '/';

    config.title = 'Home';
    config.map([
      {
        route: ['', 'index'],
        name: 'home',
        moduleId: PLATFORM.moduleName('pages/home/home'),
        title: 'Home'
      }
    ]);

    config.fallbackRoute('home');

    this.router = router;
  }
}

