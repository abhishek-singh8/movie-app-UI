import{MatButtonModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
    imports:[MatMenuModule,MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatGridListModule,MatInputModule],
    exports:[MatMenuModule,MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatGridListModule,MatInputModule],
})

export class MaterialModule{}