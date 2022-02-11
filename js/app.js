// document.getElementById('detail-submit-btn').addEventListener('click', () =>{
//   const getBuyerDetails = document.getElementById('buyer-details-input');
//   document.getElementById('buyer-info').innerText = getBuyerDetails.value;


//   // empty value 
//   getBuyerDetails.value = '';
// })


// get user Product price & quantity 

document.getElementById('add-details-btn').addEventListener('click', ()=>{
  // for buyer name details 
  const getBuyerDetails = document.getElementById('buyer-details-input');
  document.getElementById('buyer-info').innerText = getBuyerDetails.value;


  // empty value 
  getBuyerDetails.value = '';


  // get user info id 
  const itemName = document.getElementById('item-name-input');
  const itemPrice = document.getElementById('item-price-input');
  const itemQuantity = document.getElementById('item-quantity-input');

  const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);


// creat table info 
const tr = document.createElement('tr');
const th = document.createElement('th');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

// creat classList for td3(total price )
td3.classList.add('item-total');

// set innerText value 
th.innerText = itemName.value;
td1.innerText = itemPrice.value;
td2.innerText = itemQuantity.value;
td3.innerText = totalPrice;

// append this item into tr 

tr.appendChild(th);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

// get infoTable 
const infoTable = document.getElementById('info-table');

infoTable.appendChild(tr);

// get total calculation from function 
totalCalculation();
})


// function for get subtotal amount 

function calculateSubTotal() {
  // get td3 item className 
  const itemCost = document.getElementsByClassName('item-total');

  let subTotal = 0;
  for (let i = 0; i < itemCost.length; i++) {
    const element = itemCost[i];
    const price = parseFloat(element.innerText);
    subTotal = subTotal + price;
  }
  return subTotal;
}

// for total calculation 
function totalCalculation() {
  const subtotal = calculateSubTotal();
  const displaySubTotal = document.getElementById('sub-total');
  displaySubTotal.innerText = subtotal;

  // for total tax 
  let tax = subtotal * .2;
  document.getElementById('tax').innerText = tax.toFixed(2);
  // for grand total 
  document.getElementById('grand-total').innerText = subtotal + tax;
  // for grand total 2 
  document.getElementById('grand-total-2').innerText = subtotal + tax;
}