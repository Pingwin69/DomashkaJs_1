
// Разработка приложения “Книги”.
// 1. Объявить класс под названием “Book”
// 2. Класс “Book”. У каждой новой книги есть “название”, “автор”,”Издательство” “год
// издательства”, “количество экземпляров”, “id”, “количество страниц”. Есть метод который
// выводит количество страниц книги.
// 3. Класс “Journal”. Надо учесть, что максимальное количество страниц должно быть не более
// 32, есть поля: “Издательство”, “Год выпуска”, “Номер выпуска”, “id”, “количество страниц”.
// Есть метод который выводит данные о количестве страниц и год издательства.
// 4. Внешний интерфейс пока что не реализуем, описываем просто классы.


// this.getName = function(){

//     return this.name;




function Book(name, autor, publishingHouse, year, number, id, pages){
    this.name = name;
    this.autor = autor;
    this.publishingHouse = publishingHouse;
    this.year = year;
    this.number = number;
    this.id = id;
    this.pages = pages;
}

this.getPages = function(pages){
    return this.pages;
}

function Journal(publishingHouse, year, issueNumber, id, pages){
    this.publishingHouse = publishingHouse;
    this.year = year;
    this.issueNumber = issueNumber;
    this.id = id;
    if(pages >= 0 || pages <= 32){
    this.pages = pages;
    }
}


this.getPages = function(pages){
    return this.pages;
}
this.getYear = function(year){
    return this.year;
}