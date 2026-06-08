export interface ProductCategory {
  CategoryID:   number;
  TenantID:     number;
  CategoryCode: string;
  CategoryName: string;
  ColorHex:     string;
  IconName:     string;
  SortOrder:    number;
  IsActive:     boolean;
  ProductCount: number;
}

export type PricingModel    = 'FLAT' | 'PER_USER' | 'USAGE' | 'FREE';
export type DeploymentType  = 'CLOUD' | 'ON_PREMISE' | 'HYBRID';
export type ProductStatus   = 'DRAFT' | 'ACTIVE' | 'DEPRECATED';

export interface Product {
  ProductID:          number;
  TenantID:           number;
  CategoryID:         number | null;
  CategoryName:       string;
  ProductCode:        string;
  ProductName:        string;
  ShortDescription:   string;
  Description:        string;
  ProductVersion:     string;
  PricingModel:       PricingModel;
  PriceMonthly:       number;
  PriceAnnual:        number;
  SetupFee:           number;
  TrialDays:          number;
  MaxUsers:           number | null;
  MaxStorage_GB:      number | null;
  MaxRecords:         number | null;
  ApiCallsPerMonth:   number | null;
  ColorHex:           string;
  IconName:           string;
  LogoUrl:            string;
  DeploymentType:     DeploymentType;
  SupportedLanguages: string;
  DocumentationUrl:   string;
  ProductStatus:      ProductStatus;
  IsPublic:           boolean;
  LaunchDate:         string | null;
  EndOfLifeDate:      string | null;
  SortOrder:          number;
  IsActive:           boolean;
}

export interface PackageProduct {
  ProductID:   number;
  ProductName: string;
  ProductCode: string;
  IsIncluded:  boolean;
}

export interface Package {
  PackageID:    number;
  TenantID:     number;
  PackageCode:  string;
  PackageName:  string;
  Description:  string;
  PriceMonthly: number;
  PriceAnnual:  number;
  SetupFee:     number;
  TrialDays:    number;
  MaxUsers:     number | null;
  IsPublic:     boolean;
  SortOrder:    number;
  IsActive:     boolean;
  ProductCount: number;
  Products?:    PackageProduct[];
}

export const PRICING_MODEL_LABELS: Record<PricingModel, string> = {
  FLAT:     'מחיר קבוע',
  PER_USER: 'לפי משתמש',
  USAGE:    'לפי שימוש',
  FREE:     'חינמי',
};

export const DEPLOYMENT_LABELS: Record<DeploymentType, string> = {
  CLOUD:       'ענן',
  ON_PREMISE:  'שרת מקומי',
  HYBRID:      'היברידי',
};

export const PRODUCT_STATUS_LABELS: Record<ProductStatus, string> = {
  DRAFT:      'טיוטה',
  ACTIVE:     'פעיל',
  DEPRECATED: 'מיושן',
};
