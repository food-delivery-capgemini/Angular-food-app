import { Cart } from '../order/cart';
import { Item } from '../order/item';


export class Orders {


    items: Item[] = [];
    totalAmount: number = 0;
    email: String;

}

// export class Address{
//     addressLine:string;
//     city:string;
// }

// export class Users{
//     name:string;
//     gender:string;
//     password:string;
//     contact:number;
//     email:string;
//     address:Address;
//     date:Date;
// }

export class Feedback {
    rating: number;
    comments: string;
    email: string;
    orderId: number;

}