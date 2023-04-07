

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    const categoryArray=["men's clothing","jewelery","electronics","women's clothing",""];
    const btn=document.querySelectorAll('.btn');
    let categoryName="";

    for (let i = 0; i < categoryArray.length; i++) {

        btn[i].onclick = function writeCategory() {
            categoryName=categoryArray[i]
            checkCategory()
            console.log(categoryName);

        }
        
    }



    function checkCategory() {
        const cute= data.filter(filterByCategory);
        function filterByCategory(params) {
    
            return params.category===categoryName;
        } 
    
    
    
    
        let li='';
    
        (categoryName===""?data:cute).map(item=>{
            li+=`
    
            <div class="design">
            category:     <li>${item.category} </li>
            id:           <li>${item.id} </li>
            image:        <li><img src=${item.image} alt="" width="200px"> </li>
            price:        <li>${item.price} </li>
            Rating_rate:  <li>${item.rating.rate} </li>
            Rating_count: <li>${item.rating.count} </li>
            title:        <li>${item.title} </li>
            </div>
    
    
            
            `
        })
        document.querySelector('.ol').innerHTML=li;
    }
})

.catch(err=>console.log("Error"))