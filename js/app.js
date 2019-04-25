//Make history, or better yet...make the World Events page interactive with events or event listeners for each exercise below.

// 1. The Greatest Thing Since Sliced Bread 
// Find the onclick event in the h3 element and create a function that will italicize the contents and change the font color to cornflowerblue in the div id of 'bread'.

function italics(){
    if(bread.style.color === "black"){
    bread.style.fontStyle = "italic";
    bread.style.color = "cornflowerblue";
  }else{
      bread.style.color = "black";
      bread.style.fontStyle = "normal";
  }
    
}


// 2. The Birth of the Internet
// Find the onmouseover event in the h3 element and create a function that will replace the current contents in the div id of 'webby' to the following:

var webContents = 'The Internet got its start in the United States more than 50 years ago as a government weapon in the Cold War. In the 1980s, research at CERN in Switzerland by British computer scientist Tim Berners-Lee resulted in the World Wide Web, linking hypertext documents into an information system, accessible from any node on the network.';

var webOriginal = "Toy mouse squeak roll over. Terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry scratch at the door then walk away prance along on top of the garden fence, annoy the neighbor's dog and make it bark so asdflkjaertvlkjasntvkjn (sits on keyboard), yet eat the rubberband. You call this cat food. Demand to be let outside at once."

function changeContent(){
    // var webbyElem = document.getElementById("webby");
    if(webby.innerHTML === webOriginal){
    webby.innerHTML = webContents;
  }else{
    webby.innerHTML = webOriginal;
  }
}

// 3. The Boxer Rebellion
// Find the onclick event in div id of 'fightDaPower' and create a function that will convert the Chinese text in the same div element into English (the English content is provided below).

var revolution = 'Boxer Uprising or Yihetuan Movement was an anti-imperialist uprising which took place in China towards the end of the Qing dynasty between 1899 and 1901. It was initiated by the Militia United in Righteousness, known in English as the "Boxers," and was motivated by proto-nationalist sentiments and opposition to foreign imperialism and associated Christian missionary activity.';

var chinese = "义和团运动是發生於1900年清朝末期，清朝甲午戰爭戰敗后，在西方列强划分在华势力范围、华北农村頻繁發生教案、天灾频仍及宫廷权力争斗激化的情况下，黄河北岸农民与中国天主教教徒之间的武装冲突。1900年春季直隶成千上万习练义和拳并號稱「义和团」的农民动用私刑处死了大量中國基督宗教信徒與西方人士，並纵火烧毁了教堂和教徒房屋；同年6月，清朝中央政府允许义和团进驻北京"

function translation(){
    if(fightDaPower.innerHTML === chinese){
        fightDaPower.innerHTML = revolution;
    }else{
        fightDaPower.innerHTML = chinese;
    }
}

// 4. The Great Depression
// Add an event listener to the h3 element id of 'hardTimes' and create a function to display the contents in the div element of 'depress'.

hardTimes.addEventListener("click", depressionText);

function depressionText(){
    if(depress.style.display === "none"){
    depress.style.display = "block";
  }else{
    depress.style.display = "none"
  }   
}


// 5. Apollo 11
// Add an event listener to the h3 element id of 'blastOff' and create a function to show and hide the contents in the div element of 'moonWalk' after clicking on Apollo 11.

blastOff.addEventListener("click", showHide);

function showHide(){
    if(moonWalk.style.display === "none"){
        moonWalk.style.display = "block";
      }else{
        moonWalk.style.display = "none";
      }  
}

// 6. The American Civil War
// Add an event listener to the div element id of 'freedom' and create a function to remove all instances of 'corn' in the content.


// 7. The Renaissance
// Add an event listener to the div element id of 'rebirth' and create a function to remove all the lowercase and uppercase z's in the content. 



// 8. the Gutenberg Printing Press
// Add an event listener to the h3 element id of 'showBooks' and create a function to display a random book title from the classics array in the div element of 'mustRead'.

var classics = ["Charlotte's Web", "War and Peace", "The Secret", "How to Win Friends and Influence People", "Good to Great", "The Lean Startup", "The Odyssey", "Essentialism"];



// 9. World War II
// Add an event listener to the image element and create a function that will toggle between images when hovering (mouseover) on the image.

// use the following image reference:
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMBlsYV-Ta5N_GKAoxRDBEa9BRZqdzQRvpiHELEPb6IPVZ73



// 10. The Industrial Revolution
// Add an event listener to the h3 element and create a function that will reverse the contents in the div element id of 'gameChanger'



// Final Boss
// Add event listeners for the thumbs up and thumbs down images that will count the number of times the thumb has been clicked on. 

