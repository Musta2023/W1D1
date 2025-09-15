// ===== Exercise 1

     function displayNumbersDivisible(divisor){
        let result=[];
        let summ=0;
        for(let i=0;i<=500;i++){
            if(i%divisor==0){
                result.push(i);
                summ+=i;
            }
        }
       console.log(result.join(" "));
       console.log(`the sum of all nbrs that can divided by ${divisor} is ${summ}`);
     }
     displayNumbersDivisible(3);
     displayNumbersDivisible(45);
     displayNumbersDivisible(15);
   
// ===== Exercise 2

        const prices = {    
            "banana": 4, 
            "apple": 2, 
            "pear": 1,
            "orange": 1.5,
            "blueberry":10
        } 
     shoppingList=["banana","orange","apple"]

     function myBill(){
        total=0;
        for(let item of shoppingList ){
            if(stock[item]>=1){
                total+=prices[item];
                stock[item]--;
            }

        }
        return total;
     }
     totalItem=myBill()
     console.log(`totale items is ${totalItem}`)
// ===== Exercise 3
 function changeEnough(itemPrice,amountOfchange){
        const changeType=[0.25,0.10,0.05,0.01];
        let total=0
        for(i=0;i<amountOfchange.length;i++){
            total+=amountOfchange[i]*changeType[i];
        }
       return total>=itemPrice
     }
     console.log(changeEnough(4.25, [25, 20, 5, 0]))
// ===== Exercise 4
        function hotelCost(){
            let nights;
            let totalCost;
            do {
                let input=prompt("please enter the nbr of night you want to spend.")
                if(input===null||input.trim()===""){
                    nights=prompt("please don't leave it blank");
                    continue;
                }
                nights=parseInt(input,10);
            }while(isNaN(nights)|| nights<=0)
            totalCost=nights*140;
            return totalCost;
        }
        // alert(`totale cost you will spend is ${hotelCost()} $`)
           function planRideCost(location){
            destinations={"london":183, "paris":220, "others":300};
            let nights;
            let totalCost;
            do {
                const input=prompt("please enter the nbr of night you want to spend.");
                if(input===null) return null;
                nights=parseInt(input.trim(),10);
                
            }while(isNaN(nights)|| nights<=0);

            do{
                const input=prompt("please enter your destination(london, paris or others )");
                if(input===null) return null;
                location=input.trim().toLowerCase();
            }while(location==="");
             const rate=destinations[location] ?? destinations.others;
            return totalCost=nights*rate
            
            
        }
        // alert(`totale cost you will spend is ${planRideCost()} $`);
        function rentalCartCost(){
            let days;
            let totalRentCost;
            do {
                let input=prompt("please enter the nbr of days you want to rent")
                if(input===null && input.trim()===""){
                    input=prompt("please enter a number and don't leave it blank");
                    continue;
                }
                days=parseInt(input.trim(),10)
                if(days>=10){
               totalRentCost=(days*40)*0.95;
            }else{
               totalRentCost=(days*40);
            }
            }while(Number.isNaN(days) || days<=0);
            
            
            return totalRentCost;
        }
        //  const cost = rentalCartCost();
        //     if (cost !== null) {
        //        alert(`Total rent for the car is $${cost}.`);
        //     }
        HotelCost = hotelCost();
        PlanRideCost = planRideCost();
        RentalCartcost = rentalCartCost();
        TotalVicationCost = HotelCost + PlanRideCost + RentalCartcost;


        alert(`the car cost: ${RentalCartcost}.  the hotel cost: ${HotelCost}. the plane tickets cost: ${PlanRideCost} so total for this trip is ${TotalVicationCost}`);
// ===== Exercise 5
//----------ex_5
  //1 
  const div1=document.querySelector('#container');
   console.log(div1);
  //2 
   const firstList =document.querySelector('.list');
   const peteLi=firstList.querySelector("li:nth-child(2)");
   peteLi.textContent="rechard";
  //3
  const secondList=document.querySelectorAll('.list')[1];
  const secondLi=secondList.querySelector("li:nth-child(2)");
  secondLi.remove();
  //4
   const lists = document.querySelectorAll(".list");
    lists.forEach(ul => {
      const firstLi = ul.querySelector("li:first-child");
      if (firstLi) {
        firstLi.textContent = "Mustapha"; 
      }
    });
  //5
   lists.forEach(ul => ul.classList.add("student_list"));
  //6
    firstList.classList.add("university", "attendance");
    // 1 Add a light blue
    const container = document.querySelector("#container");
    container.style.backgroundColor = "lightblue";
    container.style.padding = "10px";

    // 2. Do not display the <li> that contains the text node “Dan”
    const allLis = document.querySelectorAll("li");
    allLis.forEach(li => {
      if (li.textContent.trim() === "Dan") {
        li.style.display = "none";
      }
    });

    // 3. Add a border to the <li> that contains the text node “Richard”
    allLis.forEach(li => {
      if (li.textContent.trim() === "Richard") {
        li.style.border = "4px solid black";
      }
    });

    // 4. Change the font size of the whole body
    document.body.style.fontSize = "20px";

    // 5. Bonus: If background color of the div is “light blue”, alert “Hello x and y”
    if (container.style.backgroundColor === "lightblue") {
      // Collect the names from ALL <li> inside ALL <ul>
      const names = [...document.querySelectorAll("ul li")].map(li => li.textContent.trim());
      alert(`Hello ${names.join(" and ")}`);
    }

// ===== Exercise 6
//1
const Navbar=document.querySelector('#navBar')
Navbar.setAttribute('id','socialNetworkNavigation')
//2 add new li
const ul=document.querySelector('#socialNetworkNavigation ul')
const newLi=document.createElement('li')
const newLink=document.createElement('a')
newLink.href='#';
newLink.textContent='logout';
newLi.appendChild(newLink);
ul.appendChild(newLi);
console.log(ul)
 
// Get the first and last <li>
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// Display their text
console.log('First link:', firstLi.textContent);
console.log('Last link:', lastLi.textContent);

// ===== Exercise 7
// 1) Data
const allBooks = [
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg",
    alreadyRead: true
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL.jpg",
    alreadyRead: false
  }
];

// 2) Render
const section = document.querySelector(".listBooks");
const frag = document.createDocumentFragment();

allBooks.forEach(book => {
  // wrapper
  const card = document.createElement("div");
  card.className = "book";

  // text (title by author)
  const details = document.createElement("p");
  details.textContent = `${book.title} written by ${book.author}`;
  if (book.alreadyRead) details.style.color = "red"; // requirement

  // image (100px width)
  const img = document.createElement("img");
  img.src = book.image;
  img.alt = `${book.title} cover`;
  img.style.width = "100px";

  // assemble
  card.appendChild(details);
  card.appendChild(img);
  frag.appendChild(card);
});

section.appendChild(frag);


// ===== Exercise ...
