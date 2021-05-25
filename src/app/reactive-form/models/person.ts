export interface Person {
  firstName: string;
  lastName: string;
  gender: string;
  address: {
    country: string;
    street: string;
    zip: string;
  },
  frameworks: string[];
}
