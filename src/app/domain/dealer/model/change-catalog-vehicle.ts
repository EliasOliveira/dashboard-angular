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
import { AddFactoryOption } from './add-factory-option';


/**
 * The catalog vehicle changes for the pending contract. If this field is provided, the amendment quote will start from scratch. 
 */
export interface ChangeCatalogVehicle { 
    /**
     * The ID of the new catalog vehicle
     */
    catalogVehicleId: string;
    /**
     * The list of requested factory options for the new vehicle
     */
    factoryOptions?: Array<AddFactoryOption>;
}
