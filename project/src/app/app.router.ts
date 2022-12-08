import { RouterModule, Routes } from "@angular/router";
import { MainmenuComponent } from "./mainmenu/mainmenu.component";
import { NavbarComponent } from "./navbar/navbar.component";

const routes :Routes = [
  {
    path:'',
    component: MainmenuComponent
  }
]

export const appRouter = RouterModule.forRoot(routes)
