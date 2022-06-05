import structureTypes from 'constants/structureTypes';

export type StructureValue = (number | null)[];
export type StructureType = keyof typeof structureTypes;

export type Structure = {
  type: StructureType,
  value: StructureValue,
};
