const app = require("../app");
const request = require("supertest");

describe("Test para registrar usuario", () => {
  test("VALID EMAIL - POST /registrar-correo", function (done) {
    return request(app)
      .post("/registrar-correo")
      .send({
        nombre: "Franklin",
        email: "franklinmessi42@gmail.com",
      })
      .set("Content-Type", "application/json")
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        } else {
          done();
        }
      });
  });
  test("INVALID EMAIL - POST /registrar-correo", function (done) {
    return request(app)
      .post("/registrar-correo")
      .send({
        nombre: "Franklin",
        email: "franklinmessi42",
      })
      .set("Content-Type", "application/json")
      .expect(500)
      .end(function (err, res) {
        if (err) {
          return done(err);
        } else {
          done();
        }
      });
  });
});
