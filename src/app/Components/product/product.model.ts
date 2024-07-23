import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface Product {
  brandName: string | null;
  name: string | null;
  categoryId: string | null;
  sellingPrice: number | null;
  actualPrice: number | null;
  discount: number | null;
  productDescription: string | null;
  images: (string|null)[];
}

export type ProductForm = FormGroup<{
  brandName: FormControl<string | null>;
  name: FormControl<string | null>;
  categoryId: FormControl<string | null>;
  sellingPrice: FormControl<number | null>;
  actualPrice: FormControl<number | null>;
  discount: FormControl<number | null>;
  productDescription: FormControl<string | null>;
  images: FormArray<FormControl<string | null>>;
}>;

// export interface ProductForm {
//   brandName: FormControl<string | null>;
//   name: FormControl<string | null>;
//   categoryId: FormControl<string | null>;
//   sellingPrice: FormControl<number | null>;
//   actualPrice: FormControl<number | null>;
//   discount: FormControl<number | null>;
//   productDescription: FormControl<string | null>;
//   images: FormArray<FormControl<string | null>>;
// };


export type CategoryForm = FormGroup<{
  formDescription: FormControl<string| null>
  createdAt: FormControl<Date| null>
}>;