/**
 * miles-car-quote
 * This service is used to create and copy car quotes.
 *
 * The version of the OpenAPI document: 1.74.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MultiLanguageValue } from './multi-language-value';


/**
 * Product pricing detail
 */
export interface ProductPricingDetail { 
    id?: string;
    label?: MultiLanguageValue;
    leasePrice?: number;
    leaseVAT?: number;
    reference?: string;
    editable?: boolean;
    editValue?: string;
    category?: string;
    freeText?: boolean;
    fix?: boolean;
}
