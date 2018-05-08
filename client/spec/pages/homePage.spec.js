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
      let time = new Date(Date.now()).toLocaleString().split(",")[1];
      const am_pm = time.split(" ")[2];
      const curr_hour = time.split(":")[0];
      const curr_min = time.split(":")[1];
      expect(page.template()).toContain(
        '<p class="clock-time">' +
          curr_hour +
          ":" +
          curr_min +
          " " +
          am_pm +
          "</p>"
      );
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
