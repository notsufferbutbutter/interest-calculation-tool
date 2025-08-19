import { Injectable, signal } from "@angular/core"
import { InvestmentResult } from "../investment-result/investment-result.model";
import { UserInput } from "../user-input/user-input.model";


@Injectable({ providedIn: "root"})
export class InvestmentService {
    investmentResult = signal<InvestmentResult[] | undefined >(undefined);

    calculateInvestmentResults(userInput: UserInput) {
        let annualData: InvestmentResult[] = [];
        this.investmentResult.set([]);
        let investmentValue = userInput.initialInvestment;

        for (let i = 0; i < userInput.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
            investmentValue += interestEarnedInYear + userInput.annualInvestment;
            const totalInterest =
            investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
            annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: userInput.annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
            });
        }

        this.investmentResult.set(annualData);
    }

}