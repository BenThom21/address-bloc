const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
    beforeEach(() => {
        this.menu = new MenuController();
    });

    

    describe("#remindMe()", () => {
        it("should print out the motivational message if working", () => {
            expect(this.menu.remindMe()).toBeDefined();
        });
    })
});

