function ticketsFunctions(arr, sortCriteria) {
    let tickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = +price;
            this.status = status;
        }
    }

    arr.forEach(line => {
        let [destination, price, status] = line.split('\|');
        tickets.push(new Ticket(destination, price, status));
    });
    let sorted = [];
    if (tickets.length > 1) {
        sorted = tickets.sort((a, b) => {

            if (sortCriteria === "price") {
                return +a.price - +b.price;
            } else {
                var x = a[sortCriteria].toLowerCase();
                var y = b[sortCriteria].toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            }
        })
    } else {
        sorted = tickets;
    }

    return sorted;
}

ticketsFunctions(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);

ticketsFunctions(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
);