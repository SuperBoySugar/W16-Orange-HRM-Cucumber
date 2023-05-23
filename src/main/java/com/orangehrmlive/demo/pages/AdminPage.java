package com.orangehrmlive.demo.pages;


import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

public class AdminPage extends Utility {

    private static final Logger log = LogManager.getLogger(AdminPage.class.getName());

    public AdminPage() {
        PageFactory.initElements(driver, this);
    }

    By systemUsers = By.xpath("//h5[text()='System Users']");
    By userName = By.xpath("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']");
    By userRole = By.xpath("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]");
    By admin = By.xpath("//div[@class='oxd-select-dropdown --positon-bottom']/div[2]");
    By employeeName = By.xpath("//input[@placeholder='Type for hints...']");
    By dropDown = By.xpath("//div[@role='listbox']");
    By status = By.cssSelector("[class] .oxd-grid-item--gutters:nth-of-type(4)[tabindex]");
    By enable = By.xpath("//div[@class='oxd-select-text-input'][normalize-space()='Enabled']");
    By disabled = By.xpath("//div[@class='oxd-select-dropdown --positon-bottom']/div[3]");
    By searchBtn = By.cssSelector("button[type='submit']");
    By recordFound = By.xpath("//span[normalize-space()='(1) Record Found']");
    By checkbox = By.xpath("//div[@class='oxd-table-card-cell-checkbox']//i[@class='oxd-icon bi-check oxd-checkbox-input-icon']");
    By deleteSelected = By.xpath("//button[text()='Delete Selected']");
    By popup = By.xpath("");
    By deleteMessage = By.xpath("");


    public void verifyTextSystemUsers() {
        log.info("Verify text system users: ".toString());
        verifyText("System Users", systemUsers, "Text is not displayed");
    }

    public void inputUserNameField(String userName2) {
        log.info("Input user name field: ".toString());
        sendTextToElement(userName, userName2);
    }

    public void clickOnUserRole() throws InterruptedException {
        log.info("Click on user role: ".toString());
        pmClickOnElement(userRole);
        Thread.sleep(1000);
        pmClickOnElement(admin);
    }

    public void inputEmployeeName(String employeeName1) throws InterruptedException {
        log.info("Input Employee name: ".toString());
        sendTextToElement(employeeName, employeeName1);
        Thread.sleep(1000);
        doMouseHoverAndClick(dropDown);
    }

    public void selectStatus() {
        log.info("Select status: ".toString());
        pmClickOnElement(status);
        pmClickOnElement(disabled);
    }

    public void clickOnSearchBtn() {
        log.info("Click on search button: ".toString());
        pmClickOnElement(searchBtn);
    }

    public void verifyTextRecordFound() {
        log.info("Verify text Record found: ".toString());
        verifyText("(1) Record Found", recordFound, "Record not found");
    }

    public void clickOnCheckbox() {
        log.info("Click on checkbox: ".toString());
        pmClickOnElement(checkbox);
    }

    public void clickOnDeleteBtn() {
        log.info("click on delete button: ".toString());
        pmClickOnElement(deleteSelected);
    }

    public void clickOnPopup() {
        log.info("Click on popup: ".toString());
        pmClickOnElement(popup);
    }

    public void verifyDeleteMessage() {
        log.info("Verify delete message: ".toString());
        verifyText("Successfully Deleted", deleteSelected, "User is not deleted");
    }

}
