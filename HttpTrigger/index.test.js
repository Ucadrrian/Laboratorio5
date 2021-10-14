const httpFunction = require("./index");
const context = require("../testing/Context");

test("Http trigger example", async () => {
  const request = {
    query: { name: "alfredo Adrian" },
  };

  var interations = 10000;
  console.time("FUNCTION #1");
  for (var i = 0; i < interations; i++) {
    await functions(context, request);
  }
  console.timeEnd("FUNCTION #1");
  expect(context.res.body).toEqual("welcome, Adrian");
  expect(context.log.mock.calls.length).tobe(100000);
});
