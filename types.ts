
export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  
  // New Pricing Structure
  setupPrice: string;
  monthlyPrice: string;
  annualMonthlyPrice: string; // New field for annual payment logic
  
  // For discounts/offers (Premium)
  originalSetupPrice?: string;
  originalMonthlyPrice?: string;
  discountBadge?: string; // "Ahorra un 30%"
  promoText?: string; // "Solo 100 primeros clientes"
  
  features: PricingFeature[];
  highlight?: string;
  popular?: boolean;
  
  // Extended info from PDF
  idealFor: string[]; // "Es para ti si..."
  dataBenefits: string[]; // "Beneficios en Datos"
  
  // Amortization split
  amortizationTime: string; // "Amortizado en 2 meses"
  amortizationBenefit: string; // "Beneficio Neto Anual..."
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CalculatorInputs {
  studiesPerMonth: number;
  salesPerMonth: number;
  adminHoursPerMonth: number;
  oldPatients: number;
}

export interface CalculatorResults {
  annualProfit: number;
  monthsToAmortize: number;
  extraSales: number;
}
