var GameTitle = function()
{
  var header = document.createElement("h1");
  header.innerHTML = 'Arithmetic Game';
  header.style.textAlign = 'center';
  header.style.color = 'maroon';
  document.body.appendChild(header);
}

var Box = function(x, y, width, height, id)
{
  var rect = document.createElement("div");
  rect.id = id;
  document.body.appendChild(rect);
  setPostion(x, y, id)
  setSize(width, height, id);
  setInitBoxDesign(id);
}

var Button = function(x, y, width, height, id, image)
{
  var butImg = document.createElement("IMG");
  butImg.id = id;
  butImg.src = image;
  butImg.alt = 'AppleButton';
  document.body.appendChild(butImg);
  setPostion(x, y, id);
  setSize(width, height, id);
}

var Image = function(x, y, width, height, id, image)
{
  var img = document.createElement("IMG");
  img.id = id;
  img.src = image;
  img.alt = 'Apple';
  document.body.appendChild(img);
  setPostion(x, y, id);
  setSize(width, height, id);
}

function setPostion(x, y, id)
{
  var position = document.getElementById(id);
  position.style.position = 'absolute';
  position.style.left = x + 'px';
  position.style.top = y + 'px';
}

function setSize(width, height, id)
{
  var size = document.getElementById(id);
  size.style.width = width + 'px';
  size.style.height = width + 'px';
}

function setInitBoxDesign(id)
{
  var color = document.getElementById(id);
  color.style.backgroundColor = '#ffffff';
  color.style.borderColor = '#000000';

  var border = document.getElementById(id);
  border.style.borderStyle = 'solid';
}

function drawGameTitle()
{
  var gameTitle = new GameTitle();
}

//create boxes
function drawBoxes(num)
{
    var initX = 280;
    for (var i = 1; i <= num; i++)
    {
      var box = new Box(initX + (100 * i), 200, 100, 100, 'box' + i);
    }
}

//create buttons
function drawButtons(num)
{
    var initX = 300;
    for (var i = 1; i <= num; i++)
    {
        var button = new Button(initX + (100 * i), 400, 75, 75, 'button' + i, 'images/Apple' + i + '.png');
    }
}

//create images
function drawImages(num)
{
    var initX = 280;
    for (var i = 1; i <= num; i++)
    {
        var image = new Image(initX + (100 * i), 200, 100, 100, 'image' + i, 'images/Apple1.png');
        document.querySelector("#image" + i).style.display="none";
    }
}

var count = 0;

function step1()
{
       if (count < 5)
       {
            document.querySelector("#image" + (count + 1)).style.display="block";
            count++;
       }

       if (count == 5)
       {
            setTimeout(gameEnd, 500);
       }
}

function step2()
{
       if (count < 4)
       {
            for (var i = 0; i < 2; i++)
            {
                document.querySelector("#image" + (count + 1)).style.display="block";
                count++;
            }
       }
       else
       {
         alert("You cannot add 2 more apples here");
       }

       if (count == 5)
       {
            setTimeout(gameEnd, 500);
       }
}


function step3()
{
       if (count < 3)
       {
            for (var i = 0; i < 3; i++)
            {
                document.querySelector("#image" + (count + 1)).style.display="block";
                count++;
            }
       }
       else
       {
         alert("You cannot add 3 more apples here");
       }

       if (count == 5)
       {
            setTimeout(gameEnd, 500);
       }
}

function step4()
{
       if (count < 2)
       {
            for (var i = 0; i < 4; i++)
            {
                document.querySelector("#image" + (count + 1)).style.display="block";
                count++;
            }
       }
       else
       {
         alert("You cannot add 4 more apples here");
       }

       if (count == 5)
       {
            setTimeout(gameEnd, 500);
       }
}

function step5()
{
       console.log(count);
       if (count < 1)
       {
            for (var i = 0; i < 5; i++)
            {
                document.querySelector("#image" + (count + 1)).style.display="block";
                count++;
            }
       }
       else
       {
         alert("You cannot add 5 more apples here");
       }

       if (count == 5)
       {
            setTimeout(gameEnd, 500);
       }
}

function gameEnd()
{
   if (confirm("You've done it!\nReplay?") == true) {
     count = 0;
     for (var i = 1; i <= 5; i++)
     {
         document.querySelector("#image" + i).style.display= "none";
     }
   }
}

function init()
{
  document.body.style.background = "#f3f3f3 url('images/background.gif') no-repeat 50% 50% fixed";
  document.body.style.backgroundSize = 'cover';
  drawGameTitle();
  drawBoxes(5);
  drawButtons(5);
  drawImages(5);
}

function play()
{
  document.getElementById("button" + 1).onclick = step1;
  document.getElementById("button" + 2).onclick = step2;
  document.getElementById("button" + 3).onclick = step3;
  document.getElementById("button" + 4).onclick = step4;
  document.getElementById("button" + 5).onclick = step5;
}

function main()
{
  init();
  play();
}

main();
