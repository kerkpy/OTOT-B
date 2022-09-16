chai = require("chai")
chaiHttp = require("chai-http")
app = require("../index")

chai.use(chaiHttp)
chai.should()

describe("Contacts", ()=> {
  describe("GET /", () => {
    // Test to get all students record
    it("should get all contacts record", (done) => {
         chai.request(app)
             .get('/api/contacts')
             .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('object');
                 done();
              });
     });
    
    // Test to get single student record
    it("should not get a single student record", (done) => {
         const id = 5;
         chai.request(app)
             .get(`/api/contacts/${id}`)
             .end((err, res) => {
                 res.should.have.status(404);
                 done();
              });
     });
});





})