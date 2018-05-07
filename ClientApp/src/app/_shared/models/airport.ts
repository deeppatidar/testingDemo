export class AirportBase {

    id: number;
    name: string;
    icao: string
    iata: string;
    state: string;
    country: string;
    cityID: number;
    latitude: number;
    longitude: number;
    dayOnly: boolean;
    utcOffset: number;
    isActive: boolean;
    elevation: number;
    hasDaylightSavings: boolean
    
}

export class AirportCore extends AirportBase {
    constructor() {
        super();
    }


    comment: string;
    Image: string;
    TimezoneInfo: string;
    longestRunwayLengthFeet: number;
    runwayWidthFeet: number;
    surfaceTypeID: number;
    standardTimezoneID: number;
    daylightSavingTimeFlag: boolean;
    daylightSavingTimeTimezoneID: number;
    daylightSavingTimeOffset: number;
    IsDeleted: boolean
    createdByAuthenticationID: number;
    modifiedByAuthenticationID: number;
    airportAddresses: AirportAddress[];
    airportPhones: AirportPhone[];
    city: CityCore;
    fbOs: FBO[];
}

class AirportAddress {
    id: number;
    airportID: number;
    addressID: number;
    isPrimaryFlag: boolean;
    comment: string;
    isActive: boolean;
    isDeletedFlag: boolean;
    createdByAuthenticationID: number;
    modifiedByAuthenticationID: number;

}
class AirportPhone {
    id: number;
    airportID: number;
    phoneID: number;
    isPrimaryFlag: boolean;
    comment: string;
    isActive: boolean;
    isDeletedFlag: boolean;
    createdByAuthenticationID: number;
    modifiedByAuthenticationID: number;
}
class AirportCamp extends AirportBase {
    constructor() {
        super();
    }
    city: CityCamp;
    cityName: string;
    stateprovince: string;
    latValue: number;
    lonValue: number;
    latDirection: string;
    latDegree: number;
    latMinutes: number;
    latSeconds: number;
    latSecHundredths: number;
    lonDirection: string;
    lonDegree: number;
    lonMinutes: number;
    lonSeconds: number;
    lonSecHundredths: number;
    longestRunway: number;
    runwayWidth: number;
    surfacetypeLookupId: string;
    airHeliport: string;
    military: string;
    runwayCondition: string;
    landingFee: string;
    landingFeeAmt: number;
    scaarsa: string;
    windShear: string;
    beaconLight: string;
    ifrIndicator: string;
    vhfNavAid: string;
    fuelUnspecified: string;
    fuel73Octane: string;
    fuel8087Octane: string;
    fuel100llOctane: string;
    fuel100130Octane: string;
    fuel115145Octane: string;
    fuelMogas: string;
    fuelJet: string;
    fuelJetA: string;
    fuelJetA1: string;
    fuelJetAplus: string;
    fuelJetB: string;
    fuelJet4: string;
    fuelJet5: string;
    oxyUnspecified: string;
    oxyHighPressure: string;
    oxyHighPressureBottle: string;
    oxyLowPressure: string;
    oxyLowPressureBottle: string;
    repairMinorAirframe: string;
    repairMinorEngine: string;
    repairMajorAirframe: string;
    repairMajorEngine: string;
    jetStartUnit: string;
    customs: string;
    immigration: string;
    daylightChange: string;
    daylightFrom: Date;
    daylightTo: Date;
    curfew: string;
    curfewFrom: Date;
    curfewTo: Date;
    jetBan: string;
    jetBanFrom: Date;
    jetBanTo: Date;
    aro: string;
    aroFrom: Date;
    aroTo: Date;
    taxiType: string;
    altTaxiTypical: number;
    altTaxiMorning: number;
    altTaxiPeak: number;
    adjustTaxi: number;
    typicalIn: number;
    typicalOut: number;
    peakIn: number;
    peakOut: number;
    peakInStart1: Date;
    peakInEnd1: Date;
    peakInStart2: Date;
    peakInEnd2: Date;
    peakOutStart1: Date;
    peakOutEnd1: Date;
    peakOutStart2: Date;
    peakOutEnd2: Date;
    opr: string;
    fss: string;
    sita: string;
    airinc: string;
    aftn: string;
    aanager: string;
    fssTel: string;
    opsTel: string;
    twrTel: string;
    telex: string;
    remFlags: string;
    modLocationDate: Date;
    contactsDate: Date;
    curfewDate: Date;
    daylightDate: Date;
    headerDate: Date;
    landingFeeDate: Date;
    fuelTypesDate: Date;
    oxyRepaidsDate: Date;
    attendedtime: string;
    lightedtime: string;
    activateLights: string;
    lightsFrequency: number;
    mailingAddr1: string;
    mailingAddr2: string;
    mailingCity: string;
    mailingState: string;
    mailingZip: string;
    mailingCountry: string;
    email: string;
    website: string;
    number: string;
    fax: string;
    payment: string;
    psa: string;
    international: string;
    pointOfEntry: string;
    timezonename: string;
    variation: string;
    tower: string;
    ctaf: string;
    modifiedByUserId: string;
    modifiedDate: Date;
    status: string;
    p135Trips: number;
    bestFuelIndex: ByteString;
    isOutsidePsa: string;
    airportTimeZoneID: number;
    stateID: number;
    countryID: number;
    maxUseableLength: number;
    timeZoneAbbreviation: string;
    timeZoneAbbreviationDST: string;

}
export class FBO {

    id: number;
    name: string;
    comment: string;
    isActive: boolean;
    isDeleted: boolean;
}
export class City {

    id: number;
    name: string;
    stateprovince: StateProvince;
    country: Country;



}
export class CityCore extends City {
    constructor() {
        super();
    }

    comment: string;
    isDeleted: boolean;
    country: CountryCore;
    state: StateCore;

}

export class CityCamp extends City {
    constructor() {
        super();
    }
    isActive: boolean;
    timestamp: ByteString;
    latitude: number;
    latNS: string;
    latDegrees: number;
    latMinutes: number;
    longitude: number;
    longEW: string;
    longDegrees: number;
    longMinutes: number;
    lastUpdateDate: Date;
    lastUpdateUser: string;
    country: CountryCamp;
    state: StateCamp;
}
export class StateProvince {

    id: number;
    name: string;

}
export class Country {

    id: number;
    name: string;
    countryCode2: string;

}

export class CountryCore extends Country {
    constructor() {
        super();
    }
    isDeletedFlag: boolean;
    comment: string;
    countryCode3: string;
    createdByAuthenticationID: number;
    modifiedByAuthenticationID: number;

} export class CountryCamp extends Country {
    constructor() {
        super();
    }
    isActive: boolean;
    timestamp: ByteString;
    countryCode: string;
    airportPermitRequiredFlag: boolean;
    permitLeadTime: number;
    cQImportAltID: number;
    lastUpdateDate: Date;
    sRGUSCountryID: number;


}

export class State {

    id: number;
    stateName: string;
    stateCode: string;
    countryId: number;

}

export class StateCore extends Country {
    constructor() {
        super();
    }
    isDeletedFlag: boolean;
    comment: string;
    createdByAuthenticationID: number;
    modifiedByAuthenticationID: number;

} export class StateCamp extends Country {
    constructor() {
        super();
    }
    isActive: boolean;
    timestamp: ByteString;
    lastUpdateDate: Date;
    fuelRegionID: number;


}