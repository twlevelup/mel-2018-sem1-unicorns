const SecondContactsPage = require("../../src/js/pages/secondContactsPage");

describe("ContactsPage no. 2", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#template", () => {
    it("should have a template", () => {
      const page = new SecondContactsPage();
      expect(page.template()).toContain("<h2>0431 111 111</h2>");
    });

    it("should have a template with specific contacts", () => {
      const contacts = [{ name: "hi", phoneNumber: "1234" }];
      const props = { contacts };
      const page = new SecondContactsPage(props);
      expect(page.template()).toContain("<h2>1234</h2>");
    });
  });

  describe("#topButtonEvent", () => {
    it("goes to root page", () => {
      const props = {
        navigate: () => {}
      };
      const page = new SecondContactsPage(props);
      spyOn(page, "navigate");

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("/");
    });
  });
});
