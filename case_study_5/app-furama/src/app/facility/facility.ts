export interface Facility {
  idFacility: number;
  nameFacility: string;
  areaUse: number;
  price: number;
  maxPeople: number;
  rentType: {
    rentTypeId: number;
    rentTypeName?: string;
  };
  standard?: string;
  description?: string;
  numberOfFloor?: number;
  poolArea?: number;
  free?: string;
  url: string;
}
