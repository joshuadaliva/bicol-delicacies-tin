
import { Alert, StyleSheet, Text, View } from 'react-native'
import * as SQLite from 'expo-sqlite'

const insertServices = async () => {
 
    const emergencyServiceData = [
        {   
            "nameOfService": "BMC NAGA CITY",
            "image": "https://example.com/images/hospital1.jpg",
            "address": "123 Health St, Cityville, ST 12345",
            "hotline": "555-1234",
            "typeOfService": "hospital"
        },
        {
            "nameOfService": "HOSPITAL NABUA",
            "image": "https://example.com/images/hospital2.jpg",
            "address": "456 Wellness Ave, Cityville, ST 12345",
            "hotline": "555-5678",
            "typeOfService": "hospital"
        },
        {
            "nameOfService": "HOSPITAL IRIGA CITY",
            "image": "https://example.com/images/hospital3.jpg",
            "address": "789 Care Blvd, Cityville, ST 12345",
            "hotline": "555-9101",
            "typeOfService": "hospital"
        },
        {
            "nameOfService": "HOSPITAL 242",
            "image": "https://example.com/images/hospital4.jpg",
            "address": "321 Healing Rd, Cityville, ST 12345",
            "hotline": "555-1122",
            "typeOfService": "hospital"
        },
        {
            "nameOfService": "HOSPITAL 3124324",
            "nameOfService": "HOSPITAL e1231",
            "nameOfService": "HOSPITAL 12342",
            "image": "https://example.com/images/hospital5.jpg",
            "address": "654 Recovery Ln, Cityville, ST 12345",
            "hotline": "555-3344",
            "typeOfService": "hospital"
        },
        {
            "nameOfService": "FIRE STATION IRIGA CITY",
            "image": "https://example.com/images/firestation1.jpg",
            "address": "111 Firehouse Rd, Cityville, ST 12345",
            "hotline": "555-2233",
            "typeOfService": "firestation"
        },
        {
            "nameOfService": "FIRE STATION BULA",
            "image": "https://example.com/images/firestation2.jpg",
            "address": "222 Blaze St, Cityville, ST 12345",
            "hotline": "555-4455",
            "typeOfService": "firestation"
        },
        {
            "nameOfService": "FIRE STATION Pili",
            "image": "https://example.com/images/firestation3.jpg",
            "address": "333 Flame Ave, Cityville, ST 12345",
            "hotline": "555-6677",
            "typeOfService": "firestation"
        },
        {
            "nameOfService": "FIRE STATION ALBAY",
            "image": "https://example.com/images/firestation4.jpg",
            "address": "444 Smoke Blvd, Cityville, ST 12345",
            "hotline": "555-8899",
            "typeOfService": "firestation"
        },
        {
            "nameOfService": "FIRE STATION NABUA CITY",
            "image": "https://example.com/images/firestation5.jpg",
            "address": "555 Rescue Rd, Cityville, ST 12345",
            "hotline": "555-0000",
            "typeOfService": "firestation"
        },
        {
            "nameOfService": "POLICE STATION IRIGA CITY",
            "image": "https://example.com/images/policestation1.jpg",
            "address": "101 Justice St, Cityville, ST 12345",
            "hotline": "555-1212",
            "typeOfService": "police"
        },
        {
            "nameOfService": "POLICE STATION NABUA",
            "image": "https://example.com/images/policestation2.jpg",
            "address": "202 Law Ave, Cityville, ST 12345",
            "hotline": "555-3434",
            "typeOfService": "police"
        },
        {
            "nameOfService": "POLICE STATION IRIGA",
            "image": "https://example.com/images/policestation3.jpg",
            "address": "303 Order Blvd, Cityville, ST 12345",
            "hotline": "555-5656",
            "typeOfService": "police"
        },
        {
            "nameOfService": "POLICE STATION ALBAY",
            "image": "https://example.com/images/policestation4.jpg",
            "address": "404 Safety Rd, Cityville, ST 12345",
            "hotline": "555-7878",
            "typeOfService": "police"
        },
        {
            "nameOfService": "POLICE STATION SORSOGON",
            "image": "https://example.com/images/policestation5.jpg",
            "address": "505 Security Ln, Cityville, ST 12345",
            "hotline": "555-9090",
            "typeOfService": "police"
        }
    ]

    try{
        const db = await SQLite.openDatabaseAsync("emergencyFinder")
        const isServiceExist = await db.getFirstAsync("SELECT * FROM emergency WHERE nameOfService = ?", ["BMC NAGA CITY"])
        if(isServiceExist){
            console.log("already added")
            return false
        }
        for (const service of emergencyServiceData) {
            await db.runAsync(
                "INSERT INTO emergency(image,address,hotline,typeOfService, nameOfService) VALUES (?, ?, ?, ?,?)", 
                [service.image, service.address, service.hotline, service.typeOfService,service.nameOfService]
            );
        }
        console.log("posted successfully")
        return true;
    }catch(error){
        console.log(error.message)
    }
}

export default insertServices

const styles = StyleSheet.create({})