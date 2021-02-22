var chai = require("chai");
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

const request = chai.request("https://reqres.in")

const expect = chai.expect;

describe('DELETE User', () => {

    context('Quando eu testo o user service usando o método DELETE', () => {

        it('Deve deletar um usuário', (done) => {
            request
                .delete('/api/users')
                .query({job: "Delet Method"})
                .end((err, res) => {
                    expect(res).to.has.status(204);
                    expect(res.body).to.eql({});
                    done();
                })                               
        })
    })
    
})