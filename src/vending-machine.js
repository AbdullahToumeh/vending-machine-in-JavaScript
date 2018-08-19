class VendingMachine{
    constructor(inventory) {
        this.inventory = [
            {
                itemName: "Pepsi",
                price: 1.25,
                stock: 5
            },
            {   
                itemName: "Snickers",
                price: 1.5,
                stock: 2
            },
            {
                itemName: "Ice Coffee",
                price: 1.0,
                stock: 3
            },
            {
                itemName: "Ice Tea",
                price: 2.0,
                stock: 0
            },
            {
                itemName: "Peanuts",
                price: 1.1,
                stock: 8
            },
            {
                itemName: "Juice",
                price: 3.0,
                stock: 6
            }
          ];
        this.change = [
            {
                name: "toonie",
                count: 10,
                value: 2.0
              },
              {
                name: "loonie",
                count: 10,
                value: 1.0
              },
              {
                name: "quarter",
                count: 10,
                value: 0.25
              },
              {
                name: "dime",
                count: 10,
                value: 0.1
              },
              {
                name: "nickel",
                count: 10,
                value: 0.05
              }
        ]
    }

    printingInventory() {
        let i = 0
        let inventory = {}
        for (i = 0; i < this.inventory.length; i++) {
            let name = this.inventory[i].itemName;
            inventory[name] = { stock: this.inventory[i].stock}
        }
        // console.log(inventory)
        return inventory
    }
}

module.exports = VendingMachine;

