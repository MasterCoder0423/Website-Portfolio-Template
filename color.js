/*
Parin T
https://cs50.harvard.edu/x/2022/psets/8/homepage/
wget https://cdn.cs50.net/2021/fall/psets/8/homepage.zip
color.js
CS50
submit50 cs50/problems/2022/x/homepage
*/
function ChangeRedColor()
{
    document.getElementById("bg").style.backgroundColor = "#EF4943"
}

function ChangeOrangeColor()
{
    document.getElementById("bg").style.backgroundColor = "#FF7F00"
}

function ChangeYellowColor()
{
    document.getElementById("bg").style.backgroundColor = "#FFFF00"
}

function ChangeGreenColor()
{
    document.getElementById("bg").style.backgroundColor = "#6ACD4F"
}

function ChangeBlueColor()
{
    document.getElementById("bg").style.backgroundColor = "#4F8ACD"
}

function ChangeIndigoColor()
{
    document.getElementById("bg").style.backgroundColor = "#6610f2"
}

function BackToOriginal()
{
    document.getElementById("bg").style.backgroundColor = "#e9ecef"
}

function ChangeVioletColor()
{
    document.getElementById("bg").style.backgroundColor = "#882BCB"
}

function selection()
{
    let choice = document.getElementById("choice").value

    if (choice == 1)
    {
        document.querySelector("#message").style.fontWeight = "bold"
    }

    else if (choice == 2)
    {
        document.querySelector("#message").style.fontStyle= "italic"
    }

    else if (choice == 3)
    {
        document.querySelector("#message").style.textDecoration = "underline"
    }

    else if (choice == 4)
    {
        document.querySelector("#message").style.textDecoration = "none"
    }

}