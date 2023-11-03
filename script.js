const general_responses = ["I have heard about you", "You think you can fool me", "You are deeply mistaken", "Go away!", "I should have hid this room better...", "RubRub won't like this...", "zzzZZZZ...", "Don't touch that!", "RubRub better not find you in here...", "Why you touch my stuff?", "Can't you just leave?", "This is not the room you are looking for...", "Sneaky sneaky...", "It's my precious...", "You shall not pass!", "Don't push the button!", "You're gonna get me in trouble...", "This is getting ridiculous...", "Go collect some stars", "Maybe there are new levels?", "Just, stop bothering me", "I'm gonna stop talking", "...", "......", "You're hopeless...", "GAH!", "Really, still here?", "Fine, press the button"];

const incorrect = ["WRONG", "You're hopeless...", "Really, still here?", "No, just no", "Swing and a miss!", "I told you, it won't work...", "Door is now open. Oh wait, no it's not.", "Is that actually your guess?", "Go home", "Nope ", "Give up, please", "Door is still locked", "That tickles!", "Try harder please", "Don't make me angry", "You won't like me when im angry...", "Oh no, you just unlocked... NOTHING", "Only 3 attempts left!", "Only 2 attempts left!", "LAST ATTEMPT!", "Just kidding, unlimited attempts", "Maybe you should do something else?", "This is getting ridiculous...", "Go collect some stars", "How about no?", "Error, error. Bad answers.", "Failure", "May I suggest thinking?"];

let cod3breaker = false

function submit() {
  code = document.getElementById("code").value
  document.getElementById("code").value = ""
  if (cod3breaker == false) {
  if (code == "the challenge") { document.getElementById("text").style="color: yellow; font-size: 27px"
document.getElementById("text").innerHTML = "My level? Do you want to try it?"
  }
  else {
  if (code == "octocube") { document.getElementById("text").style="color: #00FABB; font-size: 27px"
document.getElementById("text").innerHTML = "Ugh... Slippery"
  }
    else {
  if (code == "seven") {
    document.getElementById("text").style="color: #00FABB; font-size: 27px"
document.getElementById("text").innerHTML = "I should have been a doctor..."
  }
      else {
  if (code == "brainpower") { document.getElementById("text").style="color: #00FABB; font-size: 27px"
document.getElementById("text").innerHTML = "O-oooooooooo AAAAE-A-A-I-A-U- JO-oooooooooooo!"
  }
        else {
  if (code == "thechickenisonfire") {
    document.getElementById("text").style="color: #00FABB; font-size: 27px"
document.getElementById("text").innerHTML = "Indeed it is..."
  }
          else {
  if (code == "gimmiethecolor") {
    document.getElementById("text").style="color: #00FABB; font-size: 27px"
document.getElementById("text").innerHTML = "How many colors do you need?"
  }
        
          else {
  if (code == "0") {
    document.getElementById("text").style="color: #00FABB; font-size: 27px"
document.getElementById("text").innerHTML = "I wish I had that many shinies..."
  }
            else {
  if (code == "cod3breaker") {
document.getElementById("text").style="color: yellow; font-size: 27px"
document.getElementById("text").innerHTML = "45, 69, 75, 85, 112, 144"
    cod3breaker = true
  }
              else {
  if (code == "") {
    document.getElementById("text").style="color: white; font-size: 27px"
document.getElementById("text").innerHTML = getRandomItem(general_responses);
  }
                else {
 document.getElementById("text").style="color: orange; font-size: 27px"
document.getElementById("text").innerHTML = getRandomItem(incorrect);
 
        }
        }
        }
        }
        }
        }
  }
  }
  }
  }
  else {
   if (code == "246102732") {  document.getElementById("text").style="color: #00FABB; font-size: 27px"
document.getElementById("text").innerHTML = "Impressive..."
                                }
    else {document.getElementById("text").style="color: orange; font-size: 27px"
document.getElementById("text").innerHTML = getRandomItem(incorrect);}
    cod3breaker = false
  
  }
  
}

function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}
