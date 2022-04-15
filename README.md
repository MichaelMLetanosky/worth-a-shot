# Worth a Shot

*With this website, users should be able to look up different alcoholic beverages and nearby bars in our search engines as well as saving their favorites to a new page.*

Deployed version can be found [Here](https://michaelmletanosky.github.io/worth-a-shot/)

 ## How to use this site:
1. A modal should pop up to verify the user is above 21; if they click yes, the modal should disappear and the site should be deployed normally. If they select no, they are taken to a new, age appropriate site.
2. Once out of the modal, users should be able to see the header along with a 'Favorites' option on the top right which can take them to another site with any saved items they may want to refer back to.
3. Users can then use the left search engine to find a drink by ingredient. After clicking "Search for my drink," a few drinks (up to 6) should generate from our API, which is pulled from The Cocktail DB. 
4. Then, users should also be able to search nearby bars on the right search engine. This button will generate a few bars on the page (simultaneously while drinks are still showing) and allows users to see bars around them they may have never known about. This information is pulled from Google Places API.
5. When either search engine has found the desired item, there are buttons on the bottom of each card that users can save to their favorites.
6. Users can then click the 'Favorites' button on the top of the page. This website will show them any of their favorites they have added! They can also click 'Take me back home' on this screen which will return them back to the main page.

Please see the video down below for the demo:

![*Description of a screen shot*](./assets/images/)

## Indepth analysis
For this project, we wanted to take a fresh approach to a common occurance that happens to the best of us. We found something we could all agree on; we enjoy going out to unique places for a nice drink once in awhile. To take on this project, we decided to make this as user friendly as possible. By navigating through the criteria for the project, we decided to choose two APIs that would compliment eachother well. The first was The Cocktail DB in order to pull data from their API into our site so that when users type an ingredient in the search box, they will get a few cards to generate their results. The second API, Google Places, was a great addition to allow users the chance to look up bars in the city they type in the search box. 

The magic happens once users have found either one or both options they are looking for. After the results are generated, we can see the data is stored in the console log as an array that contains many different strings of items they are looking for. For example, when you search 'Rum' the website will show up to six cards of different drinks that contain rum in the ingredient list (pulled from The Cocktail DB). This array will be saved and the user can then type another ingredient which will generate the new array. When the user refreshes the page, the arrays are gone from the console log. Javascript plays a huge role in the functionality in our project, specifically query selectors which return the first element in the document that matches that selector. 

Some of the project had some challenging style elements to help elevate the product. To start, we were able to add a modal to start on the page as an age confirmation. There is a fun surprise for those who choose 'Nay' on the age confirmation modal. Then, some hover effects were added as well as an 'Add' button on the cards which allows users to save their favorite drinks and places to the Favorites page. 

All in all, the project was an exciting challenge that came to life with determination and new skills! 


## Technology Used

- HTML
- CSS
- JavaScript
- Tailwind CSS
- daisyUI
- Google Fonts
- Google places API
- The Cocktail DB API
- Just in Mind wireframe


## User's Personal Github Accounts


[Hailey Bates-Corona](https://github.com/haileyrb25)

[Michael Letanosky](https://github.com/MichaelMLetanosky)

[Michael Sands](https://github.com/Msands21)

[Ricky Thakar](https://github.com/Rickythakar)

## Special Thanks to the instructional team at UCF Coding Bootcamp

[John Dinsmore](https://github.com/djibba22)

[Veronica Harris](https://github.com/VHarris113)

[Andy Waine](https://github.com/Andy-Waine)