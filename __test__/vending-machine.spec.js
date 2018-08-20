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
    })
    // re-supplying change
    describe('when refill the inventory ', () => {
        it('Should return the new values ', () => {
            expect(vendingMachine.resuplychange('loonie', 10)).toEqual({ name: 'loonie', count: 20 })
        })
    })
  

})