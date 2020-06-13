@New-Search-Car 
Feature: Acceptance Testing to validate the New Search Car page is working fine. 

	In order to validate the new search car pages is working fine. We will do the acceptance testing.

Scenario: Validate the New Serach Car Page 

	Given I am on homepage "https://www.carsguide.com.au/" of carsguide portal 
	When I move to the menu 
		|Menu      |
		|buy + sell|
		|reviews   |
		|news      |
		|advice    |
	And Click on "New Search Cars" link on New Search Cars 
	And Select carbrand as "Alfa Romeo" from AnyMake dropdown on New Search Cars 
	And Select car model on New Search Car page 
		|carModel|
		|4C|
	And Select location as "NSW - All" from locations dropdown on New Search Cars 
	And Select price as "$3,000" from prices dropdown on New Search Cars 
	And Click on Find my next car button on New Search Cars 
	Then I should see the searched cars list on New Search Cars 
	And The page title should be "Bmw 118d Under 45000 for Sale Hunter NSW | carsguide"