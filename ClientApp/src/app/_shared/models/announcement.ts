import * as moment from 'moment';

export interface Announcement {
  message: string;
  timestamp: moment.Moment;
  timeString: string;
  isNew: boolean;
  type: AnnouncementType;
}

export type AnnouncementType = 'default' | 'error' | 'info';
