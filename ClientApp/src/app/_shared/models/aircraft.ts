export interface Aircraft
{

    id: number;
    baseAirportID: number;
    carrierID: number;
    aircraftTypeID?: number;
    tailNumber: string;
    serialNumber: string;
    insuranceExpiredFlag: boolean;
    comment: string;
    activeFlag: string
    isDeletedFlag: string;
    state: string;
    aircraftType?: AircraftType;
}

export interface AircraftType
{
    id: number;
    aircraftCategoryID: number;
    description: string;
    cruiseSpeed: number;
    range: number;
    comment: string;
    activeFlag: string
    isDeletedFlag: string;

}