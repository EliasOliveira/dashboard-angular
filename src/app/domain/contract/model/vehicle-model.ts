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
 * The model of the vehicle
 */
export interface VehicleModel { 
    /**
     * Model ID of the vehicle
     */
    modelId?: string;
    modelName?: MultiLanguageValue;
    /**
     * Model year of the vehicle
     */
    modelYear?: string;
}
