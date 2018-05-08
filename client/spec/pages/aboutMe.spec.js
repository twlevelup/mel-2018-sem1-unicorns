const AboutMe = require("../../src/js/pages/aboutMe");

describe("AboutMe", () => {
  it("should have a template with specific details if no props are passed", () => {
    const page = new AboutMe();
    expect(page.template()).toContain("<h1>Yashwanth Yellapragada</h1>");
  });
  it("should display the wearers full name and address when they are passed in", () => {
    const details = [
      {
        firstName: "James",
        lastName: "Peters",
        address: "99 Bourke Street"
      }
    ];
    const props = { details };
    const page = new AboutMe(props);
    expect(page.template()).toContain("<h1>James Peters</h1>");
  });
  it("goes to root page when the top button is pressed", () => {
    const props = { navigate: () => {} };
    const page = new AboutMe(props);
    spyOn(page, "navigate");

    page.topButtonEvent();
    expect(page.navigate).toHaveBeenCalledWith("/");
  });
});
