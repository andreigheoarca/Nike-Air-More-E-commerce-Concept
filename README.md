# Nike Air More E-commerce Concept

To date this is my biggest project in the portfolio and one that I had in mind to create as soon as I finished my first to do list. This project is essentialy a CRUD application that simulates a store with a shopping cart for the Nike Air More sneaker shoes.

This project is also loosely based on a Figma design that I created for practice quite some time ago, which can be found at the following link: 
https://dribbble.com/shots/12964258-Nike-More

## Link

https://gregarious-profiterole-24ce63.netlify.app/

## Usage

The website consists of two pages, "home" and "shoes". The shoes page or the "products" page can be accessed either by using the nav link at the top or by pressing the "Order Now" button at the bottom of the page.

Once the user arrives at the shoes page, a list of dynamically generated cards are displayed in the DOM with three different color variants of the sneakers, which the user can add to cart by pressing the "Add to cart" button. After the user adds a product the cart, the shopping cart menu will automatically open and display the item in the top right corner of the page, right under the "shopping cart". 

There, the user can see the dynamically calculated total of the item or all the items currently displayed in the cart and  and he/she can also choose to increase or decrease the amount of each item by pressing the up or down icons. Decreasing the item by less than 1 will automatically remove the item from the shopping cart as well as from the local storage.

As soon as an item is added or it's quanitity is updated in the cart, it is also added or updated in the local storage.

The shopping cart can be opened by clicking on the "shopping cart" icon in top right corner of the page and it can be closed by the red "X" icon present in the shopping cart menu.

The user can also filter the shoe cards present in the page by typing a query term in the search bar present in the nav bar. This will filter the items by using the words or terms present in the title of each card.

The shopping cart data will persist between pages as it is synchronized with the local storage. While the shopping cart or the local storage contains items, there will also appear a red dot above the "shopping cart" icon, indicating that there are items currently present in it.  

## Project lookback and future considerations 

I would definitely consider this my biggest and probably best project currently in my portfolio. It is definitely the one I worked most on and I did my best to make it as polished as I could. 

It was definitely quite challenging at times, the most notable one being synchronizing the shopping cart items quantity with the local storage and targeting each individual item in the cart. 

There is definitely a lot of room for refactoring there as I keep accessing the local storage over and over again inside of each function so I plan on coming back to that at a later time. 

I ultimately fixed the targeting issues using the event object and by traversing the DOM and I managed to simulate data persistence by populating the DOM with data extracted from the local storage. I also used the dataset attribute quite a bit in order to target the specific shoes easier in order to know which item amount to increase in the storage.

For this project I also tried to practice as much as I could with modules and I split some of the functionality up, such as formatting the price of the shoes, displaying the products in the DOM and toggling the shopping cart on and off.

There are most definitely way more elegant solutions to what I have tried to achieve here but for my current level of knowledge I am quite proud of how it ultimately turned out and I am looking forward to learning more and hopefully coming back to improve an refactor later on.
