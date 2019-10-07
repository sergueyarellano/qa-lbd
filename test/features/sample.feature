
Feature: posts in the blog
  Sample feature 
  Scenario: succesful create a new post in the blog
    Given the "body"
      | title  | foo |
      | body   | bar |
      | userId | 1   |
    And the "headers"
      | Content-type   | application/json; charset=UTF-8 |
    When I make a "POST" request to "https://jsonplaceholder.typicode.com/posts"
    Then I receive a 201 http code with body
      | body   | bar       |
      | id     | foo       |
      | title  | watev     |
      | userId | duude wtf |

  Scenario: succesful retrieve all the posts
    And the "headers"
      | Content-type   | application/json; charset=UTF-8 |
    When I make a "GET" request to "https://jsonplaceholder.typicode.com/posts"
    Then I receive a 200 http code with body
      | body   | bar       |
      | id     | foo       |
      | title  | watev     |
      | userId | duude wtf |
