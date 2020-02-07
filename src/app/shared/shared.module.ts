import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { BredcrumbsComponent } from './bredcrumbs/bredcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule ({
    declarations:[
        HeaderComponent,
        BredcrumbsComponent,
        NopagefoundComponent,
        SidebarComponent
    ],
    exports:[
        HeaderComponent,
        BredcrumbsComponent,
        NopagefoundComponent,
        SidebarComponent
    ]
})

export class SharedModule {}