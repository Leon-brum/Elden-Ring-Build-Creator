import { Identifiable } from "..";

export default interface User extends Identifiable {
  id: number,
  name: string,
  email: string,
  password: string,
  role: string,
}