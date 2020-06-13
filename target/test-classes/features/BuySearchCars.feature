@Search-Car 
Feature: Acceptance Testing to validate the Search Car page is working fine. 

	In order to validate the search car pages is working fine. We will do the acceptance testing.

Scenario: Validate the Serach car page 

	Given I am on homepage "https://www.carsguide.com.au/" of carsguide portal 
	When I move to the menu 
		|Menu      |
		|buy + sell|
		|reviews   |
		|news      |
		|advice    |
	And Click on "Search Cars" link on Search Cars 
	And Select carbrand as "BMW" from AnyMake on Search Cars 
	And Select car model on Search Car page 
		|carModel|
		|1 Series| 
	And Select location as "NSW - Hunter" from locations dropdown on Search Cars 
	And Select price as "$45,000" from prices dropdown on Search Cars 
	And Click on Find my next car button on Search Cars 
	Then I should see the searched cars list on Search Cars 
	And The page title should be "Bmw 118d Under 45000 for Sale Hunter NSW | carsguide"