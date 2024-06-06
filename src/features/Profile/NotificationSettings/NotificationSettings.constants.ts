import { InputType, SwitchEnum } from '@/config/enums';
import { InputConfig } from '@/types/interfaces';

export const settings: InputConfig[] = [
  {
    label: 'notification.item_update',
    defaultValue: SwitchEnum.on,
    inputType: InputType.SWITCH,
    fieldName: 'item_update',
  },
  {
    label: 'notification.item_comment',
    defaultValue: SwitchEnum.off,
    inputType: InputType.SWITCH,
    fieldName: 'item_comment',
  },
  {
    label: 'notification.buyer_review',
    defaultValue: SwitchEnum.on,
    inputType: InputType.SWITCH,
    fieldName: 'buyer_review',
  },
  {
    label: 'notification.rating_reminders',
    defaultValue: SwitchEnum.off,
    inputType: InputType.SWITCH,
    fieldName: 'rating_reminders',
  },
  {
    label: 'notification.meet_ups_near_you',
    defaultValue: SwitchEnum.off,
    inputType: InputType.SWITCH,
    fieldName: 'meet_ups_near_you',
  },
  {
    label: 'notification.company_news',
    defaultValue: SwitchEnum.on,
    inputType: InputType.SWITCH,
    fieldName: 'company_news',
  },
  {
    label: 'notification.new_launches_and_projects',
    defaultValue: SwitchEnum.on,
    inputType: InputType.SWITCH,
    fieldName: 'new_launches_and_projects',
  },
  {
    label: 'notification.monthly_product_changes',
    defaultValue: SwitchEnum.off,
    inputType: InputType.SWITCH,
    fieldName: 'monthly_product_changes',
  },
  {
    label: 'notification.subscribe_to_newsletter',
    defaultValue: SwitchEnum.off,
    inputType: InputType.SWITCH,
    fieldName: 'subscribe_to_newsletter',
  },
  {
    label: 'notification.email_when_someone_follows_me',
    defaultValue: SwitchEnum.on,
    inputType: InputType.SWITCH,
    fieldName: 'email_when_someone_follows_me',
  },
];
