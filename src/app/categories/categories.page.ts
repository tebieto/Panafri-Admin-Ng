import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CategoriesService } from "../shared/categories/categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  providers: [CategoriesService]
})
export class CategoriesPage implements OnInit {
  categoryList= [];
  params=""
  constructor(
    private CategoriesService: CategoriesService,
    public router: Router,
    private storage: Storage,
  ) { }

  ngOnInit() {

    this.storage.get('token').then((val) => {
        
      let params = {token:val}
    
    
     
      this.CategoriesService.load()
        .subscribe(loadedCategories => {
          loadedCategories.forEach((categoryObject) => {
            this.categoryList.unshift(categoryObject);
          });
          
          console.log(this.categoryList);
        });

      });

  }

  checkOnline(status){
    if (status==0){
      return "Offline"
    } else {
      return "Online"
    }
  }

  categoryType(type){
    if (type==1){
      return "Product"
    } else {
      return "Service"
    }
  }

  goToCategory(item) {
    this.storage.get('token').then((val) => {
      var Category= this.categoryList.find(p => {
       return p.id===item
       });
       let result = {token: val}
       const param = Object.assign({}, result, Category);
       this.router.navigate(['category', 2], { queryParams: param });
  
      });
  }

}
