import {Clothing} from "./Clothing";

export interface Outfit{
    id:number;
    name: string;
    clothes: Clothing[];
}
