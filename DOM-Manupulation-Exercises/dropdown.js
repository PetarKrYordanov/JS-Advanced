function addItem() {
    let selector = document.createElement('option');
    selector.value = document.getElementById("newItemValue").value;
    selector.textContent = document.getElementById("newItemText").value;
    document.getElementById('menu').appendChild(selector);

    document.getElementById("newItemText").value = '';
    document.getElementById("newItemValue").value = '';
}