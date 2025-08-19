import { Component, inject, signal } from "@angular/core";
import { InvestmentService } from "../service/investment.service";

@Component({
    selector: 'app-user-input',
    templateUrl: 'user-input.component.html',
    styleUrls: ['user-input.component.css'],
    standalone: false,
})
export class UserInputComponent {
    investmentService = inject(InvestmentService);

    initialInvestment = signal("-");
    annualInvestment = signal("-");
    expectedReturn = signal("-");
    duration = signal("-");

    onSubmit() {
        this.investmentService.calculateInvestmentResults({
            initialInvestment: +this.initialInvestment(),
            annualInvestment: +this.annualInvestment(),
            expectedReturn: +this.expectedReturn(),
            duration: +this.duration(),
        })
        this.initialInvestment.set("-");
        this.annualInvestment.set("-");
        this.expectedReturn.set("-");
        this.duration.set("-");
    }
}