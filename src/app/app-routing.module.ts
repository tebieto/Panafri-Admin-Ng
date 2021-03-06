import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'new-products', loadChildren: './products/new-products/new-products.module#NewProductsPageModule' },
  { path: 'new-services', loadChildren: './services/new-services/new-services.module#NewServicesPageModule' },
  { path: 'productView', loadChildren: './products/product-view/product-view.module#ProductViewPageModule' },
  { path: 'requests', loadChildren: './requests/requests.module#RequestsPageModule' },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },
  { path: 'category/:id', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'new-store', loadChildren: './addstore/addstore.module#AddstorePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'services', loadChildren: './services/services.module#ServicesPageModule' },
  { path: 'add-services', loadChildren: './add-services/add-services.module#AddServicesPageModule' },
  { path: 'service', loadChildren: './service/service.module#ServicePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
