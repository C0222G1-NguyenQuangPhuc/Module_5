export interface Facility {
  idFacility: number,
  nameFacility: string,
  areaUse: number,
  price: number,
  maxPeople: number,
  rentType: string,
  standard?: string,
  description?: string,
  numberOfFloor?: number,
  poolArea?: number,
  free?: string,
  url: string
}
