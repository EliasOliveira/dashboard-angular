/**
 * miles-catalog
 * This service may be used to retrieve for    makes, models, catalog vehicles and catalog options. Also generic    options can be retrieved for colors and accessories. Finally, also    vehicle images are available through this service.
 *
 * The version of the OpenAPI document: 2.35.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { FindModel } from './find-model';
import { EnumValue } from './enum-value';
import { RateBookQuote } from './rate-book-quote';


export interface FindModelsResponse { 
    /**
     * The list of models
     */
    models?: Array<FindModel>;
    rateBookQuote?: RateBookQuote;
    /**
     * Whether or not the priced are hidden
     */
    pricesHidden?: boolean;
    budgetUnit?: EnumValue;
    applicableUnit?: EnumValue;
    /**
     * The number of models
     */
    totalCount?: number;
}
