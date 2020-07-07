$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuyNewCarSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance Testing to validate the New Search Car page is working fine.",
  "description": "\r\nIn order to validate the new search car pages is working fine. We will do the acceptance testing.",
  "id": "acceptance-testing-to-validate-the-new-search-car-page-is-working-fine.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@New-Search-Car"
    }
  ]
});
formatter.before({
  "duration": 8082983300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate the New Serach Car Page",
  "description": "",
  "id": "acceptance-testing-to-validate-the-new-search-car-page-is-working-fine.;validate-the-new-serach-car-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage \"https://www.carsguide.com.au/\" of carsguide portal",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 10
    },
    {
      "cells": [
        "buy + sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 12
    },
    {
      "cells": [
        "news"
      ],
      "line": 13
    },
    {
      "cells": [
        "advice"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Click on \"New Search Cars\" link on New Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select carbrand as \"Alfa Romeo\" from AnyMake dropdown on New Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select car model on New Search Car page",
  "rows": [
    {
      "cells": [
        "carModel"
      ],
      "line": 18
    },
    {
      "cells": [
        "4C"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select location as \"NSW - All\" from locations dropdown on New Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select price as \"$3,000\" from prices dropdown on New Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on Find my next car button on New Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see the searched cars list on New Search Cars",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
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
  "duration": 3729627300,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 248903700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Search Cars",
      "offset": 10
    }
  ],
  "location": "NewCarSearch.click_on_link_on_New_Search_Cars(String)"
});
formatter.result({
  "duration": 3520518000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alfa Romeo",
      "offset": 20
    }
  ],
  "location": "NewCarSearch.select_carbrand_as_from_AnyMake_dropdown_on_New_Search_Cars(String)"
});
formatter.result({
  "duration": 2403450800,
  "status": "passed"
});
formatter.match({
  "location": "NewCarSearch.select_car_model_on_New_Search_Car_page(String\u003e)"
});
formatter.result({
  "duration": 800535200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 20
    }
  ],
  "location": "NewCarSearch.select_location_as_from_locations_dropdown_on_New_Search_Cars(String)"
});
formatter.result({
  "duration": 675468200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$3,000",
      "offset": 17
    }
  ],
  "location": "NewCarSearch.select_price_as_from_prices_dropdown_on_New_Search_Cars(String)"
});
formatter.result({
  "duration": 1564972800,
  "status": "passed"
});
formatter.match({
  "location": "NewCarSearch.click_on_Find_my_next_car_button_on_New_Search_Cars()"
});
formatter.result({
  "duration": 54900,
  "status": "passed"
});
formatter.match({
  "location": "NewCarSearch.i_should_see_the_searched_cars_list_on_New_Search_Cars()"
});
formatter.result({
  "duration": 616381200,
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
  "duration": 375900,
  "status": "passed"
});
formatter.after({
  "duration": 5794101000,
  "status": "passed"
});
formatter.uri("BuySearchCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance Testing to validate the Search Car page is working fine.",
  "description": "\r\nIn order to validate the search car pages is working fine. We will do the acceptance testing.",
  "id": "acceptance-testing-to-validate-the-search-car-page-is-working-fine.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Car"
    }
  ]
});
formatter.before({
  "duration": 5618001800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate the Serach car page",
  "description": "",
  "id": "acceptance-testing-to-validate-the-search-car-page-is-working-fine.;validate-the-serach-car-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage \"https://www.carsguide.com.au/\" of carsguide portal",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 10
    },
    {
      "cells": [
        "buy + sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 12
    },
    {
      "cells": [
        "news"
      ],
      "line": 13
    },
    {
      "cells": [
        "advice"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Click on \"Search Cars\" link on Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select carbrand as \"BMW\" from AnyMake on Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select car model on Search Car page",
  "rows": [
    {
      "cells": [
        "carModel"
      ],
      "line": 18
    },
    {
      "cells": [
        "1 Series"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select location as \"NSW - Hunter\" from locations dropdown on Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select price as \"$45,000\" from prices dropdown on Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on Find my next car button on Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see the searched cars list on Search Cars",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
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
  "duration": 3615160400,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 1090290000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCars.click_on_link_on_Search_Cars(String)"
});
formatter.result({
  "duration": 2396550500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 20
    }
  ],
  "location": "SearchCars.select_carbrand_as_from_AnyMake_on_Search_Cars(String)"
});
formatter.result({
  "duration": 1461657800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.select_car_model_on_Search_Car_page(String\u003e)"
});
formatter.result({
  "duration": 989151600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 20
    }
  ],
  "location": "SearchCars.select_location_as_from_locations_dropdown_on_Search_Cars(String)"
});
formatter.result({
  "duration": 713831000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 17
    }
  ],
  "location": "SearchCars.select_price_as_from_prices_dropdown_on_Search_Cars(String)"
});
formatter.result({
  "duration": 323977600,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.click_on_Find_my_next_car_button_on_Search_Cars()"
});
formatter.result({
  "duration": 87700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_should_see_the_searched_cars_list_on_Search_Cars()"
});
formatter.result({
  "duration": 456258000,
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
  "duration": 151700,
  "status": "passed"
});
formatter.after({
  "duration": 5212494400,
  "status": "passed"
});
formatter.uri("BuyUsedCarSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance Testing to validate the Used Search Car page is working fine.",
  "description": "\r\nIn order to validate the used search car pages is working fine. We will do the acceptance testing.",
  "id": "acceptance-testing-to-validate-the-used-search-car-page-is-working-fine.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 6394165200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate the Used Serach Car page",
  "description": "",
  "id": "acceptance-testing-to-validate-the-used-search-car-page-is-working-fine.;validate-the-used-serach-car-page",
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
  "name": "Click on \"Used Search Cars\" link on Used Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select carbrand as \"Audi\" from AnyMake dropdown on Used Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select car model on Used Search Cars",
  "rows": [
    {
      "cells": [
        "carModel"
      ],
      "line": 17
    },
    {
      "cells": [
        "A3"
      ],
      "line": 18
    },
    {
      "cells": [
        "A4"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select location as \"NSW - Riverina\" from locations dropdown on Used Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select price as \"$2,000\" from prices dropdown on Used Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on Find my next car button on Used Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see the searched cars list on Used Search Cars",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "The page title should be \"Used Audi A3 Under 2000 for Sale Riverina NSW | carsguide\"",
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
  "duration": 2515525200,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 360418100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Search Cars",
      "offset": 10
    }
  ],
  "location": "UsedCarSearch.click_on_link_on_Used_Search_Cars(String)"
});
formatter.result({
  "duration": 1445824600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 20
    }
  ],
  "location": "UsedCarSearch.select_carbrand_as_from_AnyMake_dropdown_on_Used_Search_Cars(String)"
});
formatter.result({
  "duration": 1402939500,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearch.select_car_model_on_Used_Search_Cars(String\u003e)"
});
formatter.result({
  "duration": 3198111300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Riverina",
      "offset": 20
    }
  ],
  "location": "UsedCarSearch.select_location_as_from_locations_dropdown_on_Used_Search_Cars(String)"
});
formatter.result({
  "duration": 331263400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,000",
      "offset": 17
    }
  ],
  "location": "UsedCarSearch.select_price_as_from_prices_dropdown_on_Used_Search_Cars(String)"
});
formatter.result({
  "duration": 2449626900,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearch.click_on_Find_my_next_car_button_on_Used_Search_Cars()"
});
formatter.result({
  "duration": 72800,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearch.i_should_see_the_searched_cars_list_on_Used_Search_Cars()"
});
formatter.result({
  "duration": 2972103400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A3 Under 2000 for Sale Riverina NSW | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCars.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 183500,
  "status": "passed"
});
formatter.after({
  "duration": 2087381000,
  "status": "passed"
});
});