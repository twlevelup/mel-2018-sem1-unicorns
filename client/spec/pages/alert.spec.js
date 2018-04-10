const Alert = require("../../src/js/pages/alert");

describe("Alert", () => {
  it("should have a template with an alert to take medication", () => {
    const schedule = [{ subject: "Take your medicine", time: "10am" }];
    const page = new Alert(schedule);
    expect(page.template()).toContain("<h1>Take your medicine</h1>");
  });
});
