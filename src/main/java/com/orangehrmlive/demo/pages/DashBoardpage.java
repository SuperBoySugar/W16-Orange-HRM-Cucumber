package com.orangehrmlive.demo.pages;


import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

public class DashBoardpage extends Utility {
    private static final Logger log = LogManager.getLogger(DashBoardpage.class.getName());

    public DashBoardpage() {
        PageFactory.initElements(driver, this);
    }


    By admin = By.cssSelector("li:nth-child(1) > a:nth-child(1) > span:nth-child(2)");
    By systemUser = By.xpath("//h5[text()='System Users']");
    By addBtn = By.xpath("//button[text()=' Add ']");
    By dashBoard = By.xpath("//h6[text()='Dashboard']");
    By companyLogo = By.xpath("//img[@alt='OrangeHRM']");




    public void clickOnAdminTab(){
        log.info("Click on admin tab: ".toString());
        pmClickOnElement(admin);
    }

    public void verifyTextSystemUser(){
        log.info("Verify text system user: ".toString());
        verifyText("System Users",systemUser,"Text is incorrect");
    }

    public void clickOnAddBtn(){
        log.info("Click on Add button: ".toString());
        pmClickOnElement(addBtn);
    }

    public void verifyTextDashboard(){
        log.info("Verify text Dashboard: ".toString());
        verifyText("Dashboard",dashBoard,"Page is not displayed");
    }

    public void verifyTextCompanyLogo(){
        log.info("Verify text Company Logo: ".toString());
        verifyText("OrangeHRM",companyLogo,"Logo is not correct");
    }




}
