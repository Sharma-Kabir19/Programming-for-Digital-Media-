function currencyConverter(amount, from, to) {
    let result;

    if (from === "USD" && to === "EUR") {
        result = amount * 0.93;
    } else if (from === "EUR" && to === "USD") {
        result = amount / 0.93;
    } else if (from === "USD" && to === "INR") {
        result = amount * 83.5;
    } else if (from === "INR" && to === "USD") {
        result = amount / 83.5;
    } else {
        console.log("Conversion not supported!");
        return;
    }

    console.log(`${amount} ${from} = ${result.toFixed(2)} ${to}`);
}

currencyConverter(100, "USD", "EUR");
currencyConverter(50, "EUR", "USD");
currencyConverter(100, "USD", "INR");
currencyConverter(500, "INR", "USD");
