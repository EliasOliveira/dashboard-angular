/**
 * miles-customer
 * This service is used to retrieve information about customers, fleet managers,    drivers & legal entity groups.    It can manage all things related to UBO and its documents.    Customers can be created, updated and links to them can be removed.    The service provides filters needed to manage all these objects.
 *
 * The version of the OpenAPI document: 1.128.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Miles API v1 representation of a translated string value.
 */
export interface MultiLanguageValue { 
    /**
     * The multi-language ID that can be used to retrieve the translation in other languages
     */
    multiLanguageId?: string;
    /**
     * The translation of the multi-language ID in human-readable format
     */
    translation?: string;
}
