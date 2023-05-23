package com.orangehrmlive.demo.pages;


import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    By username = By.xpath("//input[@placeholder='Username']");
    By password = By.xpath("//input[@placeholder='Password']");
    By loginBtn = By.xpath("//button[@type='submit']");
    By logo = By.xpath("//div[@class='orangehrm-login-logo']//img[@alt='orangehrm-logo']");
    By loginText = By.xpath("//h5[contains(.,'Login')]");


    public void enterUserName(String username1) {
        log.info("Enter User Name: ".toString());
        sendTextToElement(username, username1);
    }

    public void enterPassword(String pass) {
        log.info("Enter Password: ".toString());
        sendTextToElement(password, pass);
    }

    public void clickOnLoginBtn() {
        log.info("Click on Login Button: ".toString());
        pmClickOnElement(loginBtn);
    }

    public void verifyLogoIsDisplayed(){

    }

    public void verifyLoginText(){
        log.info("Verify Login Text: ".toString());
        verifyText("Login", loginText, "Login text not displayed");
    }



}
