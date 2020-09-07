package frontEndTesting;


import static org.junit.Assert.assertEquals;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ContactTest {
    
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
          driver.findElementByXPath("//*[@id=\"root\"]/switch/div/nav/div[1]/div/a[2]/a").click();
          assertEquals("http://localhost:3000/contact", driver.getCurrentUrl());

}
      @After
      public void sendEmail() throws InterruptedException{
          WebElement target;
          
          target = driver.findElementByXPath("//*[@id=\"exampleForm.ControlInput1\"]");
          target.sendKeys("TEST@Gmail.com");
          
          target = driver.findElementByXPath("//*[@id=\"exampleForm.ControlInput1\"]");
          target.sendKeys("TEST");
          
          target = driver.findElementByXPath("//*[@id=\"exampleForm.ControlTextarea1\"]");
          target.sendKeys("Hello I am TEST");
          
          driver.findElementByXPath("//*[@id=\"root\"]/switch/div/div[1]/div/div[1]/form/button").click();
          
          Thread.sleep(15000);
          driver.close();
      }
}
