#BAMAZON

An interactive storefront that runs in the console using node.  This storefront in no way resembles Amazon, except in name.

#How It Works

##Bamazon Customer
This program consists of three seperate, but related apps.  The first, BamazonCustomer.js, allows a "customer" to place an order from the Bamazon store.  A check is then performed on the store inventory and the customer is either alerted that their order cannot be completed, or they are shown the total amount owed (but no credit card number is requested).  Behind the scenes, the quantity ordered by the customer is deducted from the store quantity (which is stored in a SQL table).  At the same time, the $ amount of the order is sent to seperate SQL table to allow the corportate executives to track earnings by department.  

###BamazonCustomer.js Screenshot

![first screenshot](screenshots/firstShot.png)

##Bamazon Manager
The second app, BamazonManager.js, allows a "manager" to view available items, view low inventory (less than five in stock), add to the inventory, or add a new product.  

###BamazonManager.js Screenshot
![second screenshot](screenshots/screenShot3.png)

##Bamazon Executive
The final app, BamazonExecutive.js, allows an "Executive" to view sales by department or add a new department.  Adding a new department is an important feature for the executive.  While the manager is capable of adding new products, including a department, revenue earned from that department cannot be tracked until after the manager had added that department to executive database.

###BamazonExecutive.js Screenshot
![third screenshot](screenshots/screenshot4.png)





