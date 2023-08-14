import { getBrewPubs } from "./BrewPubSlice";
import { getBrewPubsResponse, mockNetworkResponse } from "../Helper/Tests.Data";
import Store from './App/Store'

/**
 * Testing the initial state
 */
  
test("Should return initial state", () => {
    expect(
      reducer(undefined, {
        type: undefined,
      })
    ).toEqual(initialState);
  });

  /**
   * Testing the get Brew Pubs thunk
   */
  
  describe("List all brew pubs", () => {
    beforeAll(() => {
      mockNetworkResponse();
    });
  
    it("Shoudl be able to fetch the brew pub list", async () => {
      const result = await Store.dispatch(getBrewPubs());
  
      const brewPubs = result.payload;
  
      expect(result.type).toBe("breweries/getBrewPubs");
      expect(brewPubs).toEqual(getBrewPubsResponse);
  
      const state = Store.state.getBreweries;
  
      expect(state.brewPubs).toEqual(getBrewPubsResponse);
    });
  });