// tab
document.addEventListener("DOMContentLoaded", function() {
    
    openTab('tab1');
});
function openTab(tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}


document.querySelectorAll('.select-language, .select-languageEn, .select-languageVn').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelectorAll('.select-language, .select-languageEn, .select-languageVn').forEach(function(btn) {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        translateText();
    });
});

const translation = {
    en: {
        hello: "xin chào",
        love: "yêu thích",
        study: "học",
        smile: "cười",
        thank: "cảm ơn",
        good: "tốt",
        bye: "tạm biệt",
        student: "học sinh"
    },
    vi: {
        "xin chào": "hello",
        "cảm ơn": "thank you",
        "yêu": "love",
        "cười": "smile",
        "học sinh": "student",
        "học": "study",
        "tốt": "good"
    }
};

function translateText() {
    var inputText = document.getElementById('text').value.toLowerCase();
    var translatedText;
    if (document.querySelector('.header-tab1 .select-languageEn').classList.contains('active')) {
        translatedText = translation.en[inputText] || inputText;
    } else if (document.querySelector('.header-tab1 .select-languageVn').classList.contains('active')) {
        translatedText = translation.vi[inputText] || inputText;
    } else {
        
        translatedText = inputText;
    }
    document.getElementById('text-translate').value = translatedText;
}


// Copy
function copyText() {
    var textToCopy = document.getElementById('text-translate').value;
    if (textToCopy.trim() !== '') {
        var tempTextArea = document.createElement("textarea");
        tempTextArea.value = textToCopy;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        alert("Text copied successfully.");
    } else {
        alert("No content to copy.");
    }
}
