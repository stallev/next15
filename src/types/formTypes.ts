export interface IFormInput {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  userMessage: string;
}

export interface eventSubscriptionInputDataType {
  email: string
}

export const ContactFormsEndpointsTypes = {
  getInTouch: 'getInTouch',
  sendParticipationInfo: 'sendParticipationInfo',
  prayerRequest: 'prayerRequest',
} as const;

export type ContactFormType = keyof typeof ContactFormsEndpointsTypes;

export interface ContactFormInputDataType {
  firstName: string
  userMessage: string
  contactWilling?: string
  phone: string
  email: string
}

export interface ContactFormActionInputTypes {
  data: ContactFormInputDataType
  contactType: ContactFormType
}
