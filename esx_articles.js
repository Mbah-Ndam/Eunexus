All_article=[c_usb,drone]

usb_key = document.querySelector('.usb-key')
All_art = document.querySelector('#all-art') 
//premier affichage
function FirstA(element){
    if (element==0){
        product_zone = document.querySelector('.usb-key')
    }
    else if(element==1){
        product_zone = document.querySelector('.drone')
    }
    else{
        product_zone = document.createElement('div')
    }
    

    rang = ChNbre(All_article[element],3)
    i = 0
    while(i<=3){
        new_key = document.createElement('div')
        new_key.setAttribute('class','col h-25')
        
        
        new_key.innerHTML = '<div class="card border-0 p-2 mx-2 shadow-sm vw-75" article>'+
        '<img class="bd-placeholder-img card-img img-resize" heigth="100" src='+rang[i].image+'>'+
        '<div class="card-body px-0 lh-1 position-relative">'+
        '<p class="card-text fs-5 fw-light"><b>'+rang[i].nom+'</b></p>'+
        '<div class="d-flex justify-content-between align-items-center "><p class="card-text fs-4 text-secondary">'+rang[i].prix+' FCFA</p>'+
        '<span class="card-text text-muted fs-5 text-dark">hel</pan></div>'+
        '<button class="btn btn-dark fw-bolder border-0 px-md-4 py-md-3 w-100 mt-5 position-absolute bottom-0 buy-btn open-btn">Buy</button></div></div>'
        
        product_zone.appendChild(new_key)
        i++
    }
}    
FirstA(0)
FirstA(1)

AllViewBtnId = ['#vm-Btn-1','#vm-Btn-2']
function viewMore(nbre){
    All_art.innerHTML =""
    
    res = document.querySelector('#art-title')
    title = document.querySelector(AllViewBtnId[nbre]).getAttribute('data-bs-name')
    res.innerHTML = title
    
    index = All_article[nbre]
    i = 0
    while(i<=index.length-1){
        new_key = document.createElement('div')
        new_key.setAttribute('class','col h-25')
    
        new_key.innerHTML = '<div class="card border-0 p-2 m-2 shadow-sm vw-75" article>'+
        '<img class="bd-placeholder-img card-img-top img-resize" src='+index[i].image+'>'+
        '<div class="card-body px-0 lh-1 position-relative">'+
        '<p class="card-text fs-5" align="center"><b>'+index[i].nom+'</b></p>'+
        '<div class="d-flex justify-content-between align-items-center "><p class="card-text fs-4 text-secondary">'+index[i].prix+' FCFA</p>'+
        '<span class="card-text text-muted fs-5 text-dark">hel</pan></div>'+
        '<button class="btn btn-dark fw-bolder border-0 px-md-4 py-md-3 w-100 position-absolute bottom-0 buy-btn open-btn">Buy</button></div></div>'
    
        All_art.appendChild(new_key)
    
    i++
    }
}
function All0(){
    viewMore(0)
    buyPage()
}
function All1(){
    viewMore(1)
    buyPage()
}

page = document.getElementsByTagName('body')
page.onscrollend = function(){
    alert("real")
}

/*let list_article = document.querySelectorAll("[article]");
function activeLink(item) {
    list_article.forEach((item) =>
	item.classList.remove('active'));
	this.classList.add('active')
}
list_article.forEach((item) =>
item.addEventListener('click',activeLink));*/

function buyPage(){
open = document.querySelectorAll('.open-btn')
console.log(open)
open.forEach((item)=>item.onclick = function (){
    document.querySelector('.ui-modal').classList.remove('d-none')
    img_src = item.parentNode.parentNode.childNodes[0].src
    prod_name = item.parentNode.childNodes[0].innerText
    prod_price = item.parentNode.childNodes[1].childNodes[0].innerText
    price = reducedIndexInf(prod_price, prod_price.indexOf("F")).join('')
    price = removeIndex(price,price.length-1).join('')
    document.querySelector('.products-img').innerHTML = '<img class="rounded-3" src='+img_src+' height="350">'
    document.querySelector('.Product-Name').innerHTML = prod_name
    console.log(price)
    document.querySelector('.Product-Price').innerHTML = reading(price)+" FCFA"
})/*.onclick = function (){
    document.querySelector('.ui-modal').classList.add('d-flex')
}*/
document.querySelector('.exit-btn').onclick = function(){
    document.querySelector('.ui-modal').classList.add('d-none')
}
}
buyPage()