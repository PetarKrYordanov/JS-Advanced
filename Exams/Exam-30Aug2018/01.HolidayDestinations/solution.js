function addDestination() {

    let input = $("#input .inputData");

    let city = $(input[0]).val();
    let country = $(input[1]).val();
    let season = $("#seasons :selected").text();

    if (city === "" || country === "") {
        return;
    }
    let destinationList = $("#destinationsList");

    let currentRow = $("<tr>").append($("<td>").text(`${city}, ${country}`)).append($("<td>").text(`${season}`));
    currentRow.appendTo(destinationList);

    $(input[0]).val("");
    $(input[1]).val("");

    let selector = ('#' + season.toLowerCase()).toString();

    let oldValue = $(selector).val();
    let newVal = +oldValue + 1;
    $(selector).val(newVal);
}