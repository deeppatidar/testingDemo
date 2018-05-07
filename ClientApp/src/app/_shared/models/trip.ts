import { AirportBase } from '../models/airport';
import { Aircraft, AircraftType } from '../models/aircraft';
import { CrewMember } from '../models/crew-member';
import { Passenger } from '../models/passenger';

export class TripBase {
  id: number;
  tripNumber: number;
  isCancelled: boolean;
  isTest: boolean;
  isDeleted: boolean;
  isActive: boolean;
  canceledFlag: boolean;
  tripLegs: TripLegCore[];
}
export class TripCamp extends TripBase {
  numLegs: number;
  contactId: string;
  authorizerContactId: number;
  approverContactId: number;
  tripcategoryId: number;
  firstTriplegId: number;
  version: number;
  xxRemarks: string;
  travelSenseExported: number;
  modifiedByUserId: string;
  modifiedDate: string;
  status: number;
  remarksModified: string;
  triplegs: TripLegCamp[];
}

export class TripCore extends TripBase {
  //TODO: Kill
}

export class TripLegType {
  id: number;
  description: string;
  abbreviation: string;
  isActive: boolean;
  isDeleted: boolean;
}

export class TripLegBase {
  tripID: number;
  id: number;
  campTripNumber: number;
  tripLegDetails: TripLegDetailsCore[];
  tripLegTypeID: number;
  farPart: string;
  passengerCount: number;
  isOperationalUpgradeDowngrade: boolean;
  isGuaranteedUpgradeDowngrade: boolean;
  isRepositioning: boolean;
  isCancelled: boolean;
  isActive: boolean;
  isDeleted: boolean;
  crew: CrewMember[];
  passengers: Passenger[];

  tripLegType: TripLegType;
}

export class TripLegCamp extends TripLegBase {
  id: number;
  aircraftID: number;
  fromAirportId: number;
  toAirportId: number;
  fromCountryLookupId: number;
  toCountryLookupId: number;
  aircraftId: number;
  authorizerContactId: number;
  approverContactId: number;
  version: number;
  tba: number;
  lowerCase: number;
  citypairId: number;
  timeOutPosted: number;
  timeInPosted: number;
  checklistStatus: number;
  lockType: number;
  modifiedByUserId: string;
  modifiedDate: string;
  status: number;
  ownerId: number;
  bookerId: number;
  passengerCount: number;
  isOperationalUpgradeDowngrade: boolean;
  isGuaranteedUpgradeDowngrade: boolean;
  isRepositioning: boolean;
  isCancelled: boolean;
  isActive: boolean;
  isDeleted: boolean;
}
export class TripLegCore extends TripLegBase {
  
}

export class TripLegDetailsCore {
  id: number;
  typeID: number;
  departureDateLocal: Date;
  departureTaxiTime: number;
  arrivalDateLocal: Date;
  arrivalTaxiTime: number;
  departureDateUTC: Date;
  departureUTCOffset: number;
  arrivalDateUTC: Date;
  arrivalUTCOffset: number;
  departureAirportID: number;
  departureFBOID: number;
  departureFBOIsPreferredFlag: boolean;
  arrivalAirportID: number;
  arrivalFBOID: number;
  arrivalFBOISPreferredFlag: boolean;
  aircraftID: number;
  aircraftTypeID: number;
  versionNumber: number;
  comment: string;
  activeFlag: boolean;
  isDeletedFlag: boolean;
  tripLegDetailTypeID: number;

  // virtual fields
  departureAirport: AirportBase;
  arrivalAirport: AirportBase;
  aircraft: Aircraft;
  aircraftType: AircraftType;
  tripLegDetailType: string;
}
