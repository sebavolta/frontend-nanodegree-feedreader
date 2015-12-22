#How to run this project

This project loads external feeds and it may need a local server to run it (such as XAMPP). 
If you need to install a local server, please go to the XAMPP's oficial site https://www.apachefriends.org/es/index.html
and download/install the software. 
For more instructions please follow this tutorial https://blog.udemy.com/xampp-tutorial/
Then go to your local host and open the index.html following the path of the project's folder.

# Project Overview

This project is a feed reader that uses Google Feed API for loading the content, and Jasmine Framework to create the test cases. 

I generated Suites and Tests to evaluate different scenarios in the app:

- First I loop to the 'allFeeds' array to test if it is defined and all its items to have 'name' and 'url' values.
- Then I check the 'Menu' to be visible by default and to show and hide when the user clicks the menu button.
- After that I test the 'loadFeed' function to ensure it loads content inside the .feed container. This test needs to run async to be sure all the content was completely loaded from the feed.
- Finally I run a test to check that the content actually changes when the 'loadFeed' function is complete, so I have to call it twice and using an async approach.
