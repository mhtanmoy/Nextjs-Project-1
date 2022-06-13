export interface AllProductListProps {
  allproducts: SingleProductProps[];
}


export interface SingleProductProps {
    id: number;
    name: string;
    SKU:string;
    color:string;
    size:string;
    price: string;
    description: string;
    category: string;
    brand: string;
    file_content: any[];
  }

export interface CategoryProps {
  id: number;
  name: string;
}


  