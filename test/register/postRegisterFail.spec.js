var chai = require("chai");
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

const request = chai.request("https://reqres.in")

const expect = chai.expect;

describe('POST Register Fail', () => {

    context('Quando eu testo o service register o método POST', () => {

        it('Deve falhar ao registar um usuário', (done) => {
            request
                .post('/api/register')
                .send({
                    "email": "sydney@fife"
                })
                .end((err, res) => {
                    expect(res).to.has.status(400);
                    console.log(res.body);
                    done();
                })                               
        })
    })
    
})