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
import { InternetReferenceRequest } from './internet-reference-request';
import { SimpleEnumValue } from './simple-enum-value';
import { IndividualPersonRequest } from './individual-person-request';
import { AddressRequest } from './address-request';
import { SimpleDynamicAttributeValue } from './simple-dynamic-attribute-value';
import { PhoneNumberRequest } from './phone-number-request';


/**
 * The customer on the quote
 */
export interface CustomerRequest { 
    /**
     * Company name. This parameter is only optional for individual customers, but required for non-individual customers such as Organization.
     */
    tradingName?: string;
    /**
     * Official registration
     */
    officialRegistration?: string;
    /**
     * VAT number
     */
    vatNumber?: string;
    /**
     * Establishment date
     */
    establishmentDate?: string;
    taxLiability?: SimpleEnumValue;
    legalEntity?: SimpleEnumValue;
    individualPerson?: IndividualPersonRequest;
    /**
     * Additional customer reference. Typically used for mapping to other systems.
     */
    reference?: string;
    /**
     * A list of addresses
     */
    addresses?: Array<AddressRequest>;
    /**
     * A list of phone numbers
     */
    phoneNumbers?: Array<PhoneNumberRequest>;
    /**
     * A list of internet references
     */
    internetReferences?: Array<InternetReferenceRequest>;
    /**
     * Broker company ID to which the customer is linked
     */
    brokerCompanyId?: string;
    /**
     * Sector code
     */
    sectorCode?: string;
    /**
     * A map of dynamic attributes
     */
    dynamicAttributes?: { [key: string]: SimpleDynamicAttributeValue; };
}
