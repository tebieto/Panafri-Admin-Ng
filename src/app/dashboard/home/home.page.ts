import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from './popover/popover.page';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products=""
  services=""
  requests=""
  partners=""
  users=""
  categories=""
  stores=""
  reviews=""
  constructor(
    public popoverController: PopoverController,
    public router: Router,
    public route: ActivatedRoute,
    private storage: Storage
  ) {}


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      
      }
      );

      this.storage.get('products').then((val) => {
        
        this.products = val
      });

      this.storage.get('services').then((val) => {
        
        this.services = val
      });
      
      this.storage.get('stores').then((val) => {
        
        this.stores = val
      });

      this.storage.get('users').then((val) => {
        
        this.users = val
      });

      this.storage.get('categories').then((val) => {
        
        this.categories = val
      });

      this.storage.get('partners').then((val) => {
        
        this.partners = val
      });

      this.storage.get('requests').then((val) => {
        
        this.requests = val
      });

      this.storage.get('reviews').then((val) => {
        
        this.reviews = val
      });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  goToNewCategory() {
    this.router.navigateByUrl('dashboard/category/new');
  }

}
