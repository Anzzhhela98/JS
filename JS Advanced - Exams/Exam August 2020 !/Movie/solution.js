class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];

        this.totalProfit = 0;
        this.soldTickets = 0;
    }

    newScreening(date, hall, description) {
        const screening = this.screenings.find((x) => x.date == date && x.hall == hall)
        if (screening) {
            throw new Error(
                `Sorry, ${hall} hall is not available on ${date}`);
        }
        this.screenings.push({ date, hall, description });
        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        const screening = this.screenings.find((x) => x.date === date && x.hall === hall);
        const index = this.screenings.indexOf(screening);

        if (!screening) {
            throw new Error(
                `Sorry, there is no such screening for ${this.movieName} movie.`);
        }
        let cuurTotalProfit = soldTickets * this.ticketPrice;
        this.totalProfit += cuurTotalProfit
        this.soldTickets += soldTickets;
        this.screenings.splice(index, 1);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${cuurTotalProfit}`;
    }

    toString() {
        const sortomg = {
            alphabetically: (a, b) => a.hall.localeCompare(b.hall)
        }

        let result = [];
        result.push(`${this.movieName} full information:`);
        result.push(`Total profit: ${this.totalProfit.toFixed(0)}$`);
        result.push(`Sold Tickets: ${this.soldTickets}`);

        if (this.screenings.length <= 0) {
            result.push(`No more screenings!`);
        } else {
            result.push(`Remaining film screenings:`);
            this.screenings.sort(sortomg['alphabetically']).forEach((s) => {
                result.push(`${s.hall} - ${s.date} - ${s.description}`)
            })
        }
        return result.join('\n').trimEnd();
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());