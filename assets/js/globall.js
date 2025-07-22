
var screenWidthSize = window.innerWidth;
var mainHtml = document.getElementById("main"); //Capture the element with grid to controle the sidebar


// Verify if the user clicked on the input search
let headerInputSearch = document.getElementById("header-input-search");

headerInputSearch.addEventListener("focus", (event) =>{
    event.stopPropagation();
    let inputCleanText = document.getElementById("header-svg-close-search");
    inputCleanText.style.display = "block";//showing the icon for cleaning the input text

    inputCleanText.addEventListener("mousedown", (event) =>{//Clear input values
        event.stopPropagation();
        headerInputSearch.value = "";

        setTimeout(() => {
            headerInputSearch.focus();
        }, 10);

    });

    // Verify if the user is no longer on the input
    headerInputSearch.addEventListener("blur", (event) =>{
        event.stopPropagation();
        inputCleanText.style.display = "none"
    });
});


// Interaction for header
let headerButtonMobileSearch = document.getElementById("header-button-mobile-search");
let validator = true;

headerButtonMobileSearch.addEventListener("click", (event) =>{
    let headerButtonMobileSearchSvg = document.getElementById("header-button-mobile-search-svg");
    let headerMiddleHolder = document.getElementById("header-middle-holder");
    let headerButtonMobileVoiceSearch = document.getElementById("header-button-mobile-voice-search-svg");
    let headerEndHolder = document.getElementById("header-end-holder");

    event.stopPropagation(); 

    if(screenWidthSize <= 768){
        let crtlHideShowFluxInput = validator ? 1400 : 400;

        setTimeout(() => {
            headerMiddleHolder.classList.toggle('headerMiddleHolderMobile');
        }, crtlHideShowFluxInput);
        
        setTimeout(() => {
            headerEndHolder.classList.toggle('mobileWidthNull');
            headerButtonMobileVoiceSearch.classList.toggle('mobileWidthNull');
            headerButtonMobileSearchSvg.classList.toggle('headerButtonMobileSearchSvgMobile');
            headerButtonMobileSearchSvg.classList.toggle('headerButtonMobileSearchSvgJS');
            
        }, 600);

        setTimeout(() => {
            let headerButtonMobileSearchSvgVAR = headerButtonMobileSearchSvg.src;
            headerButtonMobileSearchSvgVAR.includes("svgexport-14.svg") ? headerButtonMobileSearchSvg.src = "./assets/svg/search-svg.svg" : headerButtonMobileSearchSvg.src ="./assets/svg/svgexport-14.svg";
        }, 600);


        validator = validator ? false : true;

    }

});




// Interaction for navbar
let headerButtonHamburguerMenu = document.getElementById("header-button-hamburguer-menu");


headerButtonHamburguerMenu.addEventListener("click", (event) =>{
    event.stopImmediatePropagation();

    let textElementsFromSideBar = document.querySelectorAll(".sidebar-text-item");
    let sidebarHtmlElement = document.getElementById("sidebar");
    let contentMain = document.getElementById("content-main");

    mainHtml.classList.toggle("hideNavbar");
    sidebarHtmlElement.classList.toggle("AddmarginLeftSidebar");
    contentMain.classList.toggle("setopacityForContentMain");

    textElementsFromSideBar.forEach(item =>{
        item.classList.toggle("hideSidebarTextItem");
    });
});


//Manage the sidebar item click
let sidebarHtmlElementA = document.querySelectorAll("li.sidebar-item-intern");

sidebarHtmlElementA.forEach(itemSelected => {
    itemSelected.addEventListener("click", (event) =>{ 
        event.stopImmediatePropagation();
        let lastSidebarElementSelect = document.querySelectorAll(".sidebar-block-selected");
        lastSidebarElementSelect.forEach(item => {
            item.classList.toggle("sidebar-block-selected");
        });

        itemSelected.classList.toggle("sidebar-block-selected");

    });
});

let sidebarSelect = document.querySelectorAll(".sidebar-block-selected");



//Manage the tag-list (main content) item click
let tagsListItem = document.querySelectorAll(".tags-list-item");

tagsListItem.forEach(liHtmlItem =>{
    liHtmlItem.addEventListener("click", (event) =>{
    event.stopImmediatePropagation();
    
    let tagsListItemLastSelected = document.querySelectorAll(".tags-list-selected");
    tagsListItemLastSelected.forEach(itemSelected =>{
        itemSelected.classList.toggle("tags-list-selected");
    }); 

    liHtmlItem.classList.toggle("tags-list-selected");

    });
});


//Manage the notification click
let notificationButtom = document.getElementById("header-button-notifications");

notificationButtom.addEventListener("click", (event) => {
    event.stopImmediatePropagation();

    let notificationsDisplay = document.getElementById("notifications-display");
    let headerButtonNotifications = document.getElementById("header-button-notifications");
    let srcElementSVG = headerButtonNotifications.src

    headerButtonNotifications.src = srcElementSVG.includes("svg-notifications.svg") ? "./assets/svg/svg-close-search.svg" : "./assets/svg/svg-notifications.svg";
    notificationsDisplay.classList.toggle("showNotificationDisplay");

});


//Manage the creation click
let headerButtonCreate = document.getElementById("header-button-create");

headerButtonCreate.addEventListener("click", () => {
    let creationDisplay = document.getElementById("creation-display");
    let creationButtomSvg = document.getElementById("header-button-create-svg");
    let srcCeationButtomSvg = creationButtomSvg.src;

    creationButtomSvg.src = srcCeationButtomSvg.includes("svg-plus-sign.svg") ? "./assets/svg/svg-close-search.svg" : "./assets/svg/svg-plus-sign.svg";
    creationDisplay.classList.toggle("showCreationDisplay");
});