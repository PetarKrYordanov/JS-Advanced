function search() {
    const searchText = $('#searchText').val().toLowerCase();

    const count = $('#towns li')
        .css("font-weight", "")
        .filter(function (index, elem) {
            return elem.textContent.toLowerCase().indexOf(searchText) > -1;
        })
        .css("font-weight", 'bold')
        .length;

    $("#result").textContent = count;
}
