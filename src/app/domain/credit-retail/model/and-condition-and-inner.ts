/**
 * miles-credit-retail
 * This functional service supports the creation and follow-up of **credit applications**.    For more information, check the **Read Me** tab.
 *
 * The version of the OpenAPI document: 1.29.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { NotCondition } from './not-condition';
import { NotConditionNot } from './not-condition-not';
import { OperatorContext } from './operator-context';
import { OrCondition } from './or-condition';
import { AndCondition } from './and-condition';


/**
 * @type AndConditionAndInner
 * @export
 */
export type AndConditionAndInner = AndCondition | NotCondition | OrCondition | { [key: string]: OperatorContext; };
