var container = document.getElementById("container");

$("button").click(giveMe())

function giveMe() {

    let request = $.get("https://localhost:5001/weatherforecast");

    request.done(function (data) {
        let response = JSON.parse(data);
        alert(response)
    });
}