//---------------------------------------------------//
//    Random general Object and All attribute        //
//---------------------------------------------------//

random = {
    'Array':{
        'choices':choices,
        'redSup':reducedIndexSup,
        'redInf':reducedIndexInf,
        'remInd':removeIndex,
    },
    'Math':{
        'fraction':fraction,
        'calcDiv':calcDiv,
        'sys2':sys2res,
        'sys3':sys3res,
        'B10_2':B10_2,
    }
}

//-------------------------------------------//
//   intermediary function                   //
//-------------------------------------------//

//get the sign of the number
function signe(nbre){
    if(nbre<0||nbre==0){
        signe = "+"
    }else{
        signe = "-"
    }
    return signe
}

//verify if element in present the array
function verify(tab, element){
    i=0
    compteur = 0
    while(i<=tab.length-1){
        if(element===tab[i]){
            compteur++
        }
        i++
    }
    
    if (compteur==0){
        return false
    }else{
        return true
    }
}

//-------------------------------------------//
//          choices(Array)                   //
//-------------------------------------------//

/* help to choices a random element in a Array 
!!!!: a max lenght is Array for use this is 9999,
for used to type a choices(Array_name) */

function reducedIndexInf(tab,element){
    //limit = tab.indexOf(element)
    newTab = new Array
    index = 0
    while(index<element){
        newTab.push(tab[index])
        index++
    }
    return newTab
}
function reducedIndexSup(tab,element){
    //limit = tab.indexOf(element)
    newTab = new Array
    index = element+1
    while(index<tab.length){
        newTab.push(tab[index])
        index++
    }
    return newTab
}
function removeIndex(tab,element){
    index = 0
    newTab = new Array
    while(index<tab.length){
        if(index==element){
            index++
        }else{
            newTab.push(tab[index])
            index++
        }
    }
    return newTab
}

function choices(tab){
    fill = Math.random()
    string = JSON.stringify(fill)
    rar = reducedIndexInf(string, 6)
    unrar = removeIndex(removeIndex(rar, 0),0)
    nbre = parseInt(unrar.join(''))
    index = Math.round(((tab.length-1)/9999)*nbre)
    choix = tab[index]
    
    return choix
}

function ChNbre(tab){
    cmpt = 0
    new_tab=[]
    while(cmpt!=4){
        newr=choices(tab)
        rs=verify(new_tab,newr)
        while(rs==true){
            newr = choices(tab)
            rs=verify(new_tab,newr)
        }
        if(rs==false){
            new_tab.push(newr)
        }
        cmpt++
    }
    
    return new_tab
}
//-------------------------------------------//
//                 fraction                  //
//-------------------------------------------//

/*convert float number to mathematical fraction for used a different programm*/
function fraction(number){
    conserve = number.toString()
    leng = conserve.length-(((Math.trunc(number)).toString()).length+1)
    i=1
    pre = "1"
    while(i<=leng){
        pre=pre+0
        i++
    }
    newNbre = number*parseInt(pre)
    diviseur = Pgcd(newNbre,pre)
    if(diviseur==0){
        num = newNbre
        deno = pre
    }else{
        num = newNbre/diviseur
        deno = pre/diviseur
    }
    
    if(deno!="1"&&deno<0){
        fract = "-"+num+"/"+Math.abs(deno)
    }else if(deno!="1"&&deno>0){
        fract = num+"/"+deno
    }else{    
        fract = num.toString()
    }
    
    return fract
}

/*convert a mathematical fraction with two number of euclidian division*/
function calcDiv(a,b){
  reste = a%b
  if(reste==0){
    fract = a/b
  }else{
    cdiv = Pgcd(a,b)
    if (cdiv==0){
      num = a
      deno = b
    }else{
      num = a/cdiv
      deno = b/cdiv
    }
    
    if(deno!="1"&&deno<0){
        fract = "-"+num+"/"+Math.abs(deno)
    }else if(deno!="1"&&deno>0){
        fract = num+"/"+deno
    }else{    
        fract = num.toString()
    }
  }
  return fract
}

