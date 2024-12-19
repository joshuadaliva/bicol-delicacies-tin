
import { Alert, StyleSheet, Text, View } from 'react-native'
import * as SQLite from 'expo-sqlite'

const addDelicaciesRestaurant = async () => {

    const delicaciesData = [
        {   
            "delicacyName": "Bicol Express",
            "image": "https://yummykitchentv.com/wp-content/uploads/2023/02/creamy-bicol-express.jpg",
            "price": "200",
            "location": "Bicol",
            "ingredients": "- Pork belly - Coconut milk -Chili peppers -Shrimp paste -Onion -Garlic",
            "description": "Bicol Express is a spicy Filipino dish made from pork, coconut milk, and chili peppers.",
            "ratings": "5",
        },
        { 
            "delicacyName": "Laing",
            "image": "https://maputingcooking.com/wp-content/uploads/2017/12/laing-real.jpg",
            "price": "100",
            "location": "Pili",
            "ingredients": "- Fish -Chili peppers -Shrimp paste -Onion -Garlic",
            "description": "Laing is a Fisg Filipino dish made from pili",
            "ratings": "5",
        },
        {   
            "delicacyName": "Pinangat",
            "image": "https://i.ytimg.com/vi/-PlgE2ClT0g/maxresdefault.jpg",
            "price": "100",
            "location": "Bula",
            "ingredients": "-Fish -coconut",
            "description": "Pinangat is a spicy Filipino dish",
            "ratings": "4",
        },
        {   
            "delicacyName": "Kinalas",
            "image": "https://legazpifoodblog.wordpress.com/wp-content/uploads/2018/02/kinalas.jpg?w=1400",
            "price": "50",
            "location": "Bula",
            "ingredients": "-Noodles -Sabaw haha",
            "description": "Kinalas is a Soup Filipino Food",
            "ratings": "5",
        },
        {   
            "delicacyName": "Pancit Bato",
            "image": "https://panlasangpinoy.com/wp-content/uploads/2014/05/Pancit-Bato-Soup-Recipe.jpg",
            "price": "50",
            "location": "Naga",
            "ingredients": "-Pancit -Sabaw haha",
            "description": "Pancit Bato is a Soup Filipino Food",
            "ratings": "4.5",
        },
        {   
            "delicacyName": "Ginataang Santol",
            "image": "https://filifoodblog02.wordpress.com/wp-content/uploads/2018/07/1531918107769.png",
            "price": "50",
            "location": "Naga",
            "ingredients": "-Pancit -Sabaw haha",
            "description": "Pancit Bato is a Soup Filipino Food",
            "ratings": "4.7",
        },
    ]

    const restaurantsData = [
        {   
            "restaurant_name": "Red Platter",
            "image": "https://redplatter.ph/restaurant/wp-content/themes/nagacityguide/assets/images/about-red-platter.jpg",
            "location": "Naga",
            "ratings": "5",
        },
        {   
            "restaurant_name": "Geewan",
            "image": "https://cdn.tasteatlas.com//images/restaurants/4cf933ee74704630a6e582ea29ecf716.jpg?mw=560",
            "location": "Bula",
            "ratings": "4.5",
        },
        {   
            "restaurant_name": "Biggs Diner",
            "image": "https://farm9.staticflickr.com/8235/8508714903_341544fb68.jpg",
            "location": "Nabua",
            "ratings": "4.1",
        },
        {   
            "restaurant_name": "Green Earth Cafe",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3V2jsJMr_aY8t6jNysE-UXy3btDeBuT1Aaw&s",
            "location": "Pili",
            "ratings": "5",
        },
    ]

    try{
        const db = await SQLite.openDatabaseAsync("bicol_delicacies")
        const isServiceExist = await db.getFirstAsync("SELECT * FROM delicacies WHERE delicacyName = ?", ["Bicol Express"])
        if(isServiceExist){
            console.log("delicacy added not long ago")
            return false
        }
        for (const delicacy of delicaciesData) {
            await db.runAsync(
                "INSERT INTO delicacies(delicacyName,image,price,location, ingredients, description,ratings) VALUES (?,?, ?, ?, ?,?,?)", 
                [delicacy.delicacyName, delicacy.image, delicacy.price, delicacy.location,delicacy.ingredients,delicacy.description,delicacy.ratings]
            );
        }
        console.log("delicacy added successfully")



        const isRestaurantExists = await db.getFirstAsync("SELECT * FROM restaurants WHERE restaurant_name = ?", ["Red Platter"])
        if(isRestaurantExists){
            console.log("restaurant added not long ago")
            return false
        }
        for (const restaurants of restaurantsData) {
            await db.runAsync(
                "INSERT INTO restaurants(restaurant_name,image,location,ratings) VALUES (?, ?,?,?)", 
                [restaurants.restaurant_name, restaurants.image,restaurants.location,restaurants.ratings]
            );
        }
        console.log("restaurant added successfully")
        return true;
    }catch(error){
        console.log(error.message)
    }
}

export default addDelicaciesRestaurant

const styles = StyleSheet.create({})