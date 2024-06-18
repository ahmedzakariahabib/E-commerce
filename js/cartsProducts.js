let getProducts=localStorage.getItem("productsInCarts")
let allProducts=document.querySelector(".section4")

let getProductsObj

if(getProducts)
    {
        getProductsObj=JSON.parse(getProducts)
        drawItem(getProductsObj)
    }

    let noProductsDom=document.querySelector(".noProducts")

    if(JSON.parse(localStorage.getItem("productsInCarts")).length===0)
        noProductsDom.innerHTML= "There is no items !!"
   

 
function drawItem(itemm) {
    let y=  itemm.map((ele)=>{
       return`<div class="section41    col-sm-12 col-md-6 col-xl-4  "  >
         <div class="container mt-3 ">
           <div class="card section5 ">
             <div class="card-body">
               <h4 class="card-title">Product: ${ele.Product}</h4>
                <h4>Price: ${ele.price} $</h4>
                <h4>Category: ${ele.Category}</h4>
                <h4>Quntatit: ${ele.qty}</h4>
                <div class="section43">
                <div></div>
                </div>
             </div>
             <img class="card-img-top mx-auto mt-2" src="${ele.imageURL}"  alt="Card image" 
             style="width:50%;border-radius:20px">
             <button class="section52 mt-2" onClick="removeFromCart(${ele.id})">Remove From Cart</button>
           </div>
       </div>
      </div>
      `
     }) 
     allProducts.innerHTML=y.join("")
 }


function removeFromCart(id){
  let removeItem= getProductsObj.findIndex((e)=>{
    return e.id===id;
  })
    if(removeItem!==-1)
    {
      getProductsObj.splice(removeItem,1)
      allProducts.innerHTML=""
      drawItem(getProductsObj)
      localStorage.setItem("productsInCarts",JSON.stringify(getProductsObj))
    }


    let noProductsDom=document.querySelector(".noProducts")

    if(JSON.parse(localStorage.getItem("productsInCarts")).length===0)
        noProductsDom.innerHTML= "There is no items !!"
}


