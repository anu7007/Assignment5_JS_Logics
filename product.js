const arrProduct = []; //array of products
//   add product function
function addProduct() {
    var id = document.getElementById("pid").value;
    var name = document.getElementById("pname").value;
    var price = document.getElementById("price").value;

    // validator for numeric input
    if (isNaN(price)) {
        document.getElementById('error').style.display = "block";
        document.getElementById('error').innerHTML = '*Enter numeric value in price.'
        return;
    }
    if (arrProduct.find((x) => x.id == id)) {
        document.getElementById("error").style.display = "block";
        document.getElementById("pid").style.borderColor = "red";
        document.getElementById("error").innerHTML =
            "*id already exist please provide unique id.";
        return;
    }

    // validator for empty fields
    if (id && name && price) {
        document.getElementById('error').style.display = "none";
        arrProduct.push({ id: id, name: name, price: price });
        addElement(arrProduct);
    } else {

        document.getElementById('error').style.display = "block";
        document.getElementById('error').innerHTML = '*Please fill all the details.'
    }
}
//edit products
function editProducts(pid){
     document.getElementById("updateBtn").style.display = "block";
     document.getElementById("updateBtn").style.fontSize = "20px";  
     document.getElementById("addBtn").style.display = "none";  
     var id = document.getElementById("pid").value;
     var name = document.getElementById("pname").value;
     var price = document.getElementById("price").value;

}
//   add element function to add element in table
function addElement(arr) {
    var table =
        "<table> <tr><th>Product Id</th><th>Product Name</th><th>Price</th></tr> ";
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        table +=
            "<tr><td>" +
            arr[i].id +
            "</td><td>" +
            arr[i].name +
            "</td><td>" +
            `Rs. ${arr[i].price}` +
            "</td><td><a href='#' onclick='edit(this.id)' id=" +
            arr[i].id +
            "  />EDIT</a> </td> <td> </td></tr>";
            
    }
    document.getElementById("product").innerHTML = table + "</table>";
    clearInput();;
}
function edit(id) {
    document.getElementById("updateBtn").style.display = "block";
    document.getElementById("addBtn").style.display = "none";

    var index = arrProduct.findIndex((x) => x.id == id);
    document.getElementById("pid").value = arrProduct[index].id;
    document.getElementById("pid").disabled = true;

    document.getElementById("pname").value = arrProduct[index].name;
    document.getElementById("price").value = arrProduct[index].price;
}

// function to update product
function updateProduct() {
    id = document.getElementById("pid").value;
    pname = document.getElementById("pname").value;
    price = document.getElementById("price").value;
    var index = arrProduct.findIndex((x) => x.id == id);
    arrProduct[index].name = pname;
    arrProduct[index].price = price;
    display(arrProduct);
    // clearInput();

    document.getElementById("pid").disabled = false;
    document.getElementById("updateBtn").style.display = "none";
    document.getElementById("addBtn").style.display = "block";
}

// // function to clear input
// function clearInput() {
//     document.getElementById("pid").value = "";
//     document.getElementById("pname").value = "";
//     document.getElementById("price").value = "";
// }
function display(arr) {
    var table =
        "<table> <tr><th>Product Id</th><th>Product Name</th><th>Price</th></tr> ";
    for (let i = 0; i < arr.length; i++) {
        table +=
            "<tr><td>" +
            arr[i].id +
            "</td><td>" +
            arr[i].name +
            "</td><td>" +
            `USD ${arr[i].price}` +
            "</td><td><a href='#' class='editbtn' onClick='edit(this.id)' id=" +
            arr[i].id +
            "  />EDIT</a> </td> <td> </td></tr>";
    }

    // displaying the whole array
    document.getElementById("product").innerHTML = table + "</table>";
}