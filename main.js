function blank()
{
document.getElementById("name").innerHTML = "text_blank"
document.getElementById("comment").innerHTML = "text_blank"
}
function color()
{
document.getElementById("hier").style.color = "green"
}
function setdate() {
document.getElementById("newDate").innerHTML = new Date().toDateString();
}