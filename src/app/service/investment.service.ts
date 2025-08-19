import { Injectable } from "@angular/core"
import { InvestmentResult } from "../investment-result/investment-result.model";
import { UserInput } from "../user-input/user-input.model";


@Injectable({ providedIn: "root"})
export class InvestmentService {
    investmentResult?: InvestmentResult[];

    calculateInvestmentResults(userInput: UserInput) {
        this.investmentResult = [];
        let investmentValue = userInput.initialInvestment;

        for (let i = 0; i < userInput.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
            investmentValue += interestEarnedInYear + userInput.annualInvestment;
            const totalInterest =
            investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
            this.investmentResult.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: userInput.annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
            });
        }
    }

}