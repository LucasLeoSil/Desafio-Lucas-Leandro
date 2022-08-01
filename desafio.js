
class Book{
    constructor(author, description, title, id){
        this._author = author
        this._description = description
        this._title = title
        this._id = id
    }
    get id(){
        return this._id
    }
}
class Library{
    constructor(){
        this._Book = []
    }
    get Books(){
        return this._Book
    }
    addBooks(author, description, title, id) {
        let livro = new Book(author, description, title, id)
        this._Book.push(livro)
    }
    getBookById(id){
        var final = ''
        let lista = this._Book
        for(let index = 0; index < lista.length; index++){
            if(lista[index].id === id){
                var final = lista[index]
            }
        }
        console.log(final)
    }
    removeBookById(id){
        var final = ''
        let lista = this._Book
        for(let index = 0; index < lista.length; index++){
            if(lista[index].id === id){
                var final = index
            }
        }
        this._Book.splice(final,1)
    }
    uptadeBookById(id, newauthor, newdescription, newtitle, newid){
        var final = ''
        let lista = this._Book
        for(let index = 0; index < lista.length; index++){
            if(lista[index].id === id){
                var final = index
            }
        }
        this._Book[final] = new Book(newauthor, newdescription, newtitle, newid)

    }
}

let livraria = new Library()
livraria.addBooks('Lucas','Aventura', 'Ventos de Fogo', 123)
livraria.addBooks('Amanda','Fantasia', 'Coração de Fogo', 456)
livraria.addBooks('Laila','Ação', 'Espada de Fogo', 789)


console.log(livraria.Books)
