package qacinematest;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HomeTest {
	
	static ChromeDriver driver;
  
  @Before
  public void init() {

      
       driver = new ChromeDriver();
      
  } 

  
  @Test
  public void getToHome() throws InterruptedException{
      WebElement target;
      
      driver.get("localhost:3000/");
      assertEquals("http://localhost:3000/", driver.getCurrentUrl());


//      
//      target = driver.findElementByXPath("//*[@id=\"inputPlayerno\"]");
//      target.sendKeys("19");
//      
//      Thread.sleep(2000);
//
//      driver.findElementByXPath("//*[@id=\"form-row5\"]/div/center/button").click();
//      
//      Thread.sleep(2000);
//      
//      driver.findElementByXPath("//*[@id=\"navbarSupportedContent\"]/ul/li[3]/a").click();
//      
//      Thread.sleep(2000);
//         
//  }	

}
}