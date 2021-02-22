var chai = require("chai");
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

const request = chai.request("https://reqres.in")

const expect = chai.expect;

describe('GET User', () => {

    context('Quando eu testo o user service usando o método GET', () => {

        it('Deve listar todos os usuários', (done) => {
            request
                .get("/api/users")
                .end((err, res) => {                
                    expect(res).to.has.status(200);
                    console.log(res.body);
                    done();
                })
        })
    
        it('Deve listar usuário pelo id', (done) => {
            request
                .get("/api/users")
                .query({id: "2"})
                .end((err, res) => {
                    expect(res).to.has.status(200);
                    console.log(res.body);
                    done();
                })
        })
    
        it('Deve listar usuário pelo nome', (done) => {
            request
                .get("/api/users")
                .query({name: "Gustavo Cardoso"})
                .end((err, res) => {
                    expect(res).to.has.status(200);
                    console.log(res.body);
                    done();
                })
        })
    
        it('Deve retornar status code 404', (done) => {
            request
                .get("/api/users")
                .query({id: "1000"})
                .end((err, res) => {               
                    expect(res).to.has.status(404);
                    expect(res.body).to.eql({});
                    console.log(res.body);
                    done();
                })
        })
    })
    
})