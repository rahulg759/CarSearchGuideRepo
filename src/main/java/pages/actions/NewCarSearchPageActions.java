package pages.actions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.NewCarSearchPageLocators;
import pages.locators.UsedCarSearchPageLocators;
import utils.SeleniumDriver;

public class NewCarSearchPageActions {

	// WebDriver driver=null;
	NewCarSearchPageLocators newCarSearchPageLocators = null;

	public void clickOnSearchCarsMenu() {
		// moveToCarsForSaleMenu();
		newCarSearchPageLocators.usedCarLink.click();

	}

	public NewCarSearchPageActions() {
		// this.driver=driver;
		this.newCarSearchPageLocators = new NewCarSearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), newCarSearchPageLocators);
	}

	public void selectCarMaker(String carBrand) {

		/*
		 * SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='makes']")).click()
		 * ; SeleniumDriver.getDriver().findElement(By.xpath(
		 * ".//*[@id='block-system-main']/div/div/div/div/div/form")) .click();
		 */
		Select selectCarMaker = new Select(newCarSearchPageLocators.carMakerDropDown);
		selectCarMaker.selectByVisibleText(carBrand);

	}

	public void selectCarModel(String carModel) {
		Select selectCarModel = new Select(newCarSearchPageLocators.selectModelDropDown);
		selectCarModel.selectByVisibleText(carModel);
	}

	public void selectLocation(String location) {
		/*
		 * SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='locations']")).
		 * click(); SeleniumDriver.getDriver().findElement(By.xpath(
		 * ".//*[@id='block-system-main']/div/div/div/div/div/form")) .click();
		 */
		Select selectLocation = new Select(newCarSearchPageLocators.selectLocation);
		selectLocation.selectByVisibleText(location);
	}

	public void selectPrice(String price) {
		// SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='price-max']")).click();
		// SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='price-max']")).click();
		Select selectPrice = new Select(newCarSearchPageLocators.priceList);
		List<WebElement> list = selectPrice.getOptions();
		for (WebElement s : list) {
			System.out.println("--->" + s.getText());
		}
		selectPrice.selectByVisibleText(price);
	}

	public void clickOnFindMyNextCarButton() {
		SeleniumDriver.getDriver().findElement(By.xpath(".//*[@id='block-system-main']/div/div/div/div/div/form"))
				.click();
		newCarSearchPageLocators.findMyNextCarButton.click();

	}

}
