class VendingMachine{
    constructor(inventory) {
        this.inventory = [
            {
                name: "Pepsi",
                price: 1.25,
                stock: 5
            },
            {   
                name: "Snickers",
                price: 1.5,
                stock: 2
            },
            {
                name: "Ice Coffee",
                price: 1.0,
                stock: 3
            },
            {
                name: "Ice Tea",
                price: 2.0,
                stock: 0
            },
            {
                name: "Peanuts",
                price: 1.1,
                stock: 8
            },
            {
                name: "Juice",
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
            let name = this.inventory[i].name;
            inventory[name] = { stock: this.inventory[i].stock}
        }
        // console.log(inventory)
        return inventory
    }

    refillInventory(itemName, amount) {
        if (this.inventory.find(item => item.name === itemName ) === undefined ||
        typeof itemName !== 'string') {
            return 'the item is not exist'
        }
        if (typeof amount !== 'number' || amount < 1) {
            return 'please enter a valid value'
        }
        let currentAmount = 0;
        let result = this.inventory.find(item => item.name === itemName)
        currentAmount = result.stock;
        result.stock = currentAmount + amount;
        let refilledItem = {};
        refilledItem.name = result.name;
        refilledItem.stock = result.stock;
        return refilledItem
        // console.log(refilledItem)
    }

    resuplychange(coinName, amount) {
        if(this.change.find(coin => coin.name === coinName) === undefined ||
        typeof coinName !== 'string') {
            return 'not a valid coin'
        }
        if (typeof amount !== 'number' || amount < 1) {
            return 'please enter a positive number '
        }
        let currentAmount = 0;
        let result = this.change.find(coin => coin.name === coinName);
        currentAmount = result.count;
        result.count = currentAmount + amount;
        let refilledCoin = {};
        refilledCoin.name = result.name;
        refilledCoin.count = result.count;
        // console.log(refilledCoin)
        return refilledCoin
    }

}

module.exports = VendingMachine;

