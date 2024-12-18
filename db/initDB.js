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
    // await db.execAsync(`
    //     CREATE TABLE IF NOT EXISTS emergency(
    //         emergency_id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         nameOfService TEXT NOT NULL,
    //         image TEXT NOT NULL,
    //         address TEXT NOT NULL,
    //         hotline TEXT NOT NULL,
    //         typeOfService TEXT NOT NULL
    //     )   
    // `)
    // console.log("table emergency created")
    // await db.execAsync(`
    //     CREATE TABLE IF NOT EXISTS saveEmergency(
    //         save_id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         nameOfService TEXT NOT NULL,
    //         image TEXT NOT NULL,
    //         address TEXT NOT NULL,
    //         hotline TEXT NOT NULL,
    //         user_id INTEGER NOT NULL,
    //         typeOfService TEXT NOT NULL,
    //         FOREIGN KEY(user_id) REFERENCES users(user_id)
    //     )   
    // `)
    // console.log("table saveEmergency created")
    return true
  }catch(error){
    console.log(error)
    return false
  }
}

export default initDB
