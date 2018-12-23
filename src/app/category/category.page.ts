import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Category } from "../shared/add-category/category.model";
import { CategoryService } from "../shared/add-category/category.service";
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  providers: [CategoryService]
})
export class CategoryPage implements OnInit {
  category: Category
  Category={}
  Id=""
  Name=""
  Image=""
  Type=""
  


  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private categoryService: CategoryService,
    private storage: Storage
  ) { 
    this.category = new Category();
  }

  ngOnInit() {

    this.storage.get('token').then((val) => {
      this.category.token = val
    });

    this.route.queryParams.subscribe(params => {
      this.Category=params
      this.Id=params.id
      this.Name=params.name
      this.Type=params.type
      this.Image=params.image
     
    });
  }

  editCategory(){
    console.log(this.Category)
    this.router.navigate(['dashboard', 'categories', 'edit'], { queryParams: this.Category });
  }

  deleteCategory(){
    this.category.id= parseInt(this.Id)
    this.categoryService.delete(this.category)
    .subscribe(
      (result) => {
        console.log(result)

       
    })
  }
  
  checkType(type){
    if (type==1){
      return "Product"
    } else {
      return "Service"
    }
  }

  goBackToCategories() {
    this.router.navigate(['dashboard/categories']);
  }

}
