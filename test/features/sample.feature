
Feature: sample man
   Sample feature description
  Scenario: failed request to unexistent port
    Given I make a "GET" request to "http://localhost:3333"

  @github  
  Scenario: succesful request to github
    Given I make a "GET" request to "https://www.google.com"
    Then I receive a 200 http code with body
    |user_id| xxx|
  
  Scenario: succesful request to github with POST
    Given I make a "POST" request to "https://www.google.com"