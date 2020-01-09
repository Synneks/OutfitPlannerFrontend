import { Injectable } from "@angular/core";
import { CategoryService } from "./category.service";
import { TypeService } from "./type.service";
import { ColorService } from "./color.service";
import { Category } from "../interfaces/Category";
import { Type } from "../interfaces/Type";
import { Color } from "../interfaces/Color";

@Injectable({
  providedIn: "root"
})
export class UtilityService {
  categories: Category[];
  types: Type[];
  colors: Color[];

  constructor(
    public categoryService: CategoryService,
    public typeService: TypeService,
    public colorService: ColorService
  ) {}
}
