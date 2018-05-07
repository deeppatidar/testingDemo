export interface CrewMember {
  id: number;
  firstName: string;
  lastName: string;
  seat: CrewSeat;
  fleet: string;
  aircraftID: number;
  onDuty: Date;
  offDuty: Date;
  restDuration?: number;
  name: string;
}

export type CrewSeat = 'captain' | 'firstOfficer' | 'flightAttendant'

