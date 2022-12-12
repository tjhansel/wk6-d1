 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  describe('Test for testData Object', () => {
    test('First name Patten',() => {
      expect(testData.firstName).toEqual('Patten')
    })

    test('Title should be number', () => {
      expect(typeof testData.title).toBe('string')
    })
  })

  describe('Tests for convert length function',() =>{
    test('Function returns an array', ()=>{
      expect(typeof convertLength(140)).toBe('object')
    })

    test('Returns the proper time array', ()=>{
      expect(convertLength(125)).toEqual([2,5])
    })
  })