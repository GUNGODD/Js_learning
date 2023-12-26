


const SukunaImages = [
    "https://imgur.com/gallery/RpzhLCO",
    "https://imgur.com/gallery/CgnBr4v",
    "https://imgur.com/gallery/5wPWkP2",
    "https://imgur.com/gallery/9S1XjKT"


   ];

 // logic for image replacement 
 const imgs = document.getElementsByTagName("img");
 for (let i = 0; i < imgs.length; i++){
     const randomImg = Math.floor(Math.random() * SukunaImages.length);
     imgs[i].src = SukunaImages[randomImg];
 }
 
 const headers  = document.getElementsByTagName("h2");
for(let i = 0; i< imgs.length; i++){
    headers[i].innerTEXT = "Hey YOU . myself Aditya";
}