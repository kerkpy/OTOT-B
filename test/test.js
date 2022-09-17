chai = require("chai")
chaiHttp = require("chai-http")
app = require("../index")

chai.use(chaiHttp)
chai.should()

describe("Contacts", ()=> {
  describe("GET /", () => {
    // Test to creat a single student record
    it("should create a single student record", (done) => {
      const name = "kai";
      chai.request(app)
          .post(`/api/contacts/`)
          .set('content-type', 'application/x-www-form-urlencoded')
          .send({name: "kai", phone:"98765432", gender:"female", email:"banan@gasd.com"})
          .end((err, res) => {
              res.should.have.status(200);
              done();
          });
  });
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
    it("should get a single student record", (done) => {
         const name = "kai";
         chai.request(app)
             .get(`/api/contacts/${name}`)
             .end((err, res) => {
                 res.should.have.status(200);
                 done();
              });
     });

     // Test to update a single student record
    it("should update a single student record", (done) => {
      const name = "kai";
      chai.request(app)
          .put(`/api/contacts/${name}`)
          .set('content-type', 'application/x-www-form-urlencoded')
          .send({phone:"98765432", gender:"female", email:"banan@gasd.com"})
          .end((err, res) => {
              res.should.have.status(200);
              done();
           });
  });

  it("should delete a single student record", (done) => {
    const name = "kai";
    chai.request(app)
        .delete(`/api/contacts/${name}`)
        .end((err, res) => {
            res.should.have.status(200);
            done();
         });
});

    
});





})