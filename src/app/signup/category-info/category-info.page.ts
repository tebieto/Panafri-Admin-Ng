import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Category } from "../../shared/add-category/category.model";
import { CategoryService } from "../../shared/add-category/category.service";
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-contact',
  templateUrl: 'category-info.page.html',
  styleUrls: ['category-info.page.scss'],
  providers: [CategoryService]
})
export class CategoryInfoPage implements OnInit{
  imagePaths: string[];
  image:{}

  isDesktop: boolean;
 imgPreview = 'https://res.cloudinary.com/sportbay-co/image/upload/v1537287942/user_svhfyt.png';
 avatar=""
  category: Category
  constructor(
    public loadingController: LoadingController,
    public router: Router,
    private categoryService: CategoryService,
    private storage: Storage,
  ) { 
    this.category = new Category();
  }

  ngOnInit(){
    this.storage.get('token').then((val) => {
      this.category.token = val
    });
  }

  

  saveCategory() {
    this.categoryService.category(this.category)
      .subscribe(
        (result) => {
          alert(result.success)

         
      },
        (error) => {
          
          alert("Unfortunately we could not send request.")
        } 
      );
      
  }

  async savePersonalDetails() {
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.router.navigate(['dashboard']);
    }, 1000);
  }
}




