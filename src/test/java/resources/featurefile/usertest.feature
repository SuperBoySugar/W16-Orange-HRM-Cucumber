
Feature: User Test

  As a user I should able to add user, search created user, delete user and also verify
  deleted user should not available

  Background:  I am on login page
@smoke
    Scenario:   User should able add user successfully
      Given     I enter User name "Admin"
      When      I enter Password "admin123"
      And       I click on Login button
      And       I click on admin tab
      And       I verify text system user
      And       I click on add button
      And       I verify text add user
      And       I click on user role
      And       I input Employee name "Odis Adalwin"
      And       I input user name "Morris"
      And       I select status enable
      And       I input password field "SweetPickle99"
      And       I input confirm password field "SweetPickle99"
      And       I click on save button
      And       I verify success message
@sanity
  Scenario:     User should search the created user and verify it
    Given       I enter user name "Admin"
    When        I enter password "admin123"
    And         I click on login button
    And         I click on admin tab
    And         I verify text system user
    And         I input UserName "Morris" into username field
    And         I click on user role
    And         I input Employee name "Odis Adalwin" into employee name field
    And         I select status
    And         I click on search button
    Then        I verify text record found
@smoke
    Scenario:   User should able to delete the user record successfully
      Given     I enter user name "Admin"
      When      I enter password "admin123"
      And       I click on login button
      And       I click on admin tab
      And       I verify text system user
      And       I input UserName "Morris" into username field
      And       I click on user role
      And       I click on search button
      And       I verify text record found
      And       I click on checkbox
      And       I click on delete button
      And       I click on pop up
      Then      I verify delete message


      Scenario:   User should able to verify deleted user record
        Given     I enter user name "Admin"
        When      I enter password "admin123"
        And       I click on login button
        And       I click on admin tab
        And       I input UserName "Morris" into username field
        And       I click on user role
        And       I select status
        And       I click on search button

