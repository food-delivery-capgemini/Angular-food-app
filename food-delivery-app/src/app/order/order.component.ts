import { Component } from '@angular/core';
import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../customer/user';

@Component({
    templateUrl: "./order.component.html",
    styleUrls: ["./order.component.css"]
})
export class OrderComponent {

    user: Users;
    restaurants: Restaurant[];
    constructor(
        private restaurantService: RestaurantService,
        private route: ActivatedRoute) { }




    ngOnInit() {
        // sessionStorage.setItem('user', JSON.stringify(this.user));

        let customer = JSON.parse(sessionStorage.getItem("user"));

    }


    getData() {
        this.restaurantService.findAllRestaurants().subscribe((data) => {
            this.restaurants = data;
            console.log(data);

        })
    }


}
