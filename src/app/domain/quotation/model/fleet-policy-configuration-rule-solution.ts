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
import { MultiCurrencyValue } from './multi-currency-value';
import { MultiLanguageValue } from './multi-language-value';


/**
 * Fleet policy configuration rule solution
 */
export interface FleetPolicyConfigurationRuleSolution { 
    /**
     * Message containing what to do to solve the violation
     */
    message?: string;
    /**
     * The type ID of the option you need to select for this solution
     */
    includeOptionTypeId?: string;
    /**
     * The type ID of the option you need to deselect for this solution
     */
    excludeOptionTypeId?: string;
    description?: MultiLanguageValue;
    catalogPrice?: MultiCurrencyValue;
    /**
     * Whether the option is mandatory accessory
     */
    isMandatoryAccessory?: boolean;
}
