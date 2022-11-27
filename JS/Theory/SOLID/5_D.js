// Dependency inversion principle

class Fetch {
    request(url) {
    //   return fetch(url).then(r => r.json())
    return Promise.resolve('data from fetch') 
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'dataFromLocalStorage'
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('vk.com')
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }
    clientGet() {
        return this.localStorage.get()
    }
}

class DataBase {
    constructor(client) {
        this.client = client
    }

    getData() {
        return this.client.clientGet(key)
    }
}

// const db = new DataBase(new FetchClient())
const db = new DataBase(new LocalStorage())

console.log(db.getData('rand'));