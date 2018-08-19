const VendingMachine = require("../src/vending-machine.js")

let vendingMachine = new VendingMachine();


describe('Vending Machine', () => {
    // printing inventory
    describe('when the user ask to see inventory ', () => {
        it('Should print a list of the inventory with all the items and details', () => {
            expect(vendingMachine.printingInventory()).toEqual({
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
        it('Should ', () => {
            expect().toEqual()
        })
    })
    // re-supplying change
    describe('when refill the inventory ', () => {
        it('Should ', () => {
            expect().toEqual()
        })
    })
    // dispensing inventory based on payment
    describe('when refill the inventory ', () => {
        it('Should ', () => {
            expect().toEqual()
        })
    })
    // returning change as coins (eg. $0.35 is 1 quarter and 1 dime)
    describe('when refill the inventory ', () => {
        it('Should ', () => {
            expect().toEqual()
        })
    }) 
})