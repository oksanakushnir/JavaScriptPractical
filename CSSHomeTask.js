
// Displays in the console the total number of images that meet the condition (height greater than 300 pixels).
function ImagesFilterTaskOne(imageHeight) {
    var allImages = $('img');
    var filteredImages = [];
        
    for (let i = 0; i < allImages.length; i++) {
        
        if (allImages[i].height > imageHeight) {
            filteredImages.push(allImages[i]);
        }
    }
    
    for (let i = 0; i < filteredImages.length; i++) {
        console.log("Height of image " + (i + 1) + " --- " + filteredImages[i].height);

    }

    console.log("Total images --- " + filteredImages.length);
}


// Display the number of unique colors used in the elements on the page.
function GetElementsUniqueColorCount() {
    var allElements = $('*');
    var colorElements = ["p", "span", "div", "a", "h1", "h2", "h3", "h4", "h5", "h6"];
    var allowedElements = [];
    var elementColors = [];

    for (let i = 0; i < allElements.length; i++) {
        if (IsElementExistInArray(colorElements, allElements[i].tagName)) {
            allowedElements.push(allElements[i]);
        }
    }

    for (let i = 0; i < allowedElements.length; i++) {
        var color =  window.getComputedStyle(allowedElements[i]).color;
        
        if (!IsElementExistInArray(elementColors, color)) {
            elementColors.push(color);
        }               

    } 

    console.log(elementColors);
}


// Find all button elements present on a specified web page and output the cumulative quantity of these buttons.
function FindAllButtons() {
    var allButtons = $('button');
    
    console.log(allButtons.length + ' buttons are present on this page');
}


// Find and determine the types of all input fields (input) on a web page.
function FindAllInputFields() {
    var allInputFields = $('input');
    
    console.log('Found ' + allInputFields.length + ' input fields');

    for (let i = 0; i < allInputFields.length; i++) {
        console.log('Input type: ' + allInputFields[i].type);
    }
}

// Utilizing CSS selectors in conjunction with JavaScript, identify all the social media button elements present on a specified web page and determine their respective destination URLs.

function FindAllSocialMediaInfo() {
    var allSocialButtons = $('a.footer_social-link');

    console.log('Found ' + allSocialButtons.length + ' social media buttons');

    for (let i = 0; i < allSocialButtons.length; i++) {
        console.log('Links social media: ' + allSocialButtons[i].href);
    }
}


//#region Helper functions

function IsElementExistInArray(elemArray, element) {
    for (let i = 0; i < elemArray.length; i++) {
        if (elemArray[i].toLowerCase() == element.toLowerCase()) {
            return true;
        }
    }

    return false;
}

//#endregion

//Easy level

// 1.Find all images on the page. 
//$$('img')

// 2. Find images that are icons on the web.
//$$('img[alt*="icon"]')

// 3. Find all button elements present on a specified web page
//$$('button')

//4. Find all input fields on a web page.
//$$('input')

//5. Find the link that is responsible for going to the map to find a place to buy eco-bags.
//$$('a.tertiary-global-button.btn-link')[0]
//$$('.stat-row-content:nth-child(2) a')

// Medium level

// Task 1
//ImagesFilterTaskOne(300);

// Task 2 
//GetElementsUniqueColorCount();

// Task 3
//FindAllButtons();

// Task 4
//FindAllInputFields();

// Task 5
//FindAllSocialMediaInfo();