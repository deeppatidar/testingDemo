export interface Filters {
  startDate?: Date;
  endDate?: Date;
  acTypes: number[];
  includes: string[];
  lastModified?: Date;
  hideACWithoutTrips?: boolean;
}
