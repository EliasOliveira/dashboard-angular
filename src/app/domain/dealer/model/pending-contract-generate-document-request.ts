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


export interface PendingContractGenerateDocumentRequest { 
    /**
     * The ID of the document template that should be used to generate the document
     */
    documentTemplateId: string;
    /**
     * The language in which the document should be generated. If the language is not provided, the language of the user will be used.
     */
    language?: string;
}
