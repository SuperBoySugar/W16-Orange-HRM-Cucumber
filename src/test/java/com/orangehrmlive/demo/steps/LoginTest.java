package com.orangehrmlive.demo.steps;

import com.orangehrmlive.demo.pages.AddUserPage;
import com.orangehrmlive.demo.pages.DashBoardpage;
import com.orangehrmlive.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTest {
    @Given("^I enter user name \"([^\"]*)\"$")
    public void iEnterUserName(String username)  {
        new LoginPage().enterUserName(username);

    }

    @When("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String pass)  {
        new LoginPage().enterPassword(pass);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginBtn();
    }

    @Then("^I verify text Dashboard$")
    public void iVerifyTextDashboard() {
        new DashBoardpage().verifyTextDashboard();
    }



    @Given("^I launch the application$")
    public void iLaunchTheApplication() {

    }

    @Then("^I verify company Logo$")
    public void iVerifyCompanyLogo() {
        new LoginPage().verifyLogoIsDisplayed();
    }

    @And("^I click on user profile logo$")
    public void iClickOnUserProfileLogo() {
        new AddUserPage().clickOnUserProfileLogo();
    }

    @And("^I mouse hover and click on logout button$")
    public void iMouseHoverAndClickOnLogoutButton() {
        new AddUserPage().mouseHoverAndClickOnLogoutButton();
    }

    @Then("^I verify login text$")
    public void iVerifyLoginText() {
        new LoginPage().verifyLoginText();
    }
}
