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
import { DynamicAttributeValue } from './dynamic-attribute-value';
import { MultiCurrencyValue } from './multi-currency-value';
import { EnumValue } from './enum-value';
import { Make } from './make';
import { DeliveryCostComponentReference } from './delivery-cost-component-reference';
import { VehicleDiscountConfiguration } from './vehicle-discount-configuration';
import { ExistingCarInformation } from './existing-car-information';
import { DoubleUnitValue } from './double-unit-value';
import { MultiLanguageValue } from './multi-language-value';
import { VehicleExtraDiscountConfiguration } from './vehicle-extra-discount-configuration';
import { Model } from './model';
import { ElectricalVehicleSpecifications } from './electrical-vehicle-specifications';
import { VehicleConfiguration } from './vehicle-configuration';
import { Supplier } from './supplier';


/**
 * The car, it can only return a car or a bike not both
 */
export interface Car { 
    /**
     * The ID of the quote vehicle
     */
    quoteVehicleId?: string;
    description?: MultiLanguageValue;
    /**
     * The catalog car ID
     */
    catalogCarId?: string;
    makeName?: MultiLanguageValue;
    /**
     * The ID of the make of the car, deprecated since 2022-12-19 and version 4.56.0 in favor of make.id
     */
    makeId?: string;
    modelName?: MultiLanguageValue;
    /**
     * The year of the model, deprecated since 2022-12-19 and version 4.56.0 in favor of model.year
     */
    modelYear?: string;
    /**
     * The type of the car
     */
    typeName?: string;
    consumption?: DoubleUnitValue;
    /**
     * The CO2 that the car emits in g/km
     */
    co2Emission?: number;
    /**
     * The power of the car in kw
     */
    kw?: number;
    /**
     * The power of the car in DIN hp
     */
    dinHp?: number;
    /**
     * The engine capacity measured in cubic centimeters
     */
    cc?: number;
    /**
     * The code of the car
     */
    code?: string;
    engineFuelType?: EnumValue;
    orderStrategy?: EnumValue;
    /**
     * The path to the image of the car
     */
    imagesPath?: string;
    /**
     * The maximum number of seating capacity of the car
     */
    maximumSeatingCapacity?: number;
    /**
     * The seating capacity of the car
     */
    seatingCapacity?: number;
    transmission?: EnumValue;
    nature?: EnumValue;
    catalogVatCode?: EnumValue;
    powertrain?: EnumValue;
    tax?: MultiCurrencyValue;
    netPrice?: MultiCurrencyValue;
    netPriceInclVat?: MultiCurrencyValue;
    catalogPrice?: MultiCurrencyValue;
    consumerPrice?: MultiCurrencyValue;
    /**
     * Discount percentage
     */
    discountPercentage?: number;
    discountAmount?: MultiCurrencyValue;
    discountAmountInclVat?: MultiCurrencyValue;
    /**
     * Whether its imposed by the dealer
     */
    isDealerImposed?: boolean;
    /**
     * Deprecated since 2023-05-03 and version 4.81.0 in favor of registrationRegion
     */
    region?: string;
    registrationCode?: EnumValue;
    /**
     * Requested date when the delivery should happen
     */
    requestedDeliveryDate?: string;
    /**
     * The requested delivery location
     */
    requestedDeliveryLocation?: string;
    /**
     * Acceleration for 0 to 100 km/h or from 0 to 60mp/h
     */
    acceleration?: number;
    /**
     * Fiscal power is used for taxation
     */
    fiscalPower?: number;
    /**
     * The height of the car in mm
     */
    height?: number;
    /**
     * The length of the car in mm
     */
    length?: number;
    /**
     * The width of the car in mm
     */
    width?: number;
    netWeight?: DoubleUnitValue;
    /**
     * (NOx) emissions is the nitrogen oxides that a car emits in mg/km 
     */
    noxEmission?: number;
    /**
     * Number of cylinders the car has
     */
    numberOfCylinders?: number;
    /**
     * The content of the tank
     */
    tankContents?: number;
    /**
     * The torque of the car in Nm
     */
    torque?: number;
    /**
     * The with of the wheelbase in mm
     */
    wheelbase?: number;
    /**
     * The specification of the tire
     */
    tireSpecification?: string;
    maxWeight?: DoubleUnitValue;
    maxLoad?: DoubleUnitValue;
    trailerLoadBraked?: DoubleUnitValue;
    trailerLoadUnbraked?: DoubleUnitValue;
    bodyStyle?: EnumValue;
    energyLabel?: EnumValue;
    emissionNorm?: EnumValue;
    drive?: EnumValue;
    numberOfDoors?: EnumValue;
    configurationOrigin?: EnumValue;
    /**
     * The configuration date of the vehicle
     */
    configurationDate?: string;
    /**
     * The date when the configuration changed for the last time
     */
    configurationChangedDate?: string;
    /**
     * The date when the configuration has been validated for the last time
     */
    validationDate?: string;
    totalOptionPrice?: MultiCurrencyValue;
    existingCarInformation?: ExistingCarInformation;
    /**
     * A list of options for the vehicle
     */
    vehicleConfigurations?: Array<VehicleConfiguration>;
    /**
     * A list of vehicle extra discount configurations
     */
    vehicleExtraDiscountConfigurations?: Array<VehicleExtraDiscountConfiguration>;
    /**
     * A list of vehicle discount configurations
     */
    vehicleDiscountConfigurations?: Array<VehicleDiscountConfiguration>;
    /**
     * The list of delivery cost components of the car
     */
    deliveryCostComponents?: Array<DeliveryCostComponentReference>;
    supplier?: Supplier;
    /**
     * A map of dynamic attributes
     */
    dynamicAttributes?: { [key: string]: DynamicAttributeValue; };
    make?: Make;
    model?: Model;
    electricalVehicleSpecifications?: ElectricalVehicleSpecifications;
    registrationRegion?: MultiLanguageValue;
}
