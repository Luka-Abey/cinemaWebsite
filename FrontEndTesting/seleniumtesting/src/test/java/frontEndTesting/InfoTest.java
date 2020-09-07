package frontEndTesting;

import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.chrome.ChromeDriver;


public class InfoTest {
	
	static ChromeDriver driver;
	@Before
	public void init() {
		System.setProperty("webdriver.chrome.driver",
				"/Users/ahmadnaeem/Desktop/QACinema/FrontEndTesting/seleniumtesting/src/test/resources/chromedriver");
    driver = new ChromeDriver();
	} 
	@Test
	public void navToInfo() throws InterruptedException{
	  driver.get("localhost:3000/");
	  driver.findElementByXPath("//*[@id=\"root\"]/switch/div/nav/div[1]/div/a[1]/a").click();
	  assertEquals("http://localhost:3000/about", driver.getCurrentUrl());
	  Thread.sleep(15000);
	  driver.close();
	}
}






