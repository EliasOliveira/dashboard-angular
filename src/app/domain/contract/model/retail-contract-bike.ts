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
import { BikeOption } from './bike-option';
import { BikeOptionPack } from './bike-option-pack';


/**
 * The bike of the retail contract, it can only return a bike or a car not both
 */
export interface RetailContractBike { 
    /**
     * ID of the bike
     */
    bikeId?: string;
    /**
     * List of bike options
     */
    bikeOptions?: Array<BikeOption>;
    /**
     * List of bike option packs
     */
    bikeOptionPacks?: Array<BikeOptionPack>;
}
