import { valueConverter } from 'aurelia-framework';
import { NavModel } from 'aurelia-router';

@valueConverter('navFilterMainLinks')
export class NavFilterMainLinks {
  public toView(routes: NavModel[]){
    if (routes) {
      var mainLinks =  routes.filter( (item) => {
        return !item.settings.childOf;
      });

      mainLinks.forEach((main: NavModel) => {
        if(main.settings.parent){
          main.settings.children = routes.filter( (route: NavModel) => {
            return route.settings.childOf == main.config.name;
          });
          main.settings.childRoutes = main.settings.children.map((child: NavModel) => {
            return child.config.route;
          });
        }
      })

      return mainLinks;
    }
  }
}
