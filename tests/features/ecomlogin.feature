@regression
Feature: User Authentication test

  Background:
    Given User navigates to the application url "https://ecommerce-playground.lambdatest.io/"
    And User Click on the login link

 @login 
  Scenario Outline: Login Should be Success
    And User enters the Username as "<username>"
    And User enters the Password as "<password>" 
    Then Login Should be Success
    
    Examples:
      | username             | password    |
      | TestSonali@gmail.com | Test@123456 |
     
 @login 
  Scenario Outline: Login Should Not be Success
    And User enters the Username as "<username>"
    And User enters the Password as "<password>"  
    When User Click on login button
    Then Login Should Not be Success

    Examples:
      | username             | password    |
      | sonali               | Pass1234    |
 @logout 
  Scenario: Logout Should be Success
    And User enters the Username as "TestSonali@gmail.com" 
    And User enters the Password as "Test@123456"
    When User Click on login button
    Then Login Should be Success
    When User Click on logout button
    Then Logout Should be Success
@data
    Scenario: Send User Data Using Datatable
      Given Send the below User details
      | username             | password    |
      | SAT-Test             |  12345      |
      | SAT-Test1            |  12345111   |

    

