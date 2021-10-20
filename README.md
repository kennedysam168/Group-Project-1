# Canta



// PROPOSAL will be done in a readme
// Mallory is responsible for WireFraming,
// Christian would like to look into APis
// Russ wrote the description/ title
// Sam can type up tasks and set up Repo

## Acceptance Criteria

WHEN the webpage is open, it shows a header, a search bar/field, loaded map
WHEN the user enters in an address/zip code
THEN locations of nearby health facilities are displayed
WHEN the user enters one of the given health facility addresses
THEN the map gives them directions to it
WHEN the about us button is selected
THEN the user is shown a page that gives information on the webpage and its creators
WHEN the support button is selected
THEN the users is shown a form to enter name, email, and a message for feedback
WHEN the resources button is selected
THEN the user is shown a list of links for mental health orginizations
WHEN a resource link is clicked
THEN the user is taken to that orginizations website in a new tab
WHEN screen size changes the display is mobile responsive

## Wireframe

wireframe link: https://docs.google.com/presentation/d/1uWek8_QDQBBwHtzBDKJFBN2cIFJG738GGj8glixdfdo/edit?usp=sharing

## Prototype

Our first week prototype will be a rough draft of our final product. In this rough draft we will aim to have the API's functioning so the service can be used, as well as some basic layout design completed. We are planning to get the service up and running and then focus on all the smaller design details.

## First Tasks

The first tasks for the group members are as follows:

- Mallory and Sam will Work on the initial rough layout of the webpage
- Russ and Christian will work on implementing the API's
- Once Sam and Mallory are finish they will assist in the the API integration and the javascript coding

Notes
Light blue, teal, turquoise, beige, sand, is associated with health, healing, tranquility, understanding, and softness.


## Issues Faced

During the building of this webpage we faced many challenges. The most taxing challenge we faced was integration of the API'S. We first struggled with getting the open map API to display on the screen, but were able to solve it by reading documentation and figuring out what functions to create and then applying data given by the API into those functions to allow it to display. We then had a hard time with our second API which gives hospital locations for major cities. During the set up we ran into cors problems and our instructor needed to create a proxy to run the API through to get around the cors. Once we were able to call the API and get the data from it we then used JSON.parse to allow the data to be retrieved and allowed certain pieces of data like city and street address to be displayed for each hospital. As we continue to learn more we will continue to improve upon these features and the website as a whole.


## API's 

We used two API's for this project:

https://docs.mapbox.com/api/overview/
This allowed up to display the interactive map

https://www.communitybenefitinsight.org/?page=info.data_api
This allowed us to show the addresses of the hospitals below the map