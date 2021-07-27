function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    const inputData = document.querySelector('#inputs textarea');
    const bestRestaurant = document.querySelector('#bestRestaurant p');
    const bestWorkers = document.querySelector('#workers p');

    function onClick() {
        let restaurants = {};

        JSON.parse(inputData.value).forEach((el) => {
            const [restaurantName, data] = el.split(' - ');
            const workers = data.split(', ');

            let arrayWorkers = [];

            for (const worker of workers) {
                const [name, salary] = worker.split(' ');
                arrayWorkers.push({
                    name,
                    salary,
                });
            };

            if (restaurants[restaurantName]) {
                arrayWorkers = arrayWorkers.concat(restaurants[restaurantName].arrayWorkers);
            };

            arrayWorkers.sort((a, b) => b.salary - a.salary);
            const bestSalary = Number(arrayWorkers[0].salary);
            const averageSalary = arrayWorkers
                .reduce((sum, worker) => sum + Number(worker.salary), 0) / arrayWorkers.length;

            restaurants[restaurantName] = {
                arrayWorkers,
                averageSalary,
                bestSalary,
            };
        });

        let bestResaturant = undefined;
        let bestAverageSalary = 0;
        let bestName = undefined;

        for (const restaurant in restaurants) {
            const currAverageSalary = restaurants[restaurant].averageSalary;
            if (currAverageSalary > bestAverageSalary) {

                bestAverageSalary = currAverageSalary;
                bestResaturant = restaurants[restaurant];
                bestName = restaurant;
            }
        };

        const x = bestResaturant;
        bestRestaurant.textContent = `Name: ${bestName} 
            Average Salary: ${bestResaturant.averageSalary.toFixed(2)}
            Best Salary: ${bestResaturant.bestSalary.toFixed(2)}`;

        let arrayOfBestWorkers = [];
        bestResaturant.arrayWorkers.forEach((worker) => {
            arrayOfBestWorkers.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
        });

        bestWorkers.textContent = arrayOfBestWorkers.join(" ");
    }
}