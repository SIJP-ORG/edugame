var count = 0;

//create boxes
function myBox(num)
{
    for (var i = 1; i <= num; i++)
    {
        var box = document.createElement("div");
        document.body.appendChild(box);
        box.id = "box" + i;
    }
}

//create buttons
function myButton(num)
{
    for (var i = 1; i <= num; i++)
    {
        var button = document.createElement("button");
        document.body.appendChild(button);
        button.id = "button" + i;
        document.getElementById("button" + i).innerHTML = i + " step";
    }
}

function step1()
{
       if (count < 5)
       {
            document.querySelector("#box" + (count + 1)).style.backgroundColor = "red";
       }
       else
       {
            console.log("Game is over");
       }
       count++;
}

function step2()
{
       if (count < 4)
       {
            for (var i = 0; i < 2; i++)
            {
                document.querySelector("#box" + (count + 1)).style.backgroundColor = "blue";
                count++;
            }
       }
}

function step3()
{
       if (count < 3)
       {
            for (var i = 0; i < 3; i++)
            {
                document.querySelector("#box" + (count + 1)).style.backgroundColor = "green";
                count++;
            }
       }
}

function step4()
{
       if (count < 2)
       {
            for (var i = 0; i < 4; i++)
            {
                document.querySelector("#box" + (count + 1)).style.backgroundColor = "yellow";
                count++;
            }
       }
}

function step5()
{
       console.log(count);
       if (count < 1)
       {
            for (var i = 0; i < 5; i++)
            {
                document.querySelector("#box" + (count + 1)).style.backgroundColor = "purple";
                count++;
            }
       }
}

myBox(5);
myButton(5);

document.getElementById("button" + 1).onclick = step1;
document.getElementById("button" + 2).onclick = step2;
document.getElementById("button" + 3).onclick = step3;
document.getElementById("button" + 4).onclick = step4;
document.getElementById("button" + 5).onclick = step5;
