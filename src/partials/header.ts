import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import * as $ from 'jquery';
import * as toastr from 'toastr';
import * as bootstrap from 'bootstrap';

@autoinject
export class Header {
  constructor(private router: Router) {}

  attached() {
//     $(document).on('click','.navbar-collapse .nav-item, .navbar-collapse .dropdown-item,.navbar-brand',() => {
//       var mobile = $('.navbar-collapse').css('display') === 'block';
//       if(mobile){
//         var navbarEl = document.getElementById('navbarSupportedContent')
//         var collapseEl = new bootstrap.Collapse(navbarEl)
//         collapseEl.hide();
//       }
//     });
  }
}
