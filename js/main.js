

//heaader


let header = document.createElement('header');
header.style.cssText = `
    background-image: url("img/WhatsApp Image 2026-10-17 at 12.48.45 AM.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
`;

header.style.width = '100%';
header.style.minHeight = '100vh';
//container
let container = document.createElement('div');
container.setAttribute("class", "row mx-0 pt-12 ");


//card
let card = document.createElement('div');
card.setAttribute("class", "col col-4 m-auto p-7 bg-white rounded-3");

let span = document.createElement('p');

let icon = document.createElement('i');
icon.className = 'fa-solid fa-calculator  ';
icon.style.color = '#673ab7';
icon.style.display = 'block';
icon.style.margin = 'auto';
icon.style.fontSize = '35px';





let head = document.createElement('h1');

let text = document.createTextNode('Product Price calculator');
head.appendChild(text);
head.setAttribute("class", "fg-black text-center mt-5 mb-4");




let prgraph = document.createElement('p');

let pText = document.createTextNode('calculator your total price easily');
prgraph.appendChild(pText);
prgraph.setAttribute("class", "fg-secondary text-center");


//selection


let label = document.createElement('label');

let icon2 = document.createElement('i');
icon2.className = 'fa-solid fa-cube';
icon2.style.color = '#673ab7';
icon2.style.fontSize = '15px';

label.appendChild(icon2);
label.setAttribute('class','fg-black mb-2')
label.appendChild(document.createTextNode(' Product'));

let select = document.createElement('select');

let option1 = document.createElement('option');
option1.textContent = 'Select option';
option1.value = '';

let option2 = document.createElement('option');
option2.textContent = 'Phone 500$';
option2.value = '500';

let option3 = document.createElement('option');
option3.textContent = 'Laptop 800$';
option3.value = '800';

let option4 = document.createElement('option');
option4.textContent = 'Watch 2000$';
option4.value = '2000';

select.setAttribute('class', 'form-control bg-white fg-black  mb-4');


//Quantity

let label2 = document.createElement('label');
label2.setAttribute('class', 'fg-black mb-2')
let icon3 = document.createElement('i');
icon3.className = ' fa-solid fa-cart-shopping';
icon3.style.color = '#673ab7';
icon3.style.fontSize = '15px';

label2.appendChild(icon3);
label2.appendChild(document.createTextNode(' Quantity'));

let inputQuantity = document.createElement('input');
inputQuantity.type = 'text';
inputQuantity.placeholder = 'Enter quantity';
inputQuantity.setAttribute('class', 'form-control mb-4 bg-white fg-black');




//Discount


let label3 = document.createElement('label');
label3.setAttribute('class', 'fg-black mb-2')
let icon4 = document.createElement('i');
icon4.className = 'fa-solid fa-percent';
icon4.style.color = '#673ab7';
icon4.style.fontSize = '15px';

label3.appendChild(icon4);
label3.appendChild(document.createTextNode(' Discount'));

let inputDiscount = document.createElement('input');
inputDiscount.type = 'text';
inputDiscount.placeholder = 'Enter discount';
inputDiscount.setAttribute('class', 'form-control mb-4 bg-white fg-black');



//button

let btn = document.createElement('button');
let rtnText = document.createTextNode('Calculate Price');
btn.appendChild(rtnText);
btn.setAttribute('class', 'btn-solid theme-primary w-100');

btn.onclick = calculatePrice;
let result = document.createElement('div');
result.setAttribute("class", "alert  theme-success mb-4");
result.style.display='none';


//تخزين العناصر



document.body.appendChild(header);
header.appendChild(container);
container.appendChild(card);

card.appendChild(icon);
card.appendChild(head);
card.appendChild(prgraph);

card.appendChild(label);
card.appendChild(select);

select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);

card.appendChild(label2);
card.appendChild(inputQuantity);

card.appendChild(label3);
card.appendChild(inputDiscount);
card.appendChild(result);

card.appendChild(btn);

function calculatePrice() {

    result.style.display = 'block';

    
    let product = select.value;
    let quantity = inputQuantity.value;
    let discount = inputDiscount.value;


 

    if (product == "") {
        result.innerHTML = "Please select a product";
    }

    
    else if (quantity == "") {
        result.innerHTML = "Please enter a quantity";
    }

    else if (quantity <= 0) {
        result.innerHTML = "Quantity must be greater than 0";
    }


    else if (discount == "") {
        result.innerHTML = "Please enter a discount";
    }

    else if (discount < 0 || discount > 100) {
        result.innerHTML = "Discount must be between 0 and 100";
    }

    else {
      
        let subTotal = product * quantity;
        let discountAmount = (subTotal * discount) / 100;
        let total = subTotal - discountAmount;

        // output
        result.innerHTML = `
            Subtotal = ${subTotal} $
            Discount Amount = ${discountAmount} $ 
            Total = ${total} $
        `;
    }
}

