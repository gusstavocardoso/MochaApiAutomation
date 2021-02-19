var chai = require("chai");
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

const request = chai.request("https://reqres.in")

const expect = chai.expect;

describe('PUT User', () => {

    context('Quando eu testo a API usando o método PUT', () => {

        it('Deve atualzar o job do usuário', (done) => {
            request
                .put('/api/users')
                .query({id: "146"})
                .send({
                    "name": "Gustavo Cardoso",
                    "job": "QA Engineer Automation"
                })
                .end((err, res) => {
                    expect(res).to.has.status(200);
                    console.log(res.body);
                    done();
                })           
    
        })
    }) 
})