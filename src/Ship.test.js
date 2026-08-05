import Ship from "./Ship.js";

describe("Test Ship Class", () => {
  test("isSunk should work properly", () => {
    const destroyer = new Ship(4, "destroyer");
    destroyer.hit();
    expect(destroyer.sinkStatus).toBe(false);
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.sinkStatus).toBe(true);
  });

  test("isSunk should work properly", () => {
    const destroyer = new Ship(5, "destroyer");
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.sinkStatus).toBe(false);
    destroyer.hit();
    expect(destroyer.sinkStatus).toBe(true);
  });

  test("isSunk should work properly", () => {
    const destroyer = new Ship(3, "destroyer");
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.sinkStatus).toBe(false);
    destroyer.hit();
    expect(destroyer.sinkStatus).toBe(true);
  });
});
