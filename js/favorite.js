 let getProducts=localStorage.getItem("productsInFav")
let allProducts=document.querySelector(".section4")

let getProductsObj

if(getProducts)
    {
        getProductsObj=JSON.parse(getProducts)
        drawFavItem(getProductsObj)
    }


let noProductsDom=document.querySelector(".noProducts")

if(JSON.parse(localStorage.getItem("productsInFav")).length===0)
    noProductsDom.innerHTML= "There is no items !!"

 
function drawFavItem(itemm) {
    let y=  itemm.map((ele)=>{
       return`<div class="section41    col-sm-12 col-md-6 col-xl-4  "  >
         <div class="container mt-3 ">
           <div class="card section5 ">
             
             <div class="card-body">
               <h4 class="card-title">Product: ${ele.Product}</h4>
                <h4>Price: ${ele.price} $</h4>
                <h4>Category: ${ele.Category}</h4>
                
                <div class="section43">
                <div></div>
              
                </div>
             </div>
                 <img class="card-img-top mx-auto mt-2" src="${ele.imageURL}"  alt="Card image" 
             style="width:50%;border-radius:20px">
               <button class="section52 mt-2" onClick="removeFromFav(${ele.id})">Remove From Favorite</button>
           </div>
       
       </div>
      </div>
      `
     }) 
     allProducts.innerHTML=y.join("")
 }
 

 let addItem = localStorage.getItem("items")
 ? JSON.parse(localStorage.getItem("items"))
 : [];

 
 function getUniqueArr(arr,filterType){
  let unique=arr
  .map((item)=>item[filterType])
  .map((item,i,final)=>final.indexOf(item)=== i&&i)
  .filter((item)=> arr[item])
  .map((item)=>arr[item])

  return unique;
}

function removeFromFav(id){
  let removeItem= getProductsObj.findIndex((e)=>{
    return e.id===id;
  })
    if(removeItem!==-1)
    {
      getProductsObj.splice(removeItem,1)
      allProducts.innerHTML=""
      drawFavItem(getProductsObj)
      localStorage.setItem("productsInFav",JSON.stringify(getProductsObj))
    }

    let noProductsDom=document.querySelector(".noProducts")

    if(JSON.parse(localStorage.getItem("productsInFav")).length===0)
    noProductsDom.innerHTML= "There is no items !!"

    let result = addItem.find((item) => item.id === id);
     result.liked=false

     addItem=[...addItem,result]  
     let uniqueproducuts= getUniqueArr (addItem ,"id")
     localStorage.setItem("items", JSON.stringify(uniqueproducuts));
}



