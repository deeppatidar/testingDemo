export interface FlexNote {
  id: number;
  name: string;
  note: string;
  isCrewNotificationRequired: boolean;
  hasCrewBeenNotified: boolean;
  isOptimizerSwapDutyReset: boolean;
}