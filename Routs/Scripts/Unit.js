// Temperature conversion logic
document
  .getElementById("convert-temperature")
  .addEventListener("click", function () {
    const amount = parseFloat(
      document.getElementById("temperature-amount").value
    );
    const fromUnit = document.getElementById("temperature-from").value;
    const toUnit = document.getElementById("temperature-to").value;

    if (isNaN(amount)) {
      alert("Please enter a valid number");
      return;
    }

    let convertedAmount;

    if (fromUnit === "Celsius") {
      if (toUnit === "Fahrenheit") {
        convertedAmount = (amount * 9) / 5 + 32;
      } else if (toUnit === "Kelvin") {
        convertedAmount = amount + 273.15;
      } else {
        convertedAmount = amount; // Celsius to Celsius
      }
    } else if (fromUnit === "Fahrenheit") {
      if (toUnit === "Celsius") {
        convertedAmount = ((amount - 32) * 5) / 9;
      } else if (toUnit === "Kelvin") {
        convertedAmount = ((amount - 32) * 5) / 9 + 273.15;
      } else {
        convertedAmount = amount; // Fahrenheit to Fahrenheit
      }
    } else if (fromUnit === "Kelvin") {
      if (toUnit === "Celsius") {
        convertedAmount = amount - 273.15;
      } else if (toUnit === "Fahrenheit") {
        convertedAmount = ((amount - 273.15) * 9) / 5 + 32;
      } else {
        convertedAmount = amount; // Kelvin to Kelvin
      }
    }

    document.getElementById(
      "temperature-result"
    ).textContent = `Converted Value: ${convertedAmount.toFixed(2)} ${toUnit}`;
  });

// Weight conversion logic (unchanged)
document
  .getElementById("convert-weight")
  .addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("weight-amount").value);
    const fromUnit = document.getElementById("weight-from").value;
    const toUnit = document.getElementById("weight-to").value;

    if (isNaN(amount)) {
      alert("Please enter a valid number");
      return;
    }

    const conversionRates = {
      kg: { lb: 2.20462, oz: 35.274, g: 1000, st: 0.15747 },
      lb: { kg: 0.453592, oz: 16, g: 453.592, st: 0.071429 },
      oz: { kg: 0.0283495, lb: 0.0625, g: 28.3495, st: 0.004464 },
      g: { kg: 0.001, lb: 0.00220462, oz: 0.035274, st: 0.00015747 },
      st: { kg: 6.35029, lb: 14, oz: 224, g: 6350.29 },
    };

    const convertedAmount = (
      amount * conversionRates[fromUnit][toUnit]
    ).toFixed(2);
    document.getElementById(
      "weight-result"
    ).textContent = `Converted Value: ${convertedAmount} ${toUnit}`;
  });

// Length conversion logic (unchanged)
document
  .getElementById("convert-length")
  .addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("length-amount").value);
    const fromUnit = document.getElementById("length-from").value;
    const toUnit = document.getElementById("length-to").value;

    if (isNaN(amount)) {
      alert("Please enter a valid number");
      return;
    }

    const lengthConversion = {
      m: { km: 0.001, ft: 3.28084, yd: 1.09361, in: 39.3701 },
      km: { m: 1000, ft: 3280.84, yd: 1093.61, in: 39370.1 },
      ft: { m: 0.3048, km: 0.0003048, yd: 0.333333, in: 12 },
      yd: { m: 0.9144, km: 0.0009144, ft: 3, in: 36 },
      in: { m: 0.0254, km: 0.0000254, ft: 0.0833333, yd: 0.0277778 },
    };

    const convertedAmount = (
      amount * lengthConversion[fromUnit][toUnit]
    ).toFixed(2);
    document.getElementById(
      "length-result"
    ).textContent = `Converted Value: ${convertedAmount} ${toUnit}`;
  });

// Time Converter Function
document.getElementById("convert-time").addEventListener("click", function () {
  let amount = document.getElementById("time-amount").value;
  let fromUnit = document.getElementById("time-from").value;
  let toUnit = document.getElementById("time-to").value;

  const timeConversions = {
    seconds: 1,
    minutes: 60,
    hours: 3600,
    days: 86400,
    weeks: 604800,
    months: 2628000,
    years: 31536000,
  };

  let result = (amount * timeConversions[fromUnit]) / timeConversions[toUnit];
  document.getElementById(
    "time-result"
  ).innerText = `Converted Value: ${result}`;
});

