const app = require("../index");
const supertest = require("supertest");

test("test hello world", async () => {
  await supertest(app)
    .get("/")
    .expect(200)
    .then((res) => {
      expect(res.text).toBe("Hello World!");
    });
});

test("test bye world", async () => {
  await supertest(app)
    .get("/bye")
    .expect(200)
    .then((res) => {
      expect(res.body.bye).toBe("world");
    });
});
