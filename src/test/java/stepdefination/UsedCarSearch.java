package stepdefination;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarSearchPageActions;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.UsedCarsSearchPageActions;
import utils.SeleniumDriver;

public class UsedCarSearch {

	CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();
	CarSearchPageActions carSearchPageActions = new CarSearchPageActions();
	UsedCarsSearchPageActions usedCarsSearchPageActions = new UsedCarsSearchPageActions();

	@When("^Click on \"([^\"]*)\" link on Used Search Cars$")
	public void click_on_link_on_Used_Search_Cars(String arg1) throws Throwable {
		usedCarsSearchPageActions.clickOnSearchCarsMenu();
	}

	@When("^Select carbrand as \"([^\"]*)\" from AnyMake dropdown on Used Search Cars$")
	public void select_carbrand_as_from_AnyMake_dropdown_on_Used_Search_Cars(String carBrand) throws Throwable {
		usedCarsSearchPageActions.selectCarMaker(carBrand);
	}

	@When("^Select car model on Used Search Cars$")
	public void select_car_model_on_Used_Search_Cars(List<String> list) throws Throwable {
		String menu = list.get(1);
		System.out.println("Menu is selected : " + menu);
		usedCarsSearchPageActions.selectCarModel(menu);
	}

	@When("^Select location as \"([^\"]*)\" from locations dropdown on Used Search Cars$")
	public void select_location_as_from_locations_dropdown_on_Used_Search_Cars(String location) throws Throwable {
		usedCarsSearchPageActions.selectLocation(location);
	}

	@When("^Select price as \"([^\"]*)\" from prices dropdown on Used Search Cars$")
	public void select_price_as_from_prices_dropdown_on_Used_Search_Cars(String price) throws Throwable {
		usedCarsSearchPageActions.selectPrice(price);
	}

	@When("^Click on Find my next car button on Used Search Cars$")
	public void click_on_Find_my_next_car_button_on_Used_Search_Cars() throws Throwable {

	}

	@Then("^I should see the searched cars list on Used Search Cars$")
	public void i_should_see_the_searched_cars_list_on_Used_Search_Cars() throws Throwable {
		usedCarsSearchPageActions.clickOnFindMyNextCarButton();
	}

}
