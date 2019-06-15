import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpasComponent } from './spas.component';
import { SpasRouting } from './spas.routing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { createTranslateLoader } from 'src/app/app.module';

@NgModule({
  declarations: [
    SpasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SpasRouting,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    })
  ],
  exports: [
    SpasComponent
  ],
  providers: [],
  bootstrap: [SpasComponent]
})
export class SpasModule { }
