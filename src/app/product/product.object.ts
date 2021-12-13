export interface Product{
    id: number;
    name: string;
    price: number;
   imageUrl: string;
   description: string;
   }
    
   export interface Customer{
    id: number;
    name: string;
   }

   export const PRODUCTS: Product[] = [
    { 
        id: 101, 
        name: 'Nike', 
        price:8,
        description:'On Hand',
        imageUrl: 'assets/image/shoe.jpg',
    },
    { 
        id: 102, 
        name: 'Puma',
        price:30,
        description:'On Hand', 
        imageUrl: 'assets/image/airmax.jpg',
    },
    { 
        id: 103, 
        name: 'Skechers', 
        price:40,
        description:'On Hand',
        imageUrl: 'assets/image/puma.png',
    }
   ];

export const CLOSEPRODUCTS: Product[] = [
    { 
        id: 201, 
        name: 'Jacket', 
        price:8,
        description:'On Hand',
        imageUrl: 'assets/image/jacket.jpg',
    },
    { 
        id: 202, 
        name: 'Hoodie',
        price:30,
        description:'On Hand', 
        imageUrl: 'assets/image/whitehodie.jpg',
    },
    { 
        id: 203, 
        name: 'Hoodie', 
        price:40,
        description:'On Hand',
        imageUrl: 'assets/image/yellow-hoodie.jpg',
    }
   ];
   
   export const CUSTOMER: Customer[] = [
    { 
        id: 101, 
        name: 'Nike', 
    },
   ];