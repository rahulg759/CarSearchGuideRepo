package stepdefination;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarSearchPageActions;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.NewCarSearchPageActions;
import pages.actions.UsedCarsSearchPageActions;

public class NewCarSearch {

	CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();
	CarSearchPageActions carSearchPageActions = new CarSearchPageActions();
	UsedCarsSearchPageActions usedCarsSearchPageActions = new UsedCarsSearchPageActions();
	NewCarSearchPageActions newCarSearchPageActions = new NewCarSearchPageActions();

	@When("^Click on \"([^\"]*)\" link on New Search Cars$")
	public void click_on_link_on_New_Search_Cars(String btnName) throws Throwable {
		newCarSearchPageActions.clickOnSearchCarsMenu();
	}

	@When("^Select carbrand as \"([^\"]*)\" from AnyMake dropdown on New Search Cars$")
	public void select_carbrand_as_from_AnyMake_dropdown_on_New_Search_Cars(String carBrand) throws Throwable {
		newCarSearchPageActions.selectCarMaker(carBrand);
	}

	@When("^Select car model on New Search Car page$")
	public void select_car_model_on_New_Search_Car_page(List<String> list) throws Throwable {
		String menu = list.get(1);
		System.out.println("Menu is selected : " + menu);
		newCarSearchPageActions.selectCarModel(menu);
	}

	@When("^Select location as \"([^\"]*)\" from locations dropdown on New Search Cars$")
	public void select_location_as_from_locations_dropdown_on_New_Search_Cars(String location) throws Throwable {
		newCarSearchPageActions.selectLocation(location);
	}

	@When("^Select price as \"([^\"]*)\" from prices dropdown on New Search Cars$")
	public void select_price_as_from_prices_dropdown_on_New_Search_Cars(String price) throws Throwable {
		newCarSearchPageActions.selectPrice(price);
	}

	@When("^Click on Find my next car button on New Search Cars$")
	public void click_on_Find_my_next_car_button_on_New_Search_Cars() throws Throwable {

	}

	@Then("^I should see the searched cars list on New Search Cars$")
	public void i_should_see_the_searched_cars_list_on_New_Search_Cars() throws Throwable {
		newCarSearchPageActions.clickOnFindMyNextCarButton();
	}

}
