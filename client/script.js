$("button").click(giveMe)

let table = document.getElementById("table")

function giveMe() {

    let request = $.get("https://localhost:5001/weatherforecast");

    request.done(function (data) {
        data.forEach(element => {
            let row = document.createElement("tr");
            for (var key in element) {

                let cell = document.createElement("td")
                cell.innerHTML = element[key]
                row.appendChild(cell)
                table.appendChild(row);
            }

            console.log(element)
        });

    });
}