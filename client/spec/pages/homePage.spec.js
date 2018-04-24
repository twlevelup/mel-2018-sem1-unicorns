const HomePage = require("../../src/js/pages/homePage");

describe("HomePage", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#template", () => {
    it("should have a template", () => {
      const page = new HomePage();
      expect(page.template()).toContain("<div>Hello, World!</div>");
    });
  });

  describe("#leftButtonEvent", () => {
    it("goes to contacts page", () => {
      const props = {
        navigate: () => {}
      };
      const page = new HomePage(props);
      spyOn(page, "navigate");

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("contacts");
    });
  });

  describe("#bottomButtonEvent", () => {
    it("scrolls page down", () => {
      const page = new HomePage({ watchFace });

      page.bottomButtonEvent();

      expect(watchFace.scrollTop).toEqual(40);
    });
  });
});
