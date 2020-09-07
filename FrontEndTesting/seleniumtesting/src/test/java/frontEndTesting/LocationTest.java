package frontEndTesting;

import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.chrome.ChromeDriver;
public class LocationTest {
    
    static ChromeDriver driver;
      
      @Before
      public void init() {
          
    	  System.setProperty("webdriver.chrome.driver",
					"/Users/ahmadnaeem/Desktop/QACinema/FrontEndTesting/seleniumtesting/src/test/resources/chromedriver");
	    driver = new ChromeDriver();
          
      } 
      
      @Test
      public void navToContactUs() throws InterruptedException{

          
          driver.get("localhost:3000/");
          driver.findElementByXPath("//*[@id=\"root\"]/switch/div/nav/div[1]/div/a[3]").click();
          assertEquals("http://localhost:3000/map", driver.getCurrentUrl());
          
          Thread.sleep(15000);
          driver.close();

}
}
