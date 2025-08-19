import { Component, computed, inject } from "@angular/core";
import { InvestmentService } from "../service/investment.service";

@Component({
    selector: "app-investment-result",
    templateUrl: "investment-result.component.html",
    styleUrls: ["investment-result.component.css"],
    standalone: false
})
export class InvestmentResultComponent {
    private investmentService = inject(InvestmentService);


    // get investmentResult with readonly computed method
    investmentResult = computed(() => this.investmentService.investmentResult());
}

