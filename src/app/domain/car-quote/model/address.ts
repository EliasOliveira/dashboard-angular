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
import { Country } from './country';


/**
 * The address of the supplier
 */
export interface Address { 
    /**
     * The address ID
     */
    addressId?: string;
    /**
     * The formatted address
     */
    formattedAddress?: string;
    /**
     * The postal code
     */
    postalCode?: string;
    city?: MultiLanguageValue;
    state?: MultiLanguageValue;
    addressLine1?: MultiLanguageValue;
    addressLine2?: MultiLanguageValue;
    locationIdentification?: MultiLanguageValue;
    /**
     * Indicates if the address has been deleted
     */
    deleted?: boolean;
    country?: Country;
}
