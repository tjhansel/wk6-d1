const {returnTwo,add, greeting}= require("./functions")

test('Test for returnTwo',()=>{
    expect(returnTwo()).toEqual(2)
})

describe('Test for Greeting',()=>{
    test('Greeting James',()=>{
        expect(greeting('James')).toEqual("Hello, James.")
    })
    test('Greeting Jill',()=>{
        expect(greeting('Jill')).toEqual('Hello, Jill.')
    })
})

describe('Add function test',()=>{
    test('1+2',()=>{
        expect(add(1,2)).toEqual(3)
    })
    test('5,9',()=>{
        expect(add(5,9)).toEqual(14)
    })
})