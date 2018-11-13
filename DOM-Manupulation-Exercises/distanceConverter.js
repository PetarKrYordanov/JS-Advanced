function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', attachEventsListeners);
    let inputValue = +document.getElementById('inputDistance').value;

    let inputOption = document.getElementById('inputUnits').selectedIndex;
    let outputOption = document.getElementById('outputUnits').selectedIndex;

    let ToMeters = [1000, 1, 0.01, 0.001, 1609.34, 0.9144, 0.3048, 0.0254];
    //     1 km = 1000 m
    // 1 m = 1 m
    // 1 cm = 0.01 m
    // 1 mm = 0.001 m
    // 1 mi = 1609.34 m
    // 1 yrd = 0.9144 m
    // 1 ft = 0.3048 m
    // 1 in = 0.0254 m

    let convertToMeters = +inputValue * ToMeters[inputOption];

    document.getElementById('outputDistance').value = (convertToMeters / (ToMeters[outputOption]));
}
