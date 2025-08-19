import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputComponent } from "./user-input/user-input.component";
import { FormsModule } from "@angular/forms";
import { InvestmentResultComponent } from "./investment-result/investment-result.component";
import { CurrencyPipe } from "@angular/common";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserInputComponent, InvestmentResultComponent],
    imports: [BrowserModule, FormsModule, CurrencyPipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}