package runner;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import org.testng.annotations.Test;

import com.cucumber.listener.ExtentCucumberFormatter;
import com.relevantcodes.extentreports.ExtentReports;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//If we want to run against JUnit then use @RunWith annotation of Junit
//@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features", 
glue = { "stepdefination" },
monochrome = true, 
tags= {"@New-Search-Car,@Used-Search-Cars,@Search-Car"},
plugin = {
		"html:target/cucumber-html-report", "json:target/cucumber-reports/cucumber.json",
		"junit:target/cucumber-reports/cucumber.xml", "com.cucumber.listener.ExtentCucumberFormatter" 
		}
)

//If we want to run against TestNG then use @Test annotation of TestNG
@Test
public class RunnerCukes extends AbstractTestNGCucumberTests {

	@org.testng.annotations.BeforeClass
	public static void setup() {
		// Initiates the extent report and generates the output in the
		// output/Run/<unique timestamp>/report.html file by default
		SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyy_hhmmss");

		java.util.Date curDate = new java.util.Date();
		String strDate = sdf.format(curDate);

		String fileName = System.getProperty("user.dir") + "\\target\\extentreports\\" + strDate + ".html";

		File file = new File(fileName);
		ExtentCucumberFormatter.initiateExtentCucumberFormatter(file, false);

		// static report name
		// load the extent config xml to customize on report
		ExtentCucumberFormatter.loadConfig(new File("src/test/resources/extent-config.xml"));

		// User can add system information as follows
		ExtentCucumberFormatter.addSystemInfo("Browser Name", "chrome");
		ExtentCucumberFormatter.addSystemInfo("Browser Version", "V31.0");
		ExtentCucumberFormatter.addSystemInfo("Selenium Version", "v2.53.0");

		// Also we can add system information using hash map
		Map<String, String> sysInfo = new HashMap<String, String>();
		sysInfo.put("cucumber version", "v1.2.3");
		sysInfo.put("Extent Cucumber version", "v1.1.0");
		ExtentCucumberFormatter.addSystemInfo(sysInfo);

	}

}
