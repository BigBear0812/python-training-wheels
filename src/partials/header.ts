import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import * as $ from 'jquery';
import * as toastr from 'toastr';

@autoinject
export class Header {
  constructor(private router: Router) {}

  attached() {
    $(document).on('click','.navbar-collapse .nav-item, .navbar-collapse .dropdown-item,.navbar-brand',() => {
      $('.navbar-collapse').collapse('hide');
    });
  }
}
