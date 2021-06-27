import {shortProcess, longProcess} from '../../src/index';

describe(`something`, function() {
  it("should finish fine", async function() {
    await shortProcess();
    expect(1).toBe(1);
  });

  it("should fail with a timeout", async function() {
    await longProcess();
    expect(1).toBe(1);
  });

  it("should finish fine again", async function() {
    jest.setTimeout(10*1000); // not currently working...
    await longProcess();
    expect(1).toBe(1);
  });
});
