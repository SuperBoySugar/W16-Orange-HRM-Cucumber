
Feature: Login Test

  As a user I should able to login successfully and Verify the login page

  Background:   I am on Login page

@sanity
  Scenario:     User should able to login successfully
    Given       I enter user name "Admin"
      When      I enter password "admin123"
      And       I click on login button
      Then      I verify text Dashboard


  Scenario:     User should verify Company logo on login page
    Given       I launch the application
    Then        I verify company Logo

@smoke
    Scenario:   User should able to logout successfully
      Given     I enter user name "Admin"
      When      I enter password "admin123"
      And       I click on login button
      And       I click on user profile logo
      And       I mouse hover and click on logout button
      Then      I verify login text