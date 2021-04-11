
let card = {
  b : [],
  i : [],
  n : [],
  g : [],
  o : [],
  arrayCard:[],
  generated : false
};
bArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
iArray = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
nArray = [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
gArray = [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
oArray = [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
while (!card.generated) {
  while(card.b.length !=6 ){
    if(card.b.length == 0){
      card.b.push("B");
    }
    randomNum = Math.floor(Math.random() * bArray.length);
    console.log("this is the random num " + bArray[randomNum]);
    card.b.push(bArray[randomNum]);
    removeNum = bArray.indexOf(bArray[randomNum]);
    bArray.splice(removeNum,1);
    // console.log(card.b);
    // console.log(bArray);
  }
  while(card.i.length !=6 ){
    if(card.i.length == 0){
      card.i.push("I");
    }
    randomNum = Math.floor(Math.random() * iArray.length);
    console.log("this is the random num " + iArray[randomNum]);
    card.i.push(iArray[randomNum]);
    removeNum = iArray.indexOf(iArray[randomNum]);
    iArray.splice(removeNum,1);
    // console.log(card.i);
    // console.log(iArray);
  }
  while(card.n.length !=6 ){
    if(card.n.length == 0){
      card.n.push("N");
    }
    if(card.n.length == 3){
      card.n.push("FREE");
    }
    randomNum = Math.floor(Math.random() * nArray.length);
    console.log("this is the random num " + nArray[randomNum]);
    card.n.push(nArray[randomNum]);
    removeNum = nArray.indexOf(nArray[randomNum]);
    nArray.splice(removeNum,1);
    // console.log(card.n);
    // console.log(nArray);
  }
  while(card.g.length !=6 ){
    if(card.g.length == 0){
      card.g.push("G");
    }
    randomNum = Math.floor(Math.random() * gArray.length);
    console.log("this is the random num " + gArray[randomNum]);
    card.g.push(gArray[randomNum]);
    removeNum = gArray.indexOf(gArray[randomNum]);
    gArray.splice(removeNum,1);
    // console.log(card.g);
    // console.log(gArray);
  }
  while(card.o.length !=6 ){
    if(card.o.length == 0){
      card.o.push("O");
    }
    randomNum = Math.floor(Math.random() * oArray.length);
    console.log("this is the random num " + oArray[randomNum]);
    card.o.push(oArray[randomNum]);
    removeNum = oArray.indexOf(oArray[randomNum]);
    oArray.splice(removeNum,1);
    // console.log(card.o);
    // console.log(gArray);
  }

  card.generated = true;
}

//setup our table array
var tableArr = [
]
tableArr.push(card.b);
tableArr.push(card.i);
tableArr.push(card.n);
tableArr.push(card.g);
tableArr.push(card.o);
//create a Table Object
let table = document.createElement('table');
//iterate over every array(row) within tableArr
counter = 1;
for (let row of tableArr) {
//Insert a new row element into the table element
  table.insertRow();
//Iterate over every index(cell) in each array(row)
  for (let cell of row) {
//While iterating over the index(cell)
//insert a cell into the table element
    let newCell = table.rows[table.rows.length - 1].insertCell();
//add text to the created cell element
    newCell.textContent = cell;
    newCell.id = "card"+counter;
    console.log(newCell.id);
    if(newCell.textContent == "B" || newCell.textContent == "I" || newCell.textContent == "N" || newCell.textContent == "G" || newCell.textContent == "O"){
      newCell.style.background = "#ffffff";
      newCell.style.border = "none";
      newCell.style.fontSize = "120px";
      newCell.style.padding = 0;
      newCell.style.textAlign = "left";
      newCell.style.width="20%";
      newCell.style.fontWeight="900";
    }
    else{
    newCell.addEventListener("click", function() {
      document.getElementById(newCell.id).style.background = "#915cab";
    });}
    counter++;
  }
}
//append the compiled table to the DOM
document.body.appendChild(table);
console.log(tableArr);
