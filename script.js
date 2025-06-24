let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"//en-GB for english
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    // console.log(hours)
    if(hours>=0 && hours<12){
        speak("Good Morning Mam")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Mam")
    }
    else{
        speak("Good Evening Mam")
    }
}
//window.addEventListener('load',()=>{
   // wishMe()
//})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    //  console.log(event)
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", ()=>{
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"

})

function takeCommand(msg){
    btn.style.display="flex"
     voice.style.display="none"
    if(msg.includes("hello")||msg.includes("hey")){
        speak("hello mam, what can i help you?")
    }
    else if(msg.includes("who are you")){
        speak("I am Virtual Assistant, created by Richa Uniyal")
    }
    else if(msg.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(msg.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/","_blank")
    }
    else if(msg.includes("open instagram")){
        speak("opening insta...")
        window.open("https://www.intagram.com/","_blank")
    }
    else if(msg.includes("open chatgpt")){
        speak("opening chatgpt...")
        window.open("https://www.chatgpt.com/","_blank")
    }
    else if(msg.includes("open playstore")){
        speak("opening playstore...")
        window.open("https://www.playstore.com/","_blank")
    }
    else if(msg.includes("open calculator")){
        speak("opening calculator ...")
        window.open("calculator://")
    }
    else if(msg.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")
    }
    else if(msg.includes("time")){
       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric",second:"numeric"})
       speak(time)
    }
    else if(msg.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        let finalText= "this is what i found on internet regarding" + msg.replace("eilik","") 
        speak(finalText)
        window.open(`https://www.google.com/search?q=${msg.replace("eilik","")}`, "_blank")
    }

}

// const btn = document.querySelector("#btn");
// const content = document.querySelector("#content");
// const voice = document.querySelector("#voice");

// function speak(text) {
//     const speech = new SpeechSynthesisUtterance(text);
//     speech.lang = "en-GB";
//     speech.rate = 1;
//     speech.pitch = 1;
//     speech.volume = 1;
//     window.speechSynthesis.speak(speech);
// }

// function wishMe() {
//     const hour = new Date().getHours();
//     if (hour < 12) {
//         speak("Good morning, Mam.");
//     } else if (hour < 16) {
//         speak("Good afternoon, Mam.");
//     } else {
//         speak("Good evening, Mam.");
//     }
// }

// window.addEventListener("load", wishMe);

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// recognition.onresult = (event) => {
//     const transcript = event.results[event.resultIndex][0].transcript;
//     content.innerText = transcript;
//     takeCommand(transcript.toLowerCase());
// };

// btn.addEventListener("click", () => {
//     recognition.start();
//     btn.style.display = "none";
//     voice.style.display = "block";
// });

// function takeCommand(msg) {
//     btn.style.display = "flex";
//     voice.style.display = "none";

//     if (msg.includes("hello") || msg.includes("hey")) {
//         speak("Hello Mam, what can I help you with?");
//     } else if (msg.includes("who are you")) {
//         speak("I am EILIK, your virtual assistant, created by Richa Uniyal.");
//     } else if (msg.includes("open youtube")) {
//         speak("Opening YouTube...");
//         window.open("https://www.youtube.com", "_blank");
//     } else if (msg.includes("open google")) {
//         speak("Opening Google...");
//         window.open("https://www.google.com", "_blank");
//     } else if (msg.includes("open instagram")) {
//         speak("Opening Instagram...");
//         window.open("https://www.instagram.com", "_blank");
//     } else if (msg.includes("open chatgpt")) {
//         speak("Opening ChatGPT...");
//         window.open("https://chat.openai.com", "_blank");
//     } else if (msg.includes("open playstore")) {
//         speak("Opening Play Store...");
//         window.open("https://play.google.com/store", "_blank");
//     } else if (msg.includes("open calculator")) {
//         speak("Opening calculator...");
//         window.open("calculator://");
//     } else if (msg.includes("open whatsapp")) {
//         speak("Opening WhatsApp...");
//         window.open("whatsapp://");
//     } else if (msg.includes("time")) {
//         const time = new Date().toLocaleTimeString();
//         speak(`The time is ${time}`);
//     } else if (msg.includes("date")) {
//         const date = new Date().toLocaleDateString(undefined, { day: "numeric", month: "long" });
//         speak(`Today's date is ${date}`);
//     } else {
//         speak("Here's what I found on the internet.");
//         window.open(`https://www.google.com/search?q=${msg}`, "_blank");
//     }
// }
