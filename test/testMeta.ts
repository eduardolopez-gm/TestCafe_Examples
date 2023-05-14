import { expect } from "chai"

var chai = require('chai'), 
chaiHttp = require('chai-http')
chai.use(chaiHttp)

fixture.meta('version', '1')('Meta fixture')
    .page('https://www.saucedemo.com/')

test.meta('env', 'QA')('first test with meta tags', async t =>{
    await t
    .typeText('#user-name', 'standard_user')
    .typeText('#password', 'secret_sauce')
    .click('#login-button')
})
test('second test with meta tags', async t =>{
    await t
    .typeText('#user-name', 'standard_user')
    .typeText('#password', 'secret_sauce')
    
})

test('trying chai API calls', async t => {
    
    let response2 = await  chai.request('https://reqres.in/api').get('/users/2')
    //console.log(JSON.stringify(response2))
    expect(response2).to.have.property('status').eql(200)
})
