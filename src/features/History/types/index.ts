import structureTypes from 'constants/structureTypes';

export type HistoryItem = {
  type: keyof typeof structureTypes,
  structure: string,
  createdDate: string,
};
