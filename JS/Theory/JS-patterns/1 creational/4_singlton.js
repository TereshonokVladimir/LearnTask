class DataBase {
    
    constructor(data){
        if(Database.exists) {
            return DataBase.instance
        }

        DataBase.instance = this
        DataBase.exists = true 
        this.data = data 
    }

    getData(){
        return this.data
    }
}

const mongo = new DataBase('MongoDB')
console.log(mongo.getData());

const mysql = new DataBase('MySQL')
console.log(mysql.getData());