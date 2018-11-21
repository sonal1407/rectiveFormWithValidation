import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpInMemoryWebApiModule, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//------------------------------------------//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { InMemoryWebApiService } from './in-memory-web-api.service';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryWebApiService)
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
