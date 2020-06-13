package stepdefination;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarSearchPageActions;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.NewCarSearchPageActions;
import pages.actions.UsedCarsSearchPageActions;
import utils.SeleniumDriver;

public class SearchCars {

	CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();
	CarSearchPageActions carSearchPageActions = new CarSearchPageActions();
	UsedCarsSearchPageActions usedCarsSearchPageActions = new UsedCarsSearchPageActions();
	NewCarSearchPageActions newCarSearchPageActions = new NewCarSearchPageActions();

	@Given("^I am on homepage \"([^\"]*)\" of carsguide portal$")
	public void i_am_on_homepage_of_carsguide_portal(String website) throws Throwable {

		SeleniumDriver.openPage(website);
	}

	@When("^I move to the menu$")
	public void i_move_to_the_menu(List<String> list) {
		String menu = list.get(1);
		System.out.println("Menu is selected : " + menu);
		carsGuideHomePageActions.moveToCarsForSaleMenu();
	}

	@When("^Click on \"([^\"]*)\" link on Search Cars$")
	public void click_on_link_on_Search_Cars(String btnName) throws Throwable {
		carsGuideHomePageActions.clickOnSearchCarsMenu();
	}

	@When("^Select carbrand as \"([^\"]*)\" from AnyMake on Search Cars$")
	public void select_carbrand_as_from_AnyMake_on_Search_Cars(String carBrand) throws Throwable {
		carSearchPageActions.selectCarMaker(carBrand);
	}

	@When("^Select car model on Search Car page$")
	public void select_car_model_on_Search_Car_page(List<String> list) throws Throwable {
		String menu = list.get(1);
		System.out.println("Menu is selected : " + menu);
		carSearchPageActions.selectCarModel(menu);
	}

	@When("^Select location as \"([^\"]*)\" from locations dropdown on Search Cars$")
	public void select_location_as_from_locations_dropdown_on_Search_Cars(String location) throws Throwable {
		carSearchPageActions.selectLocation(location);
	}

	@When("^Select price as \"([^\"]*)\" from prices dropdown on Search Cars$")
	public void select_price_as_from_prices_dropdown_on_Search_Cars(String price) throws Throwable {
		carSearchPageActions.selectPrice(price);
	}

	@When("^Click on Find my next car button on Search Cars$")
	public void click_on_Find_my_next_car_button_on_Search_Cars() throws Throwable {

	}

	@Then("^I should see the searched cars list on Search Cars$")
	public void i_should_see_the_searched_cars_list_on_Search_Cars() throws Throwable {
		carSearchPageActions.clickOnFindMyNextCarButton();
	}

	@Then("^The page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String arg1) throws Throwable {

	}

}
