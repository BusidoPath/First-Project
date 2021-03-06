let open = document.getElementById('open-btn'),
    name_value = document.getElementsByClassName('name-value')[0],
    budget_value = document.getElementsByClassName('budget-value')[0],
    goods_value = document.getElementsByClassName('goods-value')[0],
    items_value = document.getElementsByClassName('items-value')[0],
    employers_value = document.getElementsByClassName('employers-value')[0],
    discount_value = document.getElementsByClassName('discount-value')[0],
    isopen_value = document.getElementsByClassName('isopen-value')[0],

    goods_item = document.getElementsByClassName('goods-item'),
    goods_btn = document.getElementsByTagName('button')[1],
    budget_btn = document.getElementsByTagName('button')[2],
    employers_btn = document.getElementsByTagName('button')[3],
    choose_item = document.querySelector('.choose-item'),
    time_value = document.querySelector('.time-value'),
    count_budget_value = document.querySelector('.count-budget-value'),
    hire_employers_item = document.querySelectorAll('.hire-employers-item'),
    discount_yes = document.querySelector('.discount-yes'),
    discount_no = document.querySelector('.discount-no');



let money, price;




open.addEventListener('click', () => {
    money = prompt("Ваш бюджет");

    while (isNaN(money) || money === "" || money === null) {
      money = prompt("Ваш бюджет");
    }
    
    budget_value.textContent = money;

    name_value.textContent = prompt("Название Вашего магазина?").toUpperCase();
    });

goods_btn.addEventListener('click', () => {
    for (let i = 0; i < goods_item.length; i++) {
        let a = goods_item[i].value
  
        if (
          typeof a === "string" && typeof a != null && a.length < 50) {
          console.log("Всё верно!");
          mainList.shopGoods[i] = a;
          goods_value.textContent = mainList.shopGoods;
        } else {
          i = i - 1;
        }
      }
});

choose_item.addEventListener('change', () => {
    let items = choose_item.value;

    if(isNaN(items)){  
    mainList.shopItems = items.split(",");
    mainList.shopItems.sort();
    items_value.textContent = mainList.shopItems;
    }
});


time_value.addEventListener('change', () => {
    let time = time_value.value;

    if (time < 0) {
        console.log("такого просто не может быть ");
        mainList.open = false;
      } else if (time > 0 && time < 20) {
        console.log("Время работать!");
        mainList.open = true;
      } else if (time < 24) {
        console.log(" Уже слишком поздно");
        mainList.open = false;
      } else {
        console.log(" В сутках всего 25 часов");
        mainList.open = false;
      }
    
    if(mainList.open = true) {
        isopen_value.style.backgroundColor = 'green';
    };
      if(mainList.open = false){
        isopen_value.style.backgroundColor = 'red'; 
    };
});


budget_btn.addEventListener('click', () =>{
    count_budget_value.value = money / 30;
});


employers_btn.addEventListener('click', () =>{
    for (let i = 0; i < hire_employers_item.length; i++) {
        let name = hire_employers_item[i].value;
        mainList.employers[i] = name;

        employers_value.textContent += mainList.employers[i] + ', ';
      }
});

discount_yes.addEventListener('click',() =>{
    discount_value.style.backgroundColor = 'green';
});

discount_no.addEventListener('click',() =>{
  discount_value.style.backgroundColor = 'red';
});


const mainList = {
  budget: money,
  shopGoods: [],
  employers: {},
  open: false,
  discount: true,
  shopItems: [],
};

console.log(mainList);