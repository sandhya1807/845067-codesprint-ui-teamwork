// JavaScript source code
const PRODUCTS_KEY = "Giftcard";

function getProductsFromLocalStorage() {
    let products = [];

    if (localStorage.getItem(PRODUCTS_KEY)) {
        products = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
    }

    return products;

}
function addItemFormSubmit() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    if (a < 0 && b > 100) {
        alert("must be betweem 0 and 100");
        return false;
    }
    var a = document.getElementById("t3").value;
    var b = document.getElementById("t4").value;
    if (!isNaN(a)) {
        alert("Enter Only Characters"); sss
        document.getElementById("t3").focus();
        return false;
    }
    if (!isNaN(b)) {
        alert("Enter Only Characters");
        document.getElementById("t4").focus();
        return false;
    }
    var b = document.getElementById("t5").value;
    if (!isNaN(b)) {
        alert("Enter Only Characters");
        document.getElementById("t5").focus();
        return false;
    }
    var b = document.getElementById("t6").value;

    if (!isNaN(b)) {
        alert("Enter Only Characters");
        document.getElementById("t6").focus();
        return false;
    }

    var b = document.getElementById("t7").value;
    if (b == "") {
        document.getElementById("t7").focus();
    }
    if (!isNaN(b)) {
        alert("Enter Only Characters");
        document.getElementById("t7").focus();
        return false;
    }
    if (document.form.sel.SelectedIndex == 0) {
        alert("Select One");
        document.form.sel.focus();
        return false;
    }
    var a = document.getElementById("t8").value;
    if (a.length < 6) {
        alert("Enter 6 number");
        document.getElementById("t8").focus();
        return false;
    }
    var a = document.getElementById("t9").value;
    var b = document.getElementById("t10").value;
    if (!isNaN(a)) {
        alert("Enter Only Characters");
        document.getElementById("t9").focus();
        return false;
    }
    if (!isNaN(b)) {
        alert("Enter Only Characters");
        document.getElementById("t10").focus();
        return false;
    }
    let products = getProductsFromLocalStorage();

    let itemAmount = document.querySelector("#t1");
    let item = document.querySelector("#t2");
    let Name = itemAmount.value + item.value;
    let itemName = document.querySelector("#t3");
    let itemAddress = document.querySelector("#t5");
    let itemCity = document.querySelector("#t6");
    let p1 = document.querySelector("#p1").value
    let p2 = document.querySelector("#p2").value
    let p3 = document.querySelector("#p3").value
    let p4 = document.querySelector("#p4").value
    let p5 = document.querySelector("#p5").value
    let p6 = document.querySelector("#p6").value
    let p7 = document.querySelector("#p7").value
    let p8 = document.querySelector("#p8").value
    let p9 = document.querySelector("#p9").value
    let p10 = document.querySelector("#p10").value



    let product = {
        Amount: Name,
        name: itemName.value,
        Address: itemAddress.value,
        City: itemCity.value,
        phonenumber: p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10


    };

    products.push(product);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

function loadItems() {
    let products = getProductsFromLocalStorage();

    let tableBody = document.querySelector("#prdData");

    /*    products.forEach(product => {
            let prdRow = createProductRow(product);
            tableBody.append(prdRow);
        }); */

    for (let product of products) {
        let prdRow = createProductRow(product);
        tableBody.append(prdRow);
    }
}
function createProductRow(product) {



    let nameCol = document.createElement("td");
    nameCol.textContent = product.name;

    let priceCol = document.createElement("td");
    priceCol.textContent = product.Address;

    let qtyCol = document.createElement("td");
    qtyCol.textContent = product.City;
    console.log(product.Amount + " " + product.phonenumber);

    let ACol = document.createElement("td");
    ACol.textContent = product.Amount;

    let PhnCol = document.createElement("td");
    PhnCol.textContent = product.phonenumber;

    let prdRow = document.createElement("tr");
    prdRow.append(nameCol);
    prdRow.append(priceCol);
    prdRow.append(qtyCol);
    prdRow.append(ACol);
    prdRow.append(PhnCol);

    return prdRow;
}

function focus() {
    document.getElementById("t1").focus();
}
function movetoNext(current, nextFieldID) {
    if (current.value.length >= current.maxLength) {
        document.getElementById(nextFieldID).focus();
    }

}

