const massages = [
    "Sebastian",
    "Chad",
    "climatechangex2",
    "angrybirds",
    "Joan",
    "Camila",
    "Celeste",
    "Freddy",
    "Dorime"
]

const randomMsg = () => {
    const massage = massages[Math.floor(Math.random() * massages.length)]
    console.log(massage)
};

module.exports = { randomMsg };

