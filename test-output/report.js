$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCars.feature");
formatter.feature({
  "line": 1,
  "name": "Acceptance Testing to validate the Search Car page is working fine.",
  "description": "\r\nIn order to validate the search car pages is working fine. We will do the acceptance testing.",
  "id": "acceptance-testing-to-validate-the-search-car-page-is-working-fine.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7108088800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validate the Serach car page",
  "description": "",
  "id": "acceptance-testing-to-validate-the-search-car-page-is-working-fine.;validate-the-serach-car-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage \"https://www.carsguide.com.au/\" of carsguide portal",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 9
    },
    {
      "cells": [
        "buy + sell"
      ],
      "line": 10
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 11
    },
    {
      "cells": [
        "news"
      ],
      "line": 12
    },
    {
      "cells": [
        "advice"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Click on \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select carbrand as \"BMW\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select model as \"  118D\" from models dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select location as \"NSW - Hunter\" from locations dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select price as \"$45,000\" from prices dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on \"Find my next car\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the searched cars list",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "The page title should be \"Bmw 118d Under 45000 for Sale Hunter NSW | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 18
    }
  ],
  "location": "SearchCars.i_am_on_homepage_of_carsguide_portal(String)"
});
formatter.result({
  "duration": 2420079000,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 614736200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCars.click_on_link(String)"
});
formatter.result({
  "duration": 1679152700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 20
    }
  ],
  "location": "SearchCars.select_carbrand_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 3364901300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "  118D",
      "offset": 17
    }
  ],
  "location": "SearchCars.select_model_as_from_models_dropdown(String)"
});
formatter.result({
  "duration": 31015902400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 20
    }
  ],
  "location": "SearchCars.select_location_as_from_locations_dropdown(String)"
});
formatter.result({
  "duration": 227694200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 17
    }
  ],
  "location": "SearchCars.select_price_as_from_prices_dropdown(String)"
});
formatter.result({
  "duration": 328076000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find my next car",
      "offset": 10
    }
  ],
  "location": "SearchCars.click_on_button(String)"
});
formatter.result({
  "duration": 1186989400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_should_see_the_searched_cars_list()"
});
formatter.result({
  "duration": 27900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 118d Under 45000 for Sale Hunter NSW | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCars.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 220500,
  "status": "passed"
});
formatter.after({
  "duration": 5850920800,
  "status": "passed"
});
});