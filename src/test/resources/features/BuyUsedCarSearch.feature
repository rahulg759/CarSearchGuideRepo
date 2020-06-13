@Used-Search-Cars 
Feature: Acceptance Testing to validate the Used Search Car page is working fine. 

	In order to validate the used search car pages is working fine. We will do the acceptance testing.

Scenario: Validate the Used Serach Car page 
	Given I am on homepage "https://www.carsguide.com.au/" of carsguide portal 
	When I move to the menu 
		|Menu      |
		|buy + sell|
		|reviews   |
		|news      |
		|advice    |
	And Click on "Used Search Cars" link on Used Search Cars 
	And Select carbrand as "Audi" from AnyMake dropdown on Used Search Cars 
	And Select car model on Used Search Cars 
		|carModel|
		|A3|
		|A4|
	And Select location as "NSW - Riverina" from locations dropdown on Used Search Cars 
	And Select price as "$2,000" from prices dropdown on Used Search Cars 
	And Click on Find my next car button on Used Search Cars 
	Then I should see the searched cars list on Used Search Cars 
	And The page title should be "Used Audi A3 Under 2000 for Sale Riverina NSW | carsguide"