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
import { FindQuotationTemplate } from './find-quotation-template';


export interface FindQuotationTemplatesResponse { 
    /**
     * List of quotation templates
     */
    quotationTemplates?: Array<FindQuotationTemplate>;
    /**
     * Number of retrieved quotation templates
     */
    totalCount?: number;
}
