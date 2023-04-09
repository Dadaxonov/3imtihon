const bestNav = document.querySelector('.best-nav')
const ulNav = document.querySelector('.ul-nav')
const ulList = document.querySelector('.ul-flex');
const input = document.querySelector('.search');
const best = document.querySelector('.best-card')
const korzina= document.querySelector('.korzina-ul')
const madal=document.querySelector('.madal')
const form2=document.querySelector('.form2');
const closeMadal= document.querySelector('.closeMadal');
const btnKorzina = document.querySelector('.korzina-btn')
const span=document.querySelector('.span')
const btn=document.querySelector('.btn');


let arr=[];
const NAV_URL ="https://fakestoreapi.com/products"

const CARD_URL="https://fakestoreapi.com"

const render= (x) =>{
    ulList.innerHTML +=
        `<li>
            <img src="${x.image}" alt="sfds"    width=200px/>
            <h5>${x.title}</h5>
            <p>${x.category}</p>
            <p class="price">$${x.price}</p>
            <span class="sk">-24%  $${(x.price*0.76)}</span>
            <button type="submit" id="${x.id}" class="s"><img id="${x.id}" class="s" src="./img/Cart.svg" alt="sds"></button>
        </li>
        `
}

const son=1;
const korzinkaRender= (t) =>{
    korzina.innerHTML +=
        `<li>
            <img src="${t.image}" alt="sfds"    width=200px/>
            <p class="price">$${t.price}</p>
            <span class="sk">-24%  $${(t.price*0.76)}</span>
            <button id="${t.id}" class="btn-plas">+</button>
            <span id="${t.id}">${son}</span>
            <button id="${t.id}" class="btn-ayrish">-</button></br>
            <button id="${t.id}" class="btn-remove">Remove</button>
        </li>
        `
}
const btnRemove=document.querySelector('.btn-remove')
const btnPlase=document.querySelector('.btn-plas')
const btnAyrish=document.querySelector('.btn-ayrish')

const dataItem = async ()=>{
    try {
        const data = await fetch(CARD_URL+"/products")
        const catData = await data.json();
        for(let i of catData){
            render(i)

        }
    } catch (error) {
        console.log(error);
    }
}
dataItem();


const navRender= (x) =>{
    for(let i of x){
            ulNav.innerHTML +=
                `<li>
                    <h4>${i}</h4>
                </li>
                `
        }
}
const dataNav =async ()=>{
    try {
        const deta =await fetch(`${NAV_URL}/categories`)
        const navData = await deta.json();
        navRender(navData)
    } catch (error) {
        console.log(error);
    }
}

// const getSearch=async(name)=>{
//     try {
//         const res=await fetch(`${NAV_URL}/category/${name}`)
//         const data =await res.json();
//         render(data)
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }


// getSearch();
dataNav();


// input.addEventListener('click',(e)=>{
//     getSearch(e.target.value)
// })


const korzinaPage = async (id)=>{
    try {
        const urlData = await fetch(CARD_URL+"/products");
        const baseUrl= await urlData.json();
        for(let i of baseUrl){
            if(id==i.id){
                korzinkaRender(i)
            }
        }
    } catch (error) {
        console.log(error);
    }
        
}
let num=0;

 best.addEventListener('click',(e)=>{
    let {id,className}=e.target;
    span.textContent=`${num+=1}`
    korzinaPage(id);

})

let resault =fetch(CARD_URL+"/products").then((re)=>{
    return re.json()
}).then((data)=>{
    arr=[...data];
}).catch((error)=>{
    console.log(error);
})

closeMadal.addEventListener('click',(e)=>{
    e.preventDefault();
    madal.classList.remove('open')
    span.textContent=0;
    num=0;
})

btnKorzina.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('dd');
    madal.classList.add('open')
})


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    korzina.innerHTML='';
    alert('Xaridingiz uchun raxmat!')
})

form2.addEventListener('click',(e)=>{
    e.preventDefault
})