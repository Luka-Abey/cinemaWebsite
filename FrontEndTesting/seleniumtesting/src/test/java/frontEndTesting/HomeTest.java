package frontEndTesting;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.chrome.ChromeDriver;

public class HomeTest {
	
	static ChromeDriver driver;
  
  @Before
  public void init() {

	  System.setProperty("webdriver.chrome.driver",
				"/Users/ahmadnaeem/Desktop/QACinema/FrontEndTesting/seleniumtesting/src/test/resources/chromedriver");
       driver = new ChromeDriver();
      
  } 

  
  @Test
  public void getToHome() throws InterruptedException{
      
      driver.get("localhost:3000/");
      assertEquals("http://localhost:3000/", driver.getCurrentUrl());

}
}