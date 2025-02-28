// List of possible case drops
const caseItems = [
    { name: "Common Skin", color: "gray", chance: 50 },
    { name: "Uncommon Skin", color: "green", chance: 30 },
    { name: "Rare Skin", color: "blue", chance: 15 },
    { name: "Epic Skin", color: "purple", chance: 4 },
    { name: "Legendary Skin", color: "gold", chance: 1 }
];

// Function to pick an item based on probability
function openCase() {
    let rand = Math.random() * 100;
    let cumulativeChance = 0;

    for (let item of caseItems) {
        cumulativeChance += item.chance;
        if (rand < cumulativeChance) {
            return item;
        }
    }
}

// Button click event
document.getElementById("openCaseBtn").addEventListener("click", () => {
    let droppedItem = openCase();
    let resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `You got: <span style="color:${droppedItem.color}">${droppedItem.name}</span>`;
});
