let addBtn = document.querySelector("#addBtn");
let formBody = document.querySelector(".formBody");
let submitBtn = document.querySelector("#submitBtn");
let bookName = document.querySelector("#bookName");
let authorName = document.querySelector("#authorName");
let pageNo = document.querySelector("#pageNo");
let result = document.querySelector(".resultDiv");
let readBox = document.querySelector("#readBox");


let myLibrary = [];

function book(data1, data2, data3, data4){
    this.data1=data1;
    this.data2=data2;
    this.data3 = data3;
    this.data4 =data4;
}
function showForm(e){
    // alert();
    formBody.style.display = "block";
    
}

function showBook(){
    result.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add("resultDIV")
        let book = myLibrary[i];
        // alert(book)
        bookDiv.innerHTML = `<p>Book ${i+1}</p>
                                <p>Book Name: ${book.data1}</p>
                                <p>Author Name: ${book.data2}</p>
                                <p>Page No: ${book.data3}</p>
                                <p>Book Read: ${book.data4}</p>`;
        result.append(bookDiv);
    }
}

function addToResult(){
    event.preventDefault();
    // alert();
    let data1 = bookName.value;
    let data2 = authorName.value;
    let data3 = pageNo.value;
    let data4 = readBox.checked;

    // alert(data1);
    let newBook = new book(data1, data2, data3, data4);
    // console.log(newBook);

    myLibrary.push(newBook);

    showBook();
}


addBtn.addEventListener("click", showForm);
submitBtn.addEventListener("click", addToResult);
