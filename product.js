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
            "</td></tr>";
    }
    document.getElementById("product").innerHTML = table + "</table>";
}