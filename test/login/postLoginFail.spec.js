var chai = require("chai");
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

const request = chai.request("https://reqres.in")

const expect = chai.expect;

describe('POST Login Fail', () => {

    context('Quando eu testo o login service usando o método POST', () => {

        it('Deve falhar ao fazer login', (done) => {
            request
                .post('/api/register')
                .send({
                    "email": "peter@klaven"
                })
                .end((err, res) => {
                    expect(res).to.has.status(400);
                    expect(res.body.error).to.equal("Missing password")
                    console.log(res.body);
                    done();
                })                               
        })
    })
    
})