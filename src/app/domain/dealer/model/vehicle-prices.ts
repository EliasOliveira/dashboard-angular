/**
 * miles-dealer-pos
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.8.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MultiCurrencyValue } from './multi-currency-value';
import { VehicleDiscountConfiguration } from './vehicle-discount-configuration';
import { EnumValue } from './enum-value';
import { DeliveryCostReference } from './delivery-cost-reference';


/**
 * Deprecated since 2024-03-21 and version \'1.8.0\' in favor of \'amendmentQuote.pricing.vehicle\'. The prices of the vehicle.
 */
export interface VehiclePrices { 
    vatCode?: EnumValue;
    taxAmount?: MultiCurrencyValue;
    netPriceExclusiveVat?: MultiCurrencyValue;
    netPriceInclusiveVat?: MultiCurrencyValue;
    catalogPrice?: MultiCurrencyValue;
    consumerPrice?: MultiCurrencyValue;
    /**
     * Discount percentage
     */
    discountPercentage?: number;
    discountAmountExclusiveVat?: MultiCurrencyValue;
    discountAmountInclusiveVat?: MultiCurrencyValue;
    totalOptionPriceExclusiveVat?: MultiCurrencyValue;
    /**
     * A list of vehicle discounts
     */
    vehicleDiscounts?: Array<VehicleDiscountConfiguration>;
    /**
     * The list of delivery cost components of the vehicle
     */
    deliveryCostComponents?: Array<DeliveryCostReference>;
}
