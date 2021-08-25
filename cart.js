const productList = [
  {
    id: "1",
    title: "Zuiver現代居室沙發",
    price: "NT 47,840",
    img: "images/sofa1.jpeg",
  },
  {
    id: "2",
    title: "Zuiver摩登雙人沙發",
    price: "NT $20,880",
    img: "images/sofa2.png",
  },
  {
    id: "3",
    title: "Bloomingville日落之城沙發",
    price: "NT $63,360",
    img: "images/sofa3.jpg",
  },
  {
    id: "4",
    title: "Bloomingville日落之城椅凳",
    price: "NT$ 21,660",
    img: "images/sofa4.jpg",
  },  {
    id: "5",
    title: "Zuiver 斯堪地那維亞沙發",
    price: "NT$ 20,880",
    img: "images/sofa5.jpg",
  },
  {
    id: "6",
    title: "Zuiver荷蘭天鵝絨沙發",
    price: "NT$ 70,380",
    img: "images/sofa6.png",
  },
];

function createProductCardElement(product) {
  const cardElement = `
  
<div class="col-md-6  col-sm-12" >
       <div class="product-card  text-center txt-color font-weight-bold mb-3" >
          <div class="cardimg-section"> 
      
                <div class="product-card-overlay d-flex ">    
                    <a href="index.html"  class="btn  btn-sm m-auto">更多細節</a>
                </div> 
           
              <div class="product-img">
               <img src="${product.img}" class="card-img-top" >
             </div>  
          </div>
      
        
        <div class="card-body ">
              <div class="card-body d-flex justify-content-between align-items-center  ">
                  <div class="text-left">
                      <h5 class="card-title">${product.title}</h5>  
                      <p class="card-text"> ${product.price}</p>
                  </div>
                    <div class="form-group d-flex  align-items-center  ">
                       
                         <span class=" font-weight-bold txt-color  p-2  rounded-circle icon-hover mr-2  "> <i class="far fa-heart "></i> </span>
                        <span class=" font-weight-bold txt-color  p-2  rounded-circle icon-hover "><i class="fas fa-shopping-cart  "></i> </span>
                  </div>
 
            
       
             
                </div>
        </div>
    
       
   </div>

`;
  return cardElement;
}

productList.forEach((product) => {
  console.log(product);
  const card = createProductCardElement(product);
  console.log(card);
  document.getElementById("productRow").innerHTML += card;
});

function typing(){
  const dom=document.querySelector('.product-banner h4');
const data='“Enjoy your own comfort in the purespace.”'.split('');

function writing(){
  for(let i=0;i<data.length;i++){
   setTimeout(()=>{
dom.innerHTML+=data[i];
   },100*i);
  }
  
}
writing();
}
window.onload=function(){
  setTimeout(()=>{
typing()
  },300)
 
}






