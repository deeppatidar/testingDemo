export interface Country {
  countryID: number,
  name: string,
  countryCode2: string,
  countryCode3: string,
  isDeletedFlag: boolean,
  cities: City[],
  stateProvinces: StateProvince[]
  createdByAuthenticationID?: number,
  createdDateUTC: Date,
  modifiedByAuthenticationID?: number,
  modifiedDateUTC?: Date
}

export interface StateProvince {
  stateProvinceID: number,
  name: string,
  stateProvinceCode: string,
  countryID: number,
  isDeletedFlag: boolean,
  cities: City[],
  createdByAuthenticationID?: number,
  createdDateUTC: Date,
  modifiedByAuthenticationID?: number,
  modifiedDateUTC?: Date
}

export interface City {
  cityID: number,
  name: string,
  stateProvinceID: number,
  isDeletedFlag: boolean,
  createdByAuthenticationID?: number,
  createdDateUTC: Date,
  modifiedByAuthenticationID?: number,
  modifiedDateUTC?: Date
}

