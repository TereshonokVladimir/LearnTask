// Single Responsibility Prinsiple

class News {
    constructor(title, text){
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.Text = text
        this.modified = true
    }

    // toHTML() {
    //     return `
    //     <div class="news">
    //         <h1>${this.title}</h1>
    //         <p>${this.text}</p>
    //     </div>
    //     `
    // }
    // toJSON(){
    //     return JSON.stringify({
    //         this: this.title,
    //         text: this.text,
    //         modified: this.modified
    //     }, null, 2)
    // }
}


class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    html(){
        return `
            <div class="news">
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
            `
    }
    xml() {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
            </news>
        `
    }
    json() {
        return JSON.stringify({
            this: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }
}
// console.log(news.toHTML());
// console.log(news.toJSON());

const printer = new NewsPrinter(
    new News('Person', 'information')
)

// const news = new News('Person', 'information')

console.log(printer.html());
console.log(printer.xml());
console.log(printer.json());
