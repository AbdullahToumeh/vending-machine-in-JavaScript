const VendingMachine = require("../src/vending-machine.js")

let vendingMachine = new VendingMachine();
let vendingMachine1 = new VendingMachine();


describe('Vending Machine', () => {
    // printing inventory
    describe('when the user ask to see inventory ', () => {
        it('Should print a list of the inventory with all the items and details', () => {
            expect(vendingMachine1.printingInventory()).toEqual({
                Pepsi: { stock: 5 },
                Snickers: { stock: 2 },
                'Ice Coffee': { stock: 3 },
                'Ice Tea': { stock: 0 },
                Peanuts: { stock: 8 },
                Juice: { stock: 6 }
            })
        })
    })
    // refilling inventory
    describe('when refill the inventory ', () => {
        it('Should return the refilled items ', () => {
            expect(vendingMachine.refillInventory('Pepsi', 7)).toEqual({
                name: 'Pepsi',
                stock: 12,
            })
        })
        it('Should return error if the item is not excits ', () => {
            expect(vendingMachine.refillInventory('kider', 7)).toEqual('the item is not exist')
        })
        it('Should return error if the amount of items is not a positive numbver ', () => {
            expect(vendingMachine.refillInventory('Pepsi', -1)).toEqual('please enter a valid value')
        })
    })
    // re-supplying change
    describe('when refill the inventory ', () => {
        it('Should return the new values ', () => {
            expect(vendingMachine.resuplychange('loonie', 10)).toEqual({ name: 'loonie', count: 20 })
        })
    })
    // dispensing inventory based on payment
    describe('when making purchase and need to give change back ', () => {
        it('Should dispense the required product and give the change back  ', () => {
            expect(vendingMachine.purchase('Pepsi', 10)).toEqual({ 
                change: { toonie: 4, quarter: 3 },
                leftCoins: { toonie: 6, loonie: 20, quarter: 7, dime: 10, nickel: 10 },
                product: { name: 'Pepsi' } 
            })
        })
        it('Should dispense the item and return no change and return the left coins in the machine ', () => {
            expect(vendingMachine.purchase('Pepsi', 1.25)).toEqual({
                "change": null, 
                "leftCoins": {"dime": 10, "loonie": 20, "nickel": 10, "quarter": 7, "toonie": 6}, 
                "product": {"name": "Pepsi"}
            })
        })
        it('Should throw an error if the item is not exist ', () => {
            expect(vendingMachine.purchase('kinder', 10)).toEqual('the item is not excisting')
        })
        it('Should throw an error if the item is not a string ', () => {
            expect(vendingMachine.purchase( 1 , 10)).toEqual('Please enter a valid value')
        })
        it('Should throw an error if the money is not a number ', () => {
            expect(vendingMachine.purchase( 1 , 'loonie')).toEqual('Please enter a valid value')
        })
        it('Should ask to enter more money when the customer does not enter enough money ', () => {
            expect(vendingMachine.purchase( 'Pepsi' , 1)).toEqual('money is not enough to complete the purchase')
        })
        it('Should say that we do not have the item any more if it is not existence anymore ', () => {
            expect(vendingMachine.purchase( 'Ice Tea' , 2)).toEqual('we seems that we are out of this item, choose another one')
        })

    })

})