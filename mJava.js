let file = "fetch_info.txt"
let hlist = ["mo1", "mo2", "mo3", "mo4", "mo5", "mo6", "mo7"]
let plist = ["m1", "m2", "m3", "m4", "m5", "m6", "m7"]
let st = ["Normal: ", "Haymaker: ", "The Lightning Field: ", "Pirate's Nightmare: ", "Nuclear Decay: ", "Symbiosis: ", "Hell's Beacon: "]
let wlist = "Well done to these people for being the quickest to complete MineS:<br><br>"
//let myText = "Loef - 2:13,.,John - 3:29,.,,...,Kush - 3:03,.,Yeti - 3:15,.,Bolo - 3:32,.,K22 - 4:09,.,,...,Eric - 4:02,.,Loef - 4:07,.,Yeti - 4:10,.,Yves - 5:15,.,,...,Kush - 4:10,.,Four - 4:17,.,,...,,...,Sam - 6:06,.,,...,,...,"
let tl = ""
let indext = 0
let invb = 0

async function forma(){
  let myObject = await fetch(file);
  let myText = await myObject.text();
  const arr = myText.split(",...,");
  for (let index = 0; index < (arr.length-1); ++index) {
    const element = arr[index]; //records for each mode
	if (element){
	  const arrt = element.split(",.,"); //split into each record
	  for (indext = 0; (indext < arrt.length && indext < 200); ++indext) { //only shows top 200 scores
	     if (indext==0){wlist = wlist + "<b>" + st[index] + "</b> <i>" + arrt[indext] + "</i><br>";} //list of quickest players for each mode
	     tl = tl + "<i>" + arrt[indext] + "</i><br>";
	  }
	  //if more than 17, split element 'plist[index]' into two columns or more also scrollable
	  if (arrt.length > 102) {document.getElementById(plist[index]).style.columnCount = 7;} //max 6 columns then scrollable
	  else if (arrt.length > 16){document.getElementById(plist[index]).style.columnCount = Math.ceil(indext/16);}
	  document.getElementById(plist[index]).innerHTML = tl;
	}
	else {wlist = wlist + "<b>" + st[index] + "</b> " + "--<br>"}
	tl = "";
  }
  document.getElementById("Qu").innerHTML = wlist;
}

forma();

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Get the button
let mybutton = document.getElementById("myBtn");
let mybuttont = document.getElementById("myBtnt");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		if (invb==0) {
		mybutton.style.display = "block";
		mybuttont.style.display = "none";
    } 
    else {
		mybutton.style.display = "none";
		mybuttont.style.display = "block";
    }
  } else {
    mybutton.style.display = "none";
	mybuttont.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function cChang(cName, cProp, cVal){
	var abcs = document.getElementsByClassName(cName);
	for(let i = 0; i < cols.length; i++) {
		abcs[i].style.setProperty(cProp, cVal);}
}

function inv(){
	if (invb==0){
		invb = 1;
		document.body.style.backgroundColor = "#333";
		document.body.style.color = "white";
		document.getElementById("gFile").style.color = "#cca01d";
		scrollFunction();
	}
	else{
		invb = 0;
		document.body.style.backgroundColor = "";
		document.body.style.color = "";
		document.getElementById("gFile").style.color = "";
		scrollFunction();
	}
	closeNav();
}