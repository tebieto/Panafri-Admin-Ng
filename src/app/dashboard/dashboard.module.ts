import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home/home.page';
import { DashboardPage } from './dashboard.page';
import { ProductsPage } from '../products/products.page';
import { NewProductsPage } from '../products/new-products/new-products.page';
import { EditProductPage } from '../products/edit-product/edit-product.page';
import { CategoryInfoPage} from '../signup/category-info/category-info.page';
import { EditCategoryPage} from '../signup/edit-category/edit-category.page';
import { ChangePasswordPage} from '../signup/change-password/change-password.page';
import { EditProfilePage} from '../signup/edit-profile/edit-profile.page';
import { NewServicesPage } from '../services/new-services/new-services.page';
import { EditServicePage } from '../services/edit-service/edit-service.page';
import { ProductViewPage } from '../products/product-view/product-view.page';
import { ReviewsPage } from '../reviews/reviews.page';
import { RequestsPage } from '../requests/requests.page';
import { CategoriesPage } from '../categories/categories.page';
import { SettingsPage } from '../settings/settings.page';
import { ServicesPage } from '../services/services.page';


const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: DashboardPage,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'products',
        component: ProductsPage,
      },
      {
        path: 'product/:id',
        component: ProductViewPage
      },
      
      {
        path: 'products/new',
        component: NewProductsPage
      },
      {
        path: 'products/edit',
        component: EditProductPage
      },
      {
        path: 'services/edit',
        component: EditServicePage
      },
      {
        path: 'services/new',
        component: NewServicesPage
      },

      {
        path: 'profile/edit',
        component: EditProfilePage
      },
      {
        path: 'password/change',
        component: ChangePasswordPage
      },
      {
        path: 'category/new',
        component: CategoryInfoPage
      },
      {
        path: 'categories/edit',
        component: EditCategoryPage
      },
      {
        path: 'reviews',
        component: ReviewsPage
      },
      {
        path: 'requests',
        component: RequestsPage
      },
      {
        path: 'categories',
        component: CategoriesPage
      },
      {
        path: 'settings',
        component: SettingsPage
      },
      {
        path: 'services',
        component: ServicesPage
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardPage,
    HomePage,
    ProductsPage,
    NewProductsPage,
    EditProductPage,
    EditProfilePage,
    ChangePasswordPage,
    EditCategoryPage,
    EditServicePage,
    NewServicesPage,
    CategoryInfoPage,
    ProductViewPage,
    ReviewsPage,
    RequestsPage,
    CategoriesPage,
    SettingsPage,
    ServicesPage
  ]
})
export class DashboardPageModule {}
