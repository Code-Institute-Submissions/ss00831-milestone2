# Korea travel mate
Some people are interested in traveling to Korea, K-pop, K-beauty, and culture. I am from South Korea and the purpose of the website is that I would love to help with your planning to visit Korea. The website offers short information about South Korea, real-time weather, real-time exchange currency, a function of a navigator. Visitors can send a message to the site owner when they want to get some help.

## UX 

### Preview **
- Desktop 

![desktop](https://user-images.githubusercontent.com/53374745/78712714-524ad280-7919-11ea-86fa-8962d99c3c6f.PNG)

- Tablet 

![mobile](https://user-images.githubusercontent.com/53374745/78712715-537bff80-7919-11ea-899c-c03cc68a02df.jpg)

- Mobile 

![mobile](https://user-images.githubusercontent.com/53374745/78712715-537bff80-7919-11ea-899c-c03cc68a02df.jpg)


### Usecase diagram
![Usecase](https://user-images.githubusercontent.com/53374745/76595465-f8aede00-64fb-11ea-9a6f-0246bb1391b4.png)

### User scenario
1. A potential traveler wants to see the currency rate and weather information
 - Ability to view the real-time data of the currency rate: Currency rate API
 - Ability to view the real-time data of the weather: Weather API
2. A potential traveler wants to find a specified place.
 - Need a map : Google maps API
 - To search by name or type of place
3. A potential traveler or cooperator will ask about South Korea, Korean language and suggest to cooperate.
 - A function of sending a message: E-mail API

### Mockup
- [Desktop](https://github.com/ss00831/milestone2/files/4668180/ms2.pdf)
- [Tablet](https://github.com/ss00831/milestone2/files/4668179/ms2.-.tablet.pdf)
- [Mobile](https://github.com/ss00831/milestone2/files/4668178/ms2.-.mobile.pdf)


## Features
 
### Existing Features
- Information : Short facts about Korea.
- Navigation : To find a place by name or city.
- Message : Anyone who is interested in South Korea can send a message.

### Features Left to Implement
- Chatting function
- Admin mode : The site owner can database the inquiries

## Technologies Used

### Language
- HTML5
- CSS3 
- JavaScript

### Tools & Libraries
- JQuery 3.3.1 (https://jquery.com)
- Popper.JS 1.14.0 (https://popper.js.org/)
- Bootstrap 4.4.1 (https://getbootstrap.com/)
- Fontawesome 5.12.1 (https://fontawesome.com/)
- Google font (https://fonts.google.com/)
- Github (https://github.com/)
- Gitpod (https://www.gitpod.io/)
- Hover.css (https://css-tricks.com/almanac/selectors/h/hover/)
- Google maps (https://developers.google.com/maps/documentation)
- Email JS (http://emailjs.com/)
- Weatherwidget (https://weatherwidget.io/)
- Open exchange rates (https://openexchangerates.org/)


## Testing
0. Device / Browser spec
- For functional testing

    ![DeviceSpec](https://user-images.githubusercontent.com/53374745/78711907-0f3c2f80-7918-11ea-8ef7-98a3142a9a19.png)

- For responsive & browser testing

    ![Browserinfo](https://user-images.githubusercontent.com/53374745/78711903-0ea39900-7918-11ea-815f-e8be0c3d0abc.png)


1. Code validation
- html (https://validator.w3.org/, Validate by URI) : No error
- CSS (https://jigsaw.w3.org/css-validator/, Validate by direct input) : No error, 1 warning (line 1)
- JS (https://jshint.com/)

2. Functional Test : All functional test cases (55 items) : Pass
- Please refer the result.
    [Test Result] [rev03_testcases.xlsx](https://github.com/ss00831/milestone1/files/4454598/rev03_testcases.xlsx)

3. Responsive & Browser Test
- Pass condition :
    1. Must be resized to the image and content by the window sizes and resolutions
    1. All links need to work like the Full test 
    1. All images/contents/links must not be broken.

    ![browsertest](https://user-images.githubusercontent.com/53374745/78868081-8b329680-7a42-11ea-9b15-7a15dc172e3f.PNG)

## Deployment
 
### My Milestone2 page address : https://ss00831.github.io/milestone2/

### To deploy this page to GitHub Pages from its GitHub repository (https://github.com/ss00831/milestone2) :
1. From the menu items near the top of the page, select [Settings].
2. Scroll down to the [GitHub Pages] section.
3. [Source] - click the drop-down menu labelled None - select [Master Branch].
4. The page will automatically be refreshed, and the website is deployed.
 (If this step is failed, refresh the settings page and try again the "step 3".)
5. If the deployment is succeeded, you can see a message as "Your site is published at https://ss00831.github.io/milestone2/". Try to retrieve the link to the deployed website.

### How to run this project locally

To clone this project from GitHub :
1. Click [Clone or download] on the repository page.
2. In the "Clone with HTTPS" section, click the copy button (next of the address) and copy the clone URL for the repository.
3. Open Git Bash on your local IDE.
4. (Optional) Change the current working directory to the location where you want the cloned directory to be made.
5. Type "git clone", and then paste the URL you copied in Step 3.
```
git clone https://github.com/ss00831/milestone2.git
```
6. Press Enter and check the directory where you located on Step 4.


## Credits

### Content
1. Short information : https://en.wikipedia.org/wiki/South_Korea
2. Weather information : 
 - Text : http://www.kma.go.kr/eng/biz/climate_01.jsp

### Media
1. Main image : https://pixabay.com/sv/photos/landskap-resor-sunset-south-korea-1950544/
2. Weather information images : 
 - https://wallpaperaccess.com/
 - https://pixabay.com/sv/photos/tre-kustv%C3%A4gen-beach-resor-landskap-2620056/
 - https://wallpaperaccess.com/
 - https://wallpaperaccess.com/
3. Currency rate background image : https://pixabay.com/sv/photos/don-lagring-betalning-sedlar-skatt-1264858/

### Acknowledgements

1. Show/hide div with radio buttons
- https://www.tutorialrepublic.com/faq/show-hide-divs-based-on-radio-button-selection-in-jquery.php
2. Using initMap and initAutocomplete on same html page google maps
- https://stackoverflow.com/questions/36085722/using-initmap-and-initautocomplete-on-same-html-page-google-maps
3. Using jQuery to Show/Hide Element Based on Dropdown Selection
- https://iamjoshellis.com/2015/07/24/using-jquery-to-showhide-element-based-on-dropdown-selection-for-stats-nerds/
4. Opacity-background
- https://bootstrapcreative.com/pattern/jumbotron-background-image-opacity-bootstrap-4/
5. Cut off image in CSS
- https://medium.com/@elad/how-to-crop-images-with-css-b8471d402b16