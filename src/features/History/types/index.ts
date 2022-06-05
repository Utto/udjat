import { Structure } from 'types/structure';

export type HistoryItem = Structure & {
  value: string,
  createdDate: string,
};
