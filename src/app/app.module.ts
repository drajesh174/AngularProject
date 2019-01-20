import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http'; //api
import {HttpClientModule} from '@angular/common/http'; //api
import {RouterModule,Routes} from '@angular/router'; //page navigation
import {FormsModule} from '@angular/forms'; //for search
import {Ng2SearchPipeModule} from 'ng2-search-filter';

import{NgxPaginationModule} from 'ngx-pagination'; //for pagination

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { Array1Component } from './array1/array1.component';
import { MyarrayComponent } from './myarray/myarray.component';
import { MycarComponent } from './mycar/mycar.component';
import { from } from 'rxjs';
import { CrudComponent } from './crud/crud.component';

const allPages : Routes=[

{path:"home",component:BannerComponent},
{path:"my-array",component:MyarrayComponent},
{path:"carlist",component:MycarComponent},
{path:"manage-data",component:CrudComponent},
{path:"",redirectTo:'/home',pathMatch:"full"} //default page

];

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    BannerComponent,
    FooterComponent,
    Array1Component,
    MyarrayComponent,
    MycarComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//api
    HttpModule, //api
    RouterModule.forRoot(allPages),
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
