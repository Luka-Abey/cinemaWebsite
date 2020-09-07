package frontEndTesting;

import static org.junit.Assert.assertEquals;


import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ProfileTest {
	
	static ChromeDriver driver;
	WebElement target;

	@Before
	public void init() {
		System.setProperty("webdriver.chrome.driver",
					"/Users/ahmadnaeem/Desktop/QACinema/FrontEndTesting/seleniumtesting/src/test/resources/chromedriver");
	    driver = new ChromeDriver();
	      
	  }

	  @Test
	  public void getToProfile() {
		  driver.get("localhost:3000/");
		  target = driver.findElement(By.xpath("//*[@id=\"root\"]/switch/div/div[1]/div/div[1]/a/img"));
		  target.click();
	      assertEquals("http://localhost:3000/profile/5f48e13c5249083458e4682c", driver.getCurrentUrl());
	  }
	  
	  @Test
	  public void correctProfile() {
		  driver.get("http://localhost:3000/profile/5f48e13c5249083458e4682c");
		  target = driver.findElement(By.xpath("//*[@id=\"root\"]/switch/div/div[1]/div/div/div[3]/h2"));
		  assertEquals("Parasite", target.getText());
	  }
	  
	  @Test
	  public void writeComment() {
		  driver.get("http://localhost:3000/profile/5f48e13c5249083458e4682c");
		  target = driver.findElement(By.xpath("//*[@id=\"exampleForm.ControlInput1\"]"));
		  target.sendKeys("seleniumtest@gmail.com");
		  target = driver.findElement(By.xpath("//*[@id=\"exampleForm.ControlInput2\"]"));
		  target.sendKeys("Selenium Test Comment");
		  target = driver.findElement(By.xpath("//*[@id=\"exampleForm.ControlTextarea1\"]"));
		  target.sendKeys("New Comment");
		  target = driver.findElement(By.xpath("/html/body/div/switch/div/div[2]/div/div/div[1]/form/button"));
		  target.click();
		  target = driver.findElement(By.xpath("//*[@id=\"root\"]/switch/div/div[2]/div/div/div[2]/div/div/div[1]/a/div/h5"));
		  
		  assertEquals("Selenium Test Comment", target.getText());
	  }
	  
	  @Test
	  public void deletComment() {
		  driver.get("http://localhost:3000/profile/5f48e13c5249083458e4682c");
		  driver.findElement(By.xpath("//*[@id=\"root\"]/switch/div/div[2]/div/div/div[2]/div/div/div[1]/button")).click();
	  }
	  
	  
	  
	  @After
	  public void close() {
		  driver.quit();
	  }
	  
	  
}
