// coreFunction block;
const coreFunc = document.querySelectorAll('.coreFunc span');
const textarea = document.getElementsByTagName("textarea")[0]; 
const body = document.body;

coreFunc.forEach((eachFunc) => {
    eachFunc.addEventListener("click", (e) => {
        const setId = e.currentTarget.id;

        switch (setId) {
            case "bold":
               textarea.classList.toggle('bold'); 
                break;
            case "italic":
                textarea.classList.toggle('italic'); 
                break;
            case "align-center":
                textarea.classList.toggle('align-center');
                break;
            case "align-right":
                textarea.classList.toggle('align-right');
                break;
            case "align-left":
                textarea.classList.toggle('align-left');
                break;
            case "align-justify":
                textarea.classList.toggle('align-justify');
                break;
            case "uppercase":
                textarea.classList.toggle('uppercase');
                break;
            case "lowercase":
                textarea.classList.toggle('lowercase');
                break;

            default:
                alert("Click a core function")
                break;
        }
      
    })
})
// end of core func


// text color func
const textColorFunc = document.querySelectorAll('.text-color-cnt span');

textColorFunc.forEach((eachTextColor) => {
    eachTextColor.addEventListener('click', (e) => {
        const setId = e.currentTarget.id;

        switch (setId) {
            case "color-red":
                textarea.classList.toggle("color-red");
                break;
            case "color-purple":
                textarea.classList.toggle("color-purple");
                break;
            case "color-green":
                textarea.classList.toggle("color-green");
                break;
            case "color-brown":
                textarea.classList.toggle("color-brown");
                break;
            case "color-grey":
                textarea.classList.toggle("color-grey");
                break;
        
            default:
                alert("Choose From the Listed Color");
        }
    })
})
// end of text color function

// font size func
const fontSizeFunc = document.querySelectorAll('.font-size-cnt span');

fontSizeFunc.forEach((eachFontSize) => {
    eachFontSize.addEventListener('click', (e) => {
        const setId = e.currentTarget.id;

        switch (setId) {
            case "twelve":
                textarea.classList.toggle("twelve");
                break;
            case "fourteen":
                textarea.classList.toggle("fourteen");
                break;
            case "sixteen":
                textarea.classList.toggle("sixteen");
                break;
            case "twenty-two":
                textarea.classList.toggle("twenty-two");
                break;
            case "twenty-eight":
                textarea.classList.toggle("twenty-eight");
                break;
        
            default:
                alert("Choose From The Listed Font Size");
        }
    })
})
// end of font size func

// font family func
const fontFamilyFunc = document.querySelectorAll('.font-family-cnt span');

fontFamilyFunc.forEach((eachFontFamily) => {
    eachFontFamily.addEventListener('click', (e) => {
        const setId = e.currentTarget.id;

        switch (setId) {
            case "times-new":
                textarea.classList.toggle("times-new");
                break;
            case "arial":
                textarea.classList.toggle("arial");
                break;
            case "calibri":
                textarea.classList.toggle("calibri");
                break;
            case "cambria":
                textarea.classList.toggle("cambria");
                break;
        
            default:
                alert("Choose From The Listed Font Family");
        }
    })
})
// end of font family func


// Page background func
const pageBgCnt = document.querySelectorAll('.page-bg-cnt span');

pageBgCnt.forEach((eachBgCnt) => {
    eachBgCnt.addEventListener('click', (e) => {
        const setId = e.currentTarget.id;

        switch (setId) {
            case "winterSky":
                body.classList.toggle("winterSky");
                break;
            case "grey":
                body.classList.toggle("grey");
                break;
            case "blueBell":
                body.classList.toggle("blueBell");
                break;
        
            default:
                alert("Choose From The Listed Page Background");
        }
    })
})
// end of page background func


// Copy and Clear function
const popup = document.querySelector('.popup');
const actionCall = document.querySelector('.actionCall');
const textAction = document.querySelector('.textAction');


const secondBtnCnt = document.querySelectorAll('.second-bt-cnt button');
secondBtnCnt.forEach((eachBtnCnt) => {
    eachBtnCnt.addEventListener('click', (e) => {
         const setId = e.currentTarget.id;
        switch (setId) {
            case "copy":
                if (!textarea.value ==" ") {
                    const action = "copied"
                    textarea.select();
                    actionCall.textContent = action;
                    textAction.textContent = textarea.value;
                    textarea.style.border= " 2px dashed limegreen"
                    popup.classList.add('showPopup');
                } else {
                    textarea.style.border= "2px dashed crimson";
                    popup.classList.remove('showPopup');
                 }
        
                break;
            case "clear":
                if (!textarea.value=="") {
                    textarea.value = " ";
                    textarea.style.border= " 2px dashed #535657";
                } else {
                    textarea.style.border= " 2px dashed crimson";
                }
                break;
        
            default:
                alert("You can either copy or clear")
                break;
        }
    })
})
// end of copy and clear function

// close popup 
const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', () => {
    popup.classList.remove('showPopup');
    textarea.style.border = "2px dashed #535657";
    textarea.value = " ";
})


document.querySelector('.okay').addEventListener('click', () => {
    alert("Thanks for using Textditor")
    popup.classList.remove('showPopup');
    textarea.style.border = "2px dashed #535657";
    textarea.value = " ";
})
// end of close popup
