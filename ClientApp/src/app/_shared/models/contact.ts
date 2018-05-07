export interface Contact {
  contactID: number, // Maps to ContactId
  contactTypeID?: number,
  title?: string,
  prefix?: string
  firstName: string
  middleName?: string
  lastName: string
  suffix?: string
  preferredName?: string
  dateOfBirth?: Date,
  businessName?: string,
  isEmployeeFlag: boolean,
  comment?: string
  activeFlag: boolean,
  isDeletedFlag: boolean,
  createdByAuthenticationID?: number,
  createdDateUTC: Date,
  modifiedByAuthenticationID?: number,
  modifiedDateUTC?: Date,

  //virtual properties
  contactType?: string // TODO: update this to ContactType
}

export interface ContactType {
  contactTypeID: number, // Maps to ContactId
  description: string,
  comment?: string,
  activeFlag: boolean,
  isDeletedFlag: boolean,
  createdByAuthenticationID?: number,
  createdDateUTC: Date,
  modifiedByAuthenticationID?: number,
  modifiedDateUTC?: Date
}

export interface ContactAddress {
  contactAddressID: number,
  contactID: number,
  addressID: number,
  cityID: number,
  stateProvinceID: number,
  countryID: number,
  addressTypeID: number,
  line1: string,
  line2: string,
  line3: string,
  city: string,
  stateProvince: string,
  postalCode: string,
  country: string,
  addressType: string,
  isPrimaryFlag: boolean,
  activeFlag: boolean,
  isDeletedFlag: boolean,
  comment?: string, 
  createdDateUTC: Date,
  modifiedDateUTC?: Date,
  createdByAuthenticationID?: number,
  modifiedByAuthenticationID?: number,
}

export interface ContactEmailAddress {
  contactEmailAddressID: number,
  contactID: number,
  emailAddressID: number,
  emailAddress: string,
  emailAddressType: number,
  comment: string,
  isPrimaryFlag: boolean,
  sortOrder: number,
  activeFlag: boolean,
  isDeletedFlag: boolean,
  createdByAuthenticationID?: number,
  createdDateUTC: Date,
  modifiedByAuthenticationID?: number,
  modifiedDateUTC?: Date
}

export interface ContactPhone {
  contactPhoneID: number,
  phoneID: number,
  contactID: number,
  phoneType: string,
  phoneTypeID: number,
  isPrimaryFlag: boolean,
  phoneNumber: string,
  areaCode: string,
  countryCode: number,
  sortOrder: number, // add this 
  comment?: string,
  activeFlag: boolean,
  isDeletedFlag: boolean,
  createdByAuthenticationID?: number,
  createdDateUTC: Date,
  modifiedByAuthenticationID?: number,
  modifiedDateUTC?: Date
}
