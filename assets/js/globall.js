
var screenWidthSize = window.innerWidth;


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


// Mobile interaction
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


