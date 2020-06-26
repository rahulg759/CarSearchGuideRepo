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
  "duration": 12070344700,
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
  "duration": 2500574900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 1430346000,
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
  "duration": 460921400,
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
  "duration": 998977500,
  "status": "passed"
});
formatter.match({
  "location": "NewCarSearch.select_car_model_on_New_Search_Car_page(String\u003e)"
});
formatter.result({
  "duration": 677778100,
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
  "duration": 190286600,
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
  "duration": 537701100,
  "status": "passed"
});
formatter.match({
  "location": "NewCarSearch.click_on_Find_my_next_car_button_on_New_Search_Cars()"
});
formatter.result({
  "duration": 14900,
  "status": "passed"
});
formatter.match({
  "location": "NewCarSearch.i_should_see_the_searched_cars_list_on_New_Search_Cars()"
});
formatter.result({
  "duration": 2054724000,
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
  "duration": 42600,
  "status": "passed"
});
formatter.after({
  "duration": 6528746500,
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
  "duration": 9469989900,
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
  "duration": 6009255300,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 8073286100,
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
  "duration": 31635528300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Search Cars\"}\n  (Session info: chrome\u003d83.0.4103.106)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 10.0.19041 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 31.45 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027LAPTOP-E069LGRR\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54269}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\WINDOWS\\TEMP\\scoped_dir10632_1475571757}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d83.0.4103.106, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: b6445312157bfceb8a2b3413083582f0\n*** Element info: {Using\u003dlink text, value\u003dSearch Cars}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat pages.actions.CarsGuideHomePageActions.clickOnSearchCarsMenu(CarsGuideHomePageActions.java:27)\r\n\tat stepdefination.SearchCars.click_on_link_on_Search_Cars(SearchCars.java:37)\r\n\tat ✽.And Click on \"Search Cars\" link on Search Cars(BuySearchCars.feature:15)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "SearchCars.select_car_model_on_Search_Car_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "SearchCars.click_on_Find_my_next_car_button_on_Search_Cars()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchCars.i_should_see_the_searched_cars_list_on_Search_Cars()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 61443537200,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 10.000\n  (Session info: chrome\u003d83.0.4103.106)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 10.0.19041 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 61.45 seconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027LAPTOP-E069LGRR\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54269}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\WINDOWS\\TEMP\\scoped_dir10632_1475571757}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d83.0.4103.106, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: b6445312157bfceb8a2b3413083582f0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:335)\r\n\tat stepdefination.AfterActions.tearDown(AfterActions.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:295)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:84)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:90)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
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
  "duration": 85600,
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
  "duration": 4581318800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCars.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 1025763600,
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
  "duration": 800214100,
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
  "duration": 1023468100,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearch.select_car_model_on_Used_Search_Cars(String\u003e)"
});
formatter.result({
  "duration": 375260700,
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
  "duration": 210057600,
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
  "duration": 756919800,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearch.click_on_Find_my_next_car_button_on_Used_Search_Cars()"
});
formatter.result({
  "duration": 39200,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearch.i_should_see_the_searched_cars_list_on_Used_Search_Cars()"
});
formatter.result({
  "duration": 380248400,
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
  "duration": 94000,
  "status": "passed"
});
formatter.after({
  "duration": 5217863600,
  "status": "passed"
});
});