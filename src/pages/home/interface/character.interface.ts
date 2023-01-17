export interface TypeCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: any[];
  url: string;
  created: Date;
}

export interface Location {
  name: string;
  url: string;
}
