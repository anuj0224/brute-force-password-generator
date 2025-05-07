# 🔐 Brute-Force Password Generator

> _"Crack the gate, but only in your sandbox."_  
> **Created by Anuj Mourya**

This is a Node.js tool using Puppeteer that brute-forces a password field by auto-generating strong 8-character passwords with:

- 🅰 Uppercase
- 🔡 Lowercase
- 🔢 Numbers
- 🔣 Special characters

---

## 💣 Features

- 🔁 Auto-looping password generator
- 🤖 Browser automation with Puppeteer
- 💥 Real-time form submission
- ✅ Success detection based on DOM text

---

## ⚠️ LEGAL WARNING

This tool is **strictly for educational, local, and ethical testing only**.  
Do **NOT** use on any live system without proper authorization.

> _Unauthorized use can result in legal consequences. Hack responsibly._

---

## 🧠 Requirements

- Node.js (v16 or newer)
- Puppeteer

Install dependencies:
```bash
npm install puppeteer
````

---

## 🛠️ Usage

1. Clone the repo or download the files.
2. Set up the `login.html` test page (see below).
3. Run:

```bash
node brute_force_password_generator.js
```

---

## 🧪 Test Login Page

Save the following as `login.html` and open it in a browser:

```html
<input type="password" id="password" />
<button id="loginBtn">Login</button>
<p id="message"></p>
<script>
  const correctPassword = "Abc123!@";
  document.getElementById("loginBtn").onclick = () => {
    const entered = document.getElementById("password").value;
    document.getElementById("message").textContent =
      entered === correctPassword ? "Login successful!" : "Invalid password";
  };
</script>
```

Update your script to point to the local file:

```js
await page.goto('file:///C:/path/to/login.html');
```

---

## 💻 Output (Sample)

```
[+] Attempt #17: Trying password -> Rz3#qW9@
[+] Attempt #18: Trying password -> A1b2C3!&
[✓] SUCCESS! Password found: Abc123!@
```

---

## ✉️ Contact

**Made with 💻 by Anuj Mourya**

> *“Master the system. Don't abuse it.”*

