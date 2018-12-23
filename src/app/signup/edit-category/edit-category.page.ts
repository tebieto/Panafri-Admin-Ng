import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Category } from "../../shared/add-category/category.model";
import { CategoryService } from "../../shared/add-category/category.service";
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'edit-category',
  templateUrl: 'edit-category.page.html',
  styleUrls: ['edit-category.page.scss'],
  providers: [CategoryService]
})
export class EditCategoryPage implements OnInit{
  imagePaths: string[];
  image:{}

  isDesktop: boolean;
 avatar=""
  category: Category
  constructor(
    public loadingController: LoadingController,
    public router: Router,
    private categoryService: CategoryService,
    private storage: Storage,
    private route: ActivatedRoute,
  ) { 
    this.category = new Category();
  }

  ngOnInit(){
    this.storage.get('token').then((val) => {
      this.category.token = val
    });

    this.route.queryParams.subscribe(params => {
      this.category.id=params.id
      this.category.name=params.name
      this.category.image=params.image
      this.category.type=params.type
      this.category.token=params.token
    });
  }


  

  saveCategory() {
    this.categoryService.edit(this.category)
      .subscribe(
        (result) => {
          console.log(result)

         
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




