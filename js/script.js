let allProducts = document.querySelector(".section4");
let items = [
  {
    id: 1,
    imageURL: "images/iPhone-13-Pro-Max_-1.webp",
    Product: "iPhone 13 Pro Max",
    price: "1000 ",
    Category: "Mobile",
    qty: 1,
    liked :false,
  },
  {
    id: 2,
    imageURL: "images/360_F_288756202_mgQYMn8dsKyj5LMJ5jHjf61HhyYDOS30.jpg",
    Product: "earpods",
    price: "100 ",
    Category: "Phone accessorles",
    qty: 1,
    liked :false,
  },
  {
    id: 3,
    imageURL: "images/product-item9.jpg",
    Product: "Smart watch",
    price: "150 ",
    Category: "watches",
    qty: 1,
    liked :false,
  },
  {
    id: 4,
    imageURL: "images/745f4733-4d52-423f-87e0-7a74f777976d.avif",
    Product: "Jacket",
    price: "120 ",
    Category: "Fashion",
    qty: 1,
    liked :false,
  },
  {
    id: 5,
    imageURL: "images/N52995719A_1.avif",
    Product: "Glasses",
    price: "80 ",
    Category: "Men accessories",
    qty: 1,
    liked :false,
  },
  {
    id: 6,
    imageURL: "images/fa94c1fe-a40d-4744-b1e5-4dd382d44958.avif",
    Product: "adidas bottle",
    price: "50 ",
    Category: "Sport",
    qty: 1,
    liked :false,
  },
  {
    id: 7,
    imageURL: "images/5d920fc9-addc-4856-8b9d-d9690d68e6b2.avif",
    Product: "Bag adidas",
    price: "110 ",
    Category: "Bags",
    qty: 1,
    liked :false,
  },
  {
    id: 8,
    imageURL: "images/19ef1b11-b39c-4d0c-9d02-0fa118ea15f5.avif",
    Product: "Shoes adidas",
    price: "80 ",
    Category: "sport",
    qty: 1,
    liked :false,
  },
  {
    id: 9,
    imageURL: "images/ad1583cf-42f2-4903-91a0-49b745ef16de.avif",
    Product: "Bag",
    price: "100 ",
    Category: "Feshion",
    qty: 1,
    liked :false,
  },
];




function drawItem(items){
  let y = items.map((ele) => {
    return `<div class="section41 col-sm-12 col-md-6 col-xl-4 "  >
        <div class="container mt-3">
          <div class="card">
            <img class="card-img-top" src="${ele.imageURL}" alt="Card image" style="width:100%">
            <div class="card-body">
              <a onclick="saveItemData(${ele.id}) " class="card-title detailsitem">Product: ${ele.Product}</a>
               <h4>Price: ${ele.price} $</h4>
               <h4>Category: ${ele.Category}</h4>
               <div class="section43">
               <button class="section42" onClick="addToCart(${ele.id})">Add to cart</button>
               <i class="fas fa-heart fav1" style="color:${ele.liked==true?"red":""}" onClick="addToFav(${ele.id})"></i>
               </div>
            </div>
          </div>
      </div>
     </div>
     `;
  });
  allProducts.innerHTML = y.join("");
}

drawItem(JSON.parse(localStorage.getItem("items"))|| items);




  function saveItemData(id){
    localStorage.setItem("productsId",id)
    window.location='cartDetails.html'
  }

let showproducts = document.querySelector(".navbar5 div");
let counte = document.querySelector(".navbar6");

let addItem = localStorage.getItem("productsInCarts")
  ? JSON.parse(localStorage.getItem("productsInCarts"))
  : [];
if (addItem) {
  addItem.map((Item) => {
    showproducts.innerHTML += `<p>
    <span>${Item.Product} </span>
    <span>${Item.qty} </span>
    </p>`;
  });
  counte.innerHTML = addItem.length;
}

  function addToCart(id) {
    if (localStorage.getItem("username")) {
    let result = items.find((item) => item.id === id);
    let isProductInCart=addItem.some((i)=>i.id===result.id)
     
    if(isProductInCart)
      {
        addItem=addItem.map(p =>{
          if(p.id=== result.id)p.qty+=1;
          return p;
        })
      }else{
        addItem.push(result)
      }

       showproducts.innerHTML = ""
       addItem.forEach((item)=>{
        showproducts.innerHTML += `<p>
       <span>${item.Product} </span>
       <span>${item.qty} </span>
       </p>`;
       });
 
    localStorage.setItem("productsInCarts", JSON.stringify(addItem));
    localStorage.setItem("items",JSON.stringify(items));
    
    let countproducts = document.querySelectorAll(".navbar5 div p");
    counte.innerHTML = countproducts.length;
  }else{
    window.location = "login.html";
  }
}

function getUniqueArr(arr,filterType){
  let unique=arr
  .map((item)=>item[filterType])
  .map((item,i,final)=>final.indexOf(item)=== i&&i)
  .filter((item)=> arr[item])
  .map((item)=>arr[item])

  return unique;
}


let addFav = [];

function addToFav(id) {
  if (localStorage.getItem("username")) {
  let result = items.find((item) => item.id === id);

   if(result.liked==true){
    result.liked=false
   }
   else{
    result.liked=true
   }
   
  addFav = [...addFav, result];
  let uniqueproducuts= getUniqueArr (addFav ,"id")
  localStorage.setItem("productsInFav", JSON.stringify(uniqueproducuts));
  

  localStorage.setItem("items",JSON.stringify(items))
  drawItem(items)

}else{
  window.location = "login.html";
}
}

 

let openandclose = document.querySelector(".sopping_carts");
let openandclose2 = document.querySelector(".navbar5");

openandclose.addEventListener("click", fun1);

function fun1() {
  if (showproducts.innerHTML != "") {
    if (openandclose2.style.display == "block") {
      openandclose2.style.display = "none";
    } else {
      openandclose2.style.display = "block";
    }
  }
}


let input1=document.querySelector(".input1")

input1.addEventListener("keyup",function(f){
 
    search(input1.value,items)
  
  if(input1.value.trim()===""){
    drawItem(items)
  }
})

function search(product, items){
  let arr=items.filter((item)=>item.Product.indexOf(product)!==-1);
  drawItem(arr)
}