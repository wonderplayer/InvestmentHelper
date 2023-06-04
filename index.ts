const response = await fetch("https://api.github.com/users/denoland");
const jsonResponse = await response.json();
const filename = "/home/rolandsstrakis/SoftwareDevelopment/InvestmentHelper/eftResponse.json";
Deno.writeTextFile(filename, JSON.stringify(jsonResponse));