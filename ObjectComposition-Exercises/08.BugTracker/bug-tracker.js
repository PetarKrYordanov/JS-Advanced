function bugTracker() {
    let counter = 0;
    let collection = [];
    let selector = undefined;

    let obj = (function () {

        var report = function (author, description, reproducible, severity) {
            collection[counter] = {
                ID: counter,
                author: author,
                description: description,
                reproducible: reproducible,
                severity: severity,
                status: "Open"
            };
            counter++;
            if (selector) {
                draw();
            }
        };

        let setStatus = function (id, newStatus) {
            collection[id].status = newStatus;
            if (selector) {
                draw();
            }
        };

        var remove = function (id) {
            if (collection[id]) {
                collection = collection.filter(e => e.ID !== id)
                if (selector)
                    draw();
            }
        };

        var sort = function (method) {
            switch (method) {
                case 'author':
                    collection = collection.sort((a, b) => a.author.localeCompare(b.author));
                    break;
                case 'severity':
                    collection = collection.sort((a, b) => a.severity - b.severity);
                    break;
                case 'ID':
                    collection = collection.sort((a, b) => a.ID - b.ID);
                    break;
            }
            if (selector) {
                draw();
            }
        }

        var output = function (sel) {
            selector = sel;
        };

        var draw = function () {
            $(selector).html('');
            for (var bug of collection) {
                $(selector).append($('<div>').attr('id', "report_" + bug.ID).addClass('report').append($('<div>').addClass('body').append($('<p>').text(bug.description))).append($('<div>').addClass('title').append($('<span>').addClass('author').text('Submitted by: ' + bug.author)).append($('<span>').addClass('status').text(bug.status + " | " + bug.severity))));

            }
        };

        return { report, setStatus, remove, sort, output };

    })()


    return obj;
}