/**
 * miles-contract
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.124.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MultiLanguageValue } from './multi-language-value';


/**
 * The country the phone number is from
 */
export interface Country { 
    /**
     * The ID of the country
     */
    countryId?: string;
    /**
     * The ISO2 code of the country
     */
    countryCodeISO2?: string;
    /**
     * The ISO3 code of the country
     */
    countryCodeISO3?: string;
    /**
     * The ISO code of the country
     */
    countryCodeISONumber?: number;
    countryName?: MultiLanguageValue;
    /**
     * The country phone code
     */
    countryPhoneCode?: string;
    /**
     * The country EC code
     */
    ecCountryCode?: string;
}