/* determination du plus grand commun diviseur(pgcd) de deux réels*/
function Pgcd(a, b){
    reste=1
    while(reste!=0){
        reste = a % b
        a = b
        b = reste
    }
    if(reste==0){
        pg = a
    }
    
    return pg
}

//-------------------------------------------//
//           decomposition                   //
//-------------------------------------------//

function decomp(number){
    prem=[]
    s = 1
    while(s<number){
        pr=[]
        i = 1
        while(i<number){
            re=s%i
            if(re==0){
                pr.push(i)
                i++
            }else{
                i++
            }
        }
        if(pr.length==2){
            prem.push(s)
            s++
        }else{
            s++
        }
    }
    tab=[]
    i=1
    while(number!=1){
        i=0
        while(i<=prem.length-1){
            if(number%prem[i]==0){
                number = number/prem[i]
                tab.push(prem[i])
            }
            i++
        }
    }
    decom = tab.join(' × ')
    return decom
}

//-------------------------------------------//
//       resolution systeme equation         //
//            a trois inconue                //
//-------------------------------------------//

function sys2res(a,b,c,d,e,f){
    x=calcDiv((b*f)-(e*c),(b*d)-(e*a))
    y=calcDiv((a*f)-(d*c),(a*e)-(b*d))

    result ={
            "X":x,
            "Y":y,
        }
    return result
}

//-------------------------------------------//
//       resolution systeme equation         //
//            a deux inconue                 //
//-------------------------------------------//
function sys3res(a,b,c,d,e,f,g,h,i,j,k,l){
    A1=(a*g)-(e*c)
    B1=(b*g)-(f*c)
    C1=(d*g)-(h*c)
    
    A2=(k*a)-(c*i)
    B2=(k*b)-(j*c)
    C2=(k*d)-(l*c)
    
    A3=(A1*B2)-(A2*B1)
    B3=(C1*B2)-(C2*B1)
    
    //triangular systeme
    line1 = a+"x"+signe(b)+Math.abs(b)+"y"+signe(c)+Math.abs(c)+"z = "+d
    line2 = A1+"x"+signe(B1)+Math.abs(B1)+"y = "+C1
    line3 = A3+"x = "+B3
    
    x=calcDiv(B3,A3)
    y=calcDiv((C1*A3)-(A1*B3),A3*B1)
    z=calcDiv((d*A3-a*B3)*(A3*B1)-(b*(C1*A3-A1*B3)*A3), A3*A3*B1*c)

    result ={
            "eqx":{
                "X":x,
                "Y":y,
                "Z":z,
            },
            "trian":{
                "L1":line1,
                "L2":line2,
                "L3":line3,
            }
        }
    return result
}

//-------------------------------------------//
//           convertion de Base              //
//            Decimal-Binaire                //
//-------------------------------------------//

function B10_2(nbre){
    base=[]
    quotient = 1
    while(quotient!=0){
        reste = nbre%2
        base.push(reste)
        quotient = (nbre-reste)/2
        nbre = quotient
    }
    convert = parseInt(base.reverse().join(''))
    
    return convert
}

function reading(text){
    i=1
    tab1 = []
    sp=0
    tab = []
    nbr=Math.trunc(text.length/3)
    while(i<=text.length){
        tab1.push(text[text.length-i])
        sp++
        i++
        
        if(sp==3){
            tab.push(tab1)
            tab1=[]
            sp=0
        }
    }
    
    
    if(tab.length==nbr){
        i=0
        err=[]
        while(i<=nbr-1){
            tic = tab[i].reverse().join('')
            err.push(tic)
            i++
        }
        sys = err.join('')
        i=0
        sim=[]
        while(i<(text.length-sys.length)){
            sim.push(text[i])
            i++
        }
        err.push(sim.join(''))
        text = err.reverse().join(' ')
        
        return text
    }
}