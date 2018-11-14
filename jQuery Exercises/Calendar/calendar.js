function calendar(arr) {
    arr.reverse();
    let [year, month, day] = arr;
    let date = new Date(year, month - 1, day);

    var monthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let captionText = `${monthsNames[date.getMonth()]} ${date.getFullYear()}`;

    let content = $('#content');
    let table = $("<table>")
        .appendTo(content);

    let caption = $("<caption>")
        .appendTo(table)
        .text(captionText);

    let tableBody = $("<tbody>")
        .appendTo(table);


    (function makeFirstRow() {
        var daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let firstRow = $("<tr>").appendTo(tableBody);
        let days = daysNames.slice(1);
        days.push(daysNames[0]);

        for (const d of days) {
            $("<th>").text(d)
                .appendTo(firstRow);
        }
    })()

    return a = (function makeCalendar() {
        let monthsDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        let today = date.getDate();

        let dayOfWeek = new Date(year + "-" + (month) + "-01").getDay();
        dayOfWeek = (dayOfWeek === 0) ? 7 : dayOfWeek;
        let currentDay = 1;
        let rowValue = 1;
        while (currentDay <= monthsDays) {

            let currRow = $("<tr>").appendTo(tableBody);

            for (let i = 1; i <= 7; i++) {

                if (rowValue === 1 && i < dayOfWeek && dayOfWeek !== 1) {
                    $("<td>").text('').appendTo(currRow);
                    continue;
                }
                if (currentDay <= monthsDays) {
                    $("<td>").appendTo(currRow).text(currentDay);
                    if (currentDay === today) {
                        currRow.children().last().addClass("today")
                    }
                    currentDay++;
                } else {
                    $("<td>").text("").appendTo(currRow);
                }

            }
            rowValue++;
        }

    })()

}


