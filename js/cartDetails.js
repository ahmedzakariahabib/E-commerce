let productsItems=JSON.parse(localStorage.getItem("items"));
let productsId=localStorage.getItem("productsId")
let choosenItem= productsItems.find((item)=>item.id==productsId)
let dProducts=document.querySelector(".home")


function drawDetails(i){
    let x=
        `
        <img src="${i.imageURL}" class="img-fluid" alt="">
        <h5>Product: ${i.Product}</h5>
        <h5>Price: ${i.price} $</h5>
        <h5>Category: ${i.Category}</h5>
        <h5>Quntatit: ${i.qty}<h5>
        `
    
    dProducts.innerHTML=x
}

drawDetails(choosenItem);

