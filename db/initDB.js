import * as SQLite from 'expo-sqlite'



const initDB = async () => {
  try{
    const db = await SQLite.openDatabaseAsync("bicol_delicacies")
    console.log("database created")
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS users(
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )   
    `)
    console.log("users table created")
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS delicacies(
            delicacy_id INTEGER PRIMARY KEY AUTOINCREMENT,
            delicacyName TEXT NOT NULL,
            image TEXT NOT NULL,
            price TEXT NOT NULL,
            location TEXT NOT NULL,
            ingredients TEXT NOT NULL,
            description TEXT NOT NULL,
            ratings TEXT NOT NULL
        
        )   
    `)
    console.log("table delicacies created")
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS restaurants(
            restaurant_id INTEGER PRIMARY KEY AUTOINCREMENT,
            restaurant_name TEXT NOT NULL,
            image TEXT NOT NULL,
            location TEXT NOT NULL,
            ratings TEXT NOT NULL
        )   
    `)
    console.log("table restuarants created")
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS messages(
          message_id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          message TEXT NOT NULL,
          user_id INTEGER NOT NULL,
          FOREIGN KEY(user_id) REFERENCES users(user_id)
      )   
  `)
  console.log("table messages created")
    return true
  }catch(error){
    console.log(error)
    return false
  }
}

export default initDB
