import { Type } from "./Type";
import { Color } from "./Color";
import { Category } from "./Category";

export interface Clothing {
  id: number;
  picture: string;
  type: Type;
  categories: Category[];
  colors: Color[];
}
