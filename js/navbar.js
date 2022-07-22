function home() {
    document.getElementsByClassName("home")[0].style.display = "block";
    document.getElementsByClassName("participants")[0].style.display = "none";
    document.getElementsByClassName("projects")[0].style.display = "none";
    document.getElementsByClassName("about")[0].style.display = "none";
    document.getElementById("aHome").style.backgroundColor = "#e7f6f2";
    document.getElementById("aParticipants").style.backgroundColor = "#395B64";
    document.getElementById("aProjects").style.backgroundColor = "#395B64";
    document.getElementById("aAbout").style.backgroundColor = "#395B64";
    document.getElementById("aHome").style.color = "#2C3333";
    document.getElementById("aParticipants").style.color = "#e7f6f2";
    document.getElementById("aProjects").style.color = "#e7f6f2";
    document.getElementById("aAbout").style.color = "#e7f6f2";
}

function participants() {
    document.getElementsByClassName("home")[0].style.display = "none";
    document.getElementsByClassName("participants")[0].style.display = "block";
    document.getElementsByClassName("projects")[0].style.display = "none";
    document.getElementsByClassName("about")[0].style.display = "none";
    document.getElementById("aParticipants").style.backgroundColor = "#e7f6f2";
    document.getElementById("aHome").style.backgroundColor = "#395B64";
    document.getElementById("aProjects").style.backgroundColor = "#395B64";
    document.getElementById("aAbout").style.backgroundColor = "#395B64";
    document.getElementById("aParticipants").style.color = "#2C3333";
    document.getElementById("aHome").style.color = "#e7f6f2";
    document.getElementById("aProjects").style.color = "#e7f6f2";
    document.getElementById("aAbout").style.color = "#e7f6f2";
}

function projects() {
    document.getElementsByClassName("home")[0].style.display = "none";
    document.getElementsByClassName("participants")[0].style.display = "none";
    document.getElementsByClassName("projects")[0].style.display = "block";
    document.getElementsByClassName("about")[0].style.display = "none";
    document.getElementById("aProjects").style.backgroundColor = "#e7f6f2";
    document.getElementById("aHome").style.backgroundColor = "#395B64";
    document.getElementById("aParticipants").style.backgroundColor = "#395B64";
    document.getElementById("aAbout").style.backgroundColor = "#395B64";
    document.getElementById("aProjects").style.color = "#2C3333";
    document.getElementById("aHome").style.color = "#e7f6f2";
    document.getElementById("aParticipants").style.color = "#e7f6f2";
    document.getElementById("aAbout").style.color = "#e7f6f2";
}

function about() {
    document.getElementsByClassName("home")[0].style.display = "none";
    document.getElementsByClassName("participants")[0].style.display = "none";
    document.getElementsByClassName("projects")[0].style.display = "none";
    document.getElementsByClassName("about")[0].style.display = "block";
    document.getElementById("aAbout").style.backgroundColor = "#e7f6f2";
    document.getElementById("aHome").style.backgroundColor = "#395B64";
    document.getElementById("aParticipants").style.backgroundColor = "#395B64";
    document.getElementById("aProjects").style.backgroundColor = "#395B64";
    document.getElementById("aAbout").style.color = "#2C3333";
    document.getElementById("aHome").style.color = "#e7f6f2";
    document.getElementById("aParticipants").style.color = "#e7f6f2";
    document.getElementById("aProjects").style.color = "#e7f6f2";
}
