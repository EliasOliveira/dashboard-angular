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
import { ContractReference } from './contract-reference';
import { DynamicAttributeValue } from './dynamic-attribute-value';
import { DriverId } from './driver-id';
import { AmendmentProduct } from './amendment-product';
import { EnumValue } from './enum-value';
import { CustomerId } from './customer-id';
import { FleetVehicleId } from './fleet-vehicle-id';
import { ContractVehicleId } from './contract-vehicle-id';


export interface ConfirmAmendmentQuoteResponse { 
    /**
     * The ID of the amendment quote
     */
    amendmentQuoteId?: string;
    /**
     * The request external reference
     */
    externalReference?: string;
    /**
     * The amendment quote reference
     */
    reference?: string;
    quoteType?: EnumValue;
    quoteStatus?: EnumValue;
    /**
     * The ID of the amendment request
     */
    amendmentRequestId?: string;
    /**
     * The ID of the contract quote this amendment quote is based on
     */
    originatingContractQuoteId?: string;
    customer?: CustomerId;
    driver?: DriverId;
    /**
     * The creation date
     */
    creationDate?: string;
    /**
     * The expiration date
     */
    expirationDate?: string;
    amendmentProduct?: AmendmentProduct;
    contract?: ContractReference;
    fleetVehicle?: FleetVehicleId;
    contractVehicle?: ContractVehicleId;
    /**
     * A map of dynamic attributes
     */
    dynamicAttributes?: { [key: string]: DynamicAttributeValue; };
}
