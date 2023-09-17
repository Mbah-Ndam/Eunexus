
let list = document.querySelectorAll('.nav-item');
    function activeLink(item) {
	    list.forEach((item) =>
	    item.classList.remove('active'));
	    this.classList.add('active')
    }
    list.forEach((item) =>
    item.addEventListener('click',activeLink));
var win = document.querySelector(".body")    


win = document.querySelector(".load")
corps = document.querySelector(".classic")
black = document.querySelector(".sertic")
function time(){
	black.classList.add("d-none")
	black.classList.remove("d-flex")
	corps.classList.remove("d-none")
}
i=0
/*function compte(){
	if(i==2){
		win.click()
	}
	i++
	rebour = setTimeout("compte();", 1000)
}
compte()*/

//----------------------------------------------//
//        article buy all function              //
//----------------------------------------------//
var name = ""
var prix = ""
/*function buyMenu(element){
    productsName = document.querySelector(".products-name");
    productsPrice = document.querySelector(".products-price");
    productsImage = document.querySelector(".products-img");
    
    document.querySelector(".quantity").value=""
    name = article[element].nom;
    prix = article[element].prix;
    productsName.innerHTML=article[element].nom;
    productsPrice.innerHTML=article[element].prix+" FCFA";
    productsImage.innerHTML="<img class='vh-100 vw-100' src="+article[element].image+">";
}*/
articleSelected=[]
function addPannierItem(){
    totalPrice()
    qte = document.querySelector(".quantity").value
    articleSelected.push(
        {
            "nom":name,
            "prix":prix,
            "quantité":qte,
        }
        )
    pannierViewer()
    
    document.querySelector(".exit").click()
}
articleNumber = 1
function pannierViewer(){
    element = document.querySelector(".all-items")
    
    newItem = document.createElement("div")
    newItem.setAttribute("class","d-flex justify-content-between mt-3 border-bottom")
    newItem.innerHTML = "<p>"+articleNumber+"</p><p>"+articleSelected[articleNumber-1].nom+"</p><p>"+articleSelected[articleNumber-1].quantite+"</p><p>"+articleSelected[articleNumber-1].prix+"</p>"
    articleNumber += 1
    
    element.appendChild(newItem)
}

AllItemPrice = [0];
function totalPrice(){
    qte = document.querySelector(".quantity").value
    
    PriceItem = parseInt(prix)*qte
    AllItemPrice.push(PriceItem)
    
    i = 0;
    somme = 0;
    while(i<AllItemPrice.length){
        somme = somme + AllItemPrice[i]
        i += 1
    }
    document.getElementById("total-price").innerHTML = somme+" FCFA"
}
//localStorage.setItem("nom","pavel")


