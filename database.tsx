import SQLite from "react-native-sqlite-storage";
import { resolver } from "../../metro.config";

const db = SQLite.openDatabase(
    {name:"contacts.db" , location:"default"},
    () => console.log("Database Opened"),
    console.error(error)
);

export const initDB = () =>{
    db.transaction(tx =>{
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone TEXT);",
             [],
             () => console.log("Table created");
             console.error(error);
             
             );
             
        ));
    };
export const fetchContacts = async () => {
    return new Promise((resolve,reject) =>{
        db.transaction(tx =>{
            tx.executeSql(
                "SELECT * FROM contacts;",
                [],
                (_, {rows }) => resolve(rows._array),
                error => reject(error)
            );
        });
    });
};
