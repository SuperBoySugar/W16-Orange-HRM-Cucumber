package com.orangehrmlive.demo.steps;

import com.orangehrmlive.demo.pages.AddUserPage;
import com.orangehrmlive.demo.pages.AdminPage;
import com.orangehrmlive.demo.pages.DashBoardpage;
import com.orangehrmlive.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UserTest {
    @Given("^I enter User name \"([^\"]*)\"$")
    public void iEnterUserName(String username)  {
        new LoginPage().enterUserName(username);

    }

    @When("^I enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String pass)  {
        new LoginPage().enterPassword(pass);

    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginBtn();
    }

    @And("^I click on admin tab$")
    public void iClickOnAdminTab() {
        new DashBoardpage().clickOnAdminTab();
    }

    @And("^I verify text system user$")
    public void iVerifyTextSystemUser() {
        new DashBoardpage().verifyTextSystemUser();
    }

    @And("^I click on add button$")
    public void iClickOnAddButton() {
        new DashBoardpage().clickOnAddBtn();
    }

    @And("^I verify text add user$")
    public void iVerifyTextAddUser() {
        new AddUserPage().verifyTextAddUser();
    }

    @And("^I click on user role$")
    public void iClickOnUserRole() throws InterruptedException {
        new AddUserPage().clickOnUserRole();
    }



    @And("^I input Employee name \"([^\"]*)\"$")
    public void iInputEmployeeName(String employeeName) throws InterruptedException {
        new AddUserPage().inputEmployeeName(employeeName);

    }

    @And("^I input user name \"([^\"]*)\"$")
    public void iInputUserName(String userName)  {
        new AddUserPage().inputUserName(userName);

    }

    @And("^I select status disable$")
    public void iSelectStatusDisable() {
        new AddUserPage().selectStatusDisable();
    }

    @And("^I input password field \"([^\"]*)\"$")
    public void iInputPasswordField(String password)  {
        new AddUserPage().inputPasswordField(password);

    }

    @And("^I input confirm password field \"([^\"]*)\"$")
    public void iInputConfirmPasswordField(String confirmPassword)  {
        new AddUserPage().inputConfirmPasswordField(confirmPassword);

    }

    @And("^I click on save button$")
    public void iClickOnSaveButton() throws InterruptedException {
        new AddUserPage().clickOnSaveBtn();
    }

    @And("^I verify success message$")
    public void iVerifySuccessMessage() {
        new AddUserPage().verifySuccessMessage();
    }


    @And("^I input UserName \"([^\"]*)\" into username field$")
    public void iInputUserNameIntoUsernameField(String userName1) {
        new AdminPage().inputUserNameField(userName1);

    }

    @And("^I select status$")
    public void iSelectStatus() {
        new AdminPage().selectStatus();
    }

    @And("^I click on search button$")
    public void iClickOnSearchButton() {
        new AdminPage().clickOnSearchBtn();
    }

    @Then("^I verify text record found$")
    public void iVerifyTextRecordFound() {
        new AdminPage().verifyTextRecordFound();
    }

    @And("^I input Employee name \"([^\"]*)\" into employee name field$")
    public void iInputEmployeeNameIntoEmployeeNameField(String employeeName1) throws InterruptedException {
        new AdminPage().inputEmployeeName(employeeName1);

    }

    @And("^I click on checkbox$")
    public void iClickOnCheckbox() {
        new AdminPage().clickOnCheckbox();
    }

    @And("^I click on delete button$")
    public void iClickOnDeleteButton() {
        new AdminPage().clickOnDeleteBtn();
    }

    @And("^I click on pop up$")
    public void iClickOnPopUp() {
        new AdminPage().clickOnPopup();
    }

    @Then("^I verify delete message$")
    public void iVerifyDeleteMessage() {
        new AdminPage().verifyDeleteMessage();
    }

    @And("^I select status enable$")
    public void iSelectStatusEnable() {
        new AdminPage().selectStatus();
    }
}
