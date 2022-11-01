let cars = [
    {brand: "Mercedes", model: "C180", Year: "2010", Price: "15000"},
    {brand: "BMW", model: "e34", Year: "1991", Price: "5500"},
    {brand: "Toyoto", model: "Camry", Year: "2008", Price: "13500"},
    {brand: "Kia", model: "Optima", Year: "2012", Price: "245000"},
    {brand: "Vaz", model: "2121", Year: "2018", Price: "21890"},
    {brand: "Opel", model: "Astra", Year: "2006", Price: "9000"},
]
for(let i =0; i < cars.length; i++){
    if(cars[i].Year >= 2010)
    {
        console.log(cars[i].Price)
    }
}

