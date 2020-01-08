import {Restaurant} from "./Restaurant";
import {Location} from "./Location";


export const RESTAURANTS: Restaurant[]= [
  {id: 1, name: "McDonnalds", location:{address: "Wijnhaven 99", locality: "Beurs", city:"Rotterdam", city_id: 1, latitude: "91.9994572000", longitude: "-2.1817796000", zipcode:"AP1", country_id: 1, locality_verbose:"Beur, Rotterdam"},cuisines: "Fast Food", pirce_range: 2, phone_numbers: "0636494702", photos_url: "https://www.zomato.com/west-midlands-england/massala-junction-stoke-on-trent/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"},
  {id: 2, name: "BurgerKing", location:{address: "BeursHaven 22", locality: "Kralingen", city:"Rotterdam", city_id: 2, latitude: "90.9988572010", longitude: "-3.1813396030", zipcode:"AP2", country_id: 2, locality_verbose:"Kralingen, Rotterdam"},cuisines: "Fast Food", pirce_range: 1, phone_numbers: "0643277901", photos_url:"https://www.zomato.com/west-midlands-england/massala-junction-stoke-on-trent?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"},
  {id: 3, name: "ChinaTown", location:{address: "ChinaStreet 45", locality: "Goverwelle", city:"Gouda", city_id: 3, latitude: "96.9918572111", longitude: "-2.1213346031", zipcode:"AP3", country_id: 3, locality_verbose:"Goverwelle, Gouda"},cuisines: "Chinese", pirce_range: 3, phone_numbers: "0669111325", photos_url:"https://www.zomato.com/west-midlands-england/grosvenor-stoke-stoke-on-trent/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop"},
]