// Area Converter Function
document.getElementById("convert-area").addEventListener("click", function () {
  let amount = document.getElementById("area-amount").value;
  let fromUnit = document.getElementById("area-from").value;
  let toUnit = document.getElementById("area-to").value;

  const areaConversions = {
    sq_m: 1,
    sq_km: 1e6,
    sq_ft: 0.092903,
    sq_in: 0.00064516,
    acre: 4046.86,
    sq_yd: 0.836127,
    hectare: 10000,
  };

  let result = (amount * areaConversions[fromUnit]) / areaConversions[toUnit];
  document.getElementById(
    "area-result"
  ).innerText = `Converted Value: ${result}`;
});

// Speed Converter Function
document.getElementById("convert-speed").addEventListener("click", function () {
  let amount = document.getElementById("speed-amount").value;
  let fromUnit = document.getElementById("speed-from").value;
  let toUnit = document.getElementById("speed-to").value;

  const speedConversions = {
    mps: 1,
    kmh: 3.6,
    mph: 2.23694,
    fps: 3.28084,
  };

  let result = (amount * speedConversions[fromUnit]) / speedConversions[toUnit];
  document.getElementById(
    "speed-result"
  ).innerText = `Converted Value: ${result}`;
});

// Energy Converter Function
document
  .getElementById("convert-energy")
  .addEventListener("click", function () {
    let amount = document.getElementById("energy-amount").value;
    let fromUnit = document.getElementById("energy-from").value;
    let toUnit = document.getElementById("energy-to").value;

    const energyConversions = {
      joules: 1,
      calories: 4.184,
      kwh: 3600000,
      btus: 1055.06,
    };

    let result =
      (amount * energyConversions[fromUnit]) / energyConversions[toUnit];
    document.getElementById(
      "energy-result"
    ).innerText = `Converted Value: ${result}`;
  });

// Pressure Converter Function
document
  .getElementById("convert-pressure")
  .addEventListener("click", function () {
    let amount = document.getElementById("pressure-amount").value;
    let fromUnit = document.getElementById("pressure-from").value;
    let toUnit = document.getElementById("pressure-to").value;

    const pressureConversions = {
      pascal: 1,
      atm: 101325,
      bar: 100000,
      psi: 6894.76,
    };

    let result =
      (amount * pressureConversions[fromUnit]) / pressureConversions[toUnit];
    document.getElementById(
      "pressure-result"
    ).innerText = `Converted Value: ${result}`;
  });

// Power Converter Function
document.getElementById("convert-power").addEventListener("click", function () {
  let amount = document.getElementById("power-amount").value;
  let fromUnit = document.getElementById("power-from").value;
  let toUnit = document.getElementById("power-to").value;

  const powerConversions = {
    watts: 1,
    hp: 745.7,
    kw: 1000,
  };

  let result = (amount * powerConversions[fromUnit]) / powerConversions[toUnit];
  document.getElementById(
    "power-result"
  ).innerText = `Converted Value: ${result}`;
});

// Volume Converter Function
document
  .getElementById("convert-volume")
  .addEventListener("click", function () {
    let amount = document.getElementById("volume-amount").value;
    let fromUnit = document.getElementById("volume-from").value;
    let toUnit = document.getElementById("volume-to").value;

    const volumeConversions = {
      liters: 1,
      milliliters: 0.001,
      gallons: 3.78541,
      cubic_m: 1000,
    };

    let result =
      (amount * volumeConversions[fromUnit]) / volumeConversions[toUnit];
    document.getElementById(
      "volume-result"
    ).innerText = `Converted Value: ${result}`;
  });

// Data Storage Converter Function
document
  .getElementById("convert-storage")
  .addEventListener("click", function () {
    let amount = document.getElementById("storage-amount").value;
    let fromUnit = document.getElementById("storage-from").value;
    let toUnit = document.getElementById("storage-to").value;

    const storageConversions = {
      B: 1,
      KB: 1024,
      MB: 1048576,
      GB: 1073741824,
      TB: 1099511627776,
    };

    let result =
      (amount * storageConversions[fromUnit]) / storageConversions[toUnit];
    document.getElementById(
      "storage-result"
    ).innerText = `Converted Value: ${result}`;
  });
