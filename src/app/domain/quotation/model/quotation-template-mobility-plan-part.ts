/**
 * miles-quotation
 * This service supports creation, calculation and follow-up of sales quotes (price proposals), typically    involving selection/configuration of a vehicle/asset and a choice of finance or rental product.
 *
 * The version of the OpenAPI document: 4.113.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MobilityPlanPartFleetPolicy } from './mobility-plan-part-fleet-policy';
import { MultiCurrencyValue } from './multi-currency-value';
import { EnumValue } from './enum-value';


/**
 * Quotation template mobility plan part
 */
export interface QuotationTemplateMobilityPlanPart { 
    /**
     * The ID of the mobility plan part
     */
    mobilityPlanPartId?: string;
    mobilityBudget?: MultiCurrencyValue;
    mobilityPartType?: EnumValue;
    fleetPolicy?: MobilityPlanPartFleetPolicy;
}
