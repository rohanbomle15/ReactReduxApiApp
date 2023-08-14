import { getBreweries } from "./BrewerySlice";
import { getBreweriesResponse, mockNetworkResponse } from "../Helper/Tests.Data";
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
   * Testing the get Breweries thunk
   */
  
  describe("List all breweries", () => {
    beforeAll(() => {
      mockNetworkResponse();
    });
  
    it("Shoudl be able to fetch the breweries list", async () => {
      const result = await Store.dispatch(getBreweries());
  
      const breweries = result.payload;
  
      expect(result.type).toBe("breweries/getBreweries");
      expect(breweries).toEqual(getBreweriesResponse);
  
      const state = Store.state.getBreweries;
  
      expect(state.breweries).toEqual(getBreweriesResponse);
    });
  });