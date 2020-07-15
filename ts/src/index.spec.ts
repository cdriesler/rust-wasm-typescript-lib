import { Foo } from './index'
import { expect } from 'chai'
import 'mocha'

describe('given an initialized class instance', () => {

    let foo: Foo = new Foo()

    before(async () => {
        await foo.initialize()
    })

    it('should allow me to call rust functions', () => {
        const message = foo.doSomething()
        expect(message).to.equal("Hey mocha, wasm says hello!")
    })

})

describe('given an uninitialized class instance', () => {
    
    let foo: Foo = new Foo()

    it('should throw an error if I call rust functions', () => {
        expect(() => foo.doSomething()).to.throw()
    })

})