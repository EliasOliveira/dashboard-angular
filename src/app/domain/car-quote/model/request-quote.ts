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
import { BrokerCompanyReference } from './broker-company-reference';
import { QuoteProduct } from './quote-product';
import { LeasingCompany } from './leasing-company';
import { QuoteMobilityPlan } from './quote-mobility-plan';
import { CarConfiguration } from './car-configuration';
import { QuotationTemplate } from './quotation-template';
import { BrokerContactRepresentation } from './broker-contact-representation';
import { Customer } from './customer';
import { EnumValue } from './enum-value';
import { Driver } from './driver';
import { Product } from './product';


/**
 * The information about the quote itself
 */
export interface RequestQuote { 
    /**
     * The ID of the sales quote
     */
    salesQuoteId?: string;
    /**
     * The reference of the sales quote
     */
    reference?: string;
    /**
     * A description for the sales quote
     */
    description?: string;
    /**
     * The date on which the sales quote is created
     */
    creationDate?: string;
    /**
     * The date on which the sales quote will expire
     */
    expirationDate?: string;
    /**
     * Whether the sales quote is approved
     */
    isApproved?: boolean;
    /**
     * The driver who requested the sales quote
     */
    driverName?: string;
    /**
     * An external reference to the request
     */
    externalReference?: string;
    /**
     * The user account ID who requested the sales quote
     */
    userAccountId?: string;
    /**
     * Deprecated since 2023-12-08 and version 1.74.0 in favor of quotationTemplate
     */
    quotationTemplateId?: string;
    quotationTemplate?: QuotationTemplate;
    quoteReason?: EnumValue;
    quoteStatus?: EnumValue;
    quoteType?: EnumValue;
    requestType?: EnumValue;
    vehicleCategory?: EnumValue;
    vehicleNature?: EnumValue;
    /**
     * The license plate
     */
    licensePlate?: string;
    /**
     * The requested delivery date
     */
    requestedDeliveryDate?: string;
    customer?: Customer;
    driver?: Driver;
    leasingCompany?: LeasingCompany;
    quoteProduct?: QuoteProduct;
    carConfiguration?: CarConfiguration;
    mobilityPlan?: QuoteMobilityPlan;
    brokerContactRepresentation?: BrokerContactRepresentation;
    /**
     * A list of broker companies
     */
    brokerCompanies?: Array<BrokerCompanyReference>;
    /**
     * Whether the lease prices are hidden
     */
    leasePricesHidden?: boolean;
    /**
     * Whether the discounts are hidden
     */
    discountsHidden?: boolean;
    /**
     * Whether the catalog prices are hidden
     */
    catalogPricesHidden?: boolean;
    /**
     * Use salesQuoteId instead
     */
    quoteId?: string;
    /**
     * Use reference instead
     */
    quoteReference?: string;
    /**
     * Use driverName instead
     */
    requestDriverName?: string;
    /**
     * Use externalReference instead
     */
    requestExternalReference?: string;
    /**
     * Use userAccountId instead
     */
    requestUserAccount?: string;
    product?: Product;
    /**
     * Use leasePricesHidden, discountsHidden or catalogPricesHidden instead
     */
    pricesHidden?: boolean;
}
