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
import { ContactAddress } from './contact-address';
import { DynamicAttributeValue } from './dynamic-attribute-value';
import { M2MIndividualPerson } from './m2-m-individual-person';
import { EnumValue } from './enum-value';
import { PhoneNumber } from './phone-number';
import { SectorCodeInfo } from './sector-code-info';
import { InternetReference } from './internet-reference';
import { LeasingCompanyReference } from './leasing-company-reference';


export interface M2MCustomer { 
    /**
     * The ID of the customer
     */
    customerId?: string;
    /**
     * Trading name
     */
    tradingName?: string;
    /**
     * Legal name
     */
    legalName?: string;
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
    legalEntity?: EnumValue;
    taxLiability?: EnumValue;
    customerState?: EnumValue;
    individualPerson?: M2MIndividualPerson;
    /**
     * A list of phone numbers
     */
    phoneNumbers?: Array<PhoneNumber>;
    /**
     * A list of customer contact addresses
     */
    addresses?: Array<ContactAddress>;
    /**
     * A list of internet references
     */
    internetReferences?: Array<InternetReference>;
    sectorCodeInfo?: SectorCodeInfo;
    /**
     * A map of dynamic attributes
     */
    dynamicAttributes?: { [key: string]: DynamicAttributeValue; };
    /**
     * Internal company code
     */
    companyGroupReference?: string;
    /**
     * Car fleet size
     */
    carFleetSize?: number;
    /**
     * Commercial fleet size
     */
    commercialFleetSize?: number;
    knowYourCustomerSource?: EnumValue;
    /**
     * Business partner reference
     */
    reference?: string;
    /**
     * Customer reference
     */
    customerReference?: string;
    /**
     * The list of the leasing companies
     */
    leasingCompanies?: Array<LeasingCompanyReference>;
    /**
     * The ID of the language of the contact
     */
    languageId?: string;
    communicationMedium?: EnumValue;
    /**
     * The date on which the customer was last modified
     */
    lastModified?: string;
}
