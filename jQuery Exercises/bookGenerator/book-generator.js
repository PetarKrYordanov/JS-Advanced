function createBook(selector, bookTitle, authorName, isbn) {


    let id = 1;
    let book = function () {

        let mainContainer = $(selector);
        let bookContainer = $("<div>")
            .attr("id", `book${id++}`)
            .appendTo(mainContainer);
        debugger;
        $("<p>")
            .addClass("title")
            .text(bookTitle)
            .appendTo(bookContainer);
        $("<p>")
            .addClass("author")
            .text(authorName)
            .appendTo(bookContainer);
        $("<p>")
            .addClass("isbn")
            .text(isbn)
            .appendTo(bookContainer);
        $("<button>")
            .text("Select")
            .on("click", selectBook)
            .appendTo(bookContainer);
        $("<button>")
            .text("Deselect")
            .on("click", deselectBook)
            .appendTo(bookContainer);

        function selectBook() {
            bookContainer
                .css("border", "2px solid blue");
        }

        function deselectBook() {
            bookContainer
                .css("border", "");
        }
    }();

    return book;
}