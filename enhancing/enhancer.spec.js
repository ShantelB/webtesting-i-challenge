const enhancer = require('./enhancer.js');
// test away!

var item = {
    name: "Black Widow",
    enhancement: 17,
    durability: 100 
}

describe("first test", () => { 
    describe("repair item", () => {
    it('repair to 100', () => {
        const expectedDurability = 100;
        const actualDurability = enhancer.repair(item)
        expect(actualDurability.durability).toBe(expectedDurability)
        })
    })

    describe("success item", () => {
        it('enhance item if < 20', () => {
            const actualEnhancement = enhancer.succeed(item)
            expect(actualEnhancement.enhancement).toBeLessThan(20)
            })
        }) 

        describe("fail item", () => {
            it('fail if enhancement is < 15', () => {
            const expectedEnhancement = 13;
            const actualEnhancement = enhancer.fail(item)
            expect(actualEnhancement.enhancement).toBeGreaterThan(expectedEnhancement)
                })
            })

            describe("fail item", () => {
                it('fail if enhancement is >= 15', () => {
                const expectedEnhancement = 15;
                const actualEnhancement = enhancer.fail(item)
                expect(actualEnhancement.enhancement).toBeGreaterThanOrEqual(expectedEnhancement)
             })
        })

        describe("fail item", () => {
            it('fail if enhancement is > 16', () => {
            const expectedEnhancement = 12;
            const actualEnhancement = enhancer.fail(item)
            expect(actualEnhancement.enhancement).toBeGreaterThan(expectedEnhancement)
            })
      })
})