let actions = {
    "potatoes": {
        "start": new Date("2025-06-12"),
        "end": new Date("2025-06-19")
    },
    "fax": {
        "start": new Date("2025-06-20"),
        "end": new Date("2025-06-24")
    }
};

let today = Date.now();

for (const [key, value] of Object.entries(actions)) {
    if (value["start"] <= today && value["end"] >= today) {
        document.getElementById(key).classList.add("enabled")
    }
}
