let value = "10";

switch (value) {
    case 10:
        console.log("Number 10");
        break;
    case "10":
        console.log("String '10'");
        break;
    default:
        console.log("Unknown value");
}

Output: "String '10'", because "10" === "10", but "10" !== 10, so the first case does not trigger.