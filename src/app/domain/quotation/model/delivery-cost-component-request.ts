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
import { SimpleDynamicAttributeValue } from './simple-dynamic-attribute-value';


/**
 * Delivery cost component
 */
export interface DeliveryCostComponentRequest { 
    /**
     * ID of delivery cost component
     */
    id?: string;
    /**
     * Cost type ID of the delivery cost component
     */
    costTypeId?: string;
    /**
     * The discount
     */
    discount?: number;
    /**
     * The price
     */
    price?: number;
    /**
     * Whether the delivery cost component is selected
     */
    isSelected?: boolean;
    /**
     * A map of dynamic attributes
     */
    dynamicAttributes?: { [key: string]: SimpleDynamicAttributeValue; };
}
