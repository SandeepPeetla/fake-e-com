async function getData() {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsondata =await data.json();
    console.log(jsondata);

    jsondata.forEach((element) => {
        const prodcard = document.createElement('div');
        prodcard.classList.add("product-card");



    prodcard.innerHTML = 
    `<img src="${element.image}" alt="">
    <h2 "product-title">${element.title}</h2>
    <p class="product-discription">${element.description}</p>
    <p class="product-price">${element.price}</p>`;

    document.getElementById("products").appendChild(prodcard);


}
  );

}
getData();