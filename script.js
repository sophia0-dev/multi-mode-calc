// --- Tab Switching Logic ---
function switchTab(tabName) {
    // Hide all content divs
    const contents = document.querySelectorAll('.content');
    contents.forEach(div => div.classList.remove('active'));

    // Remove active class from all buttons
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(btn => btn.classList.remove('active'));

    // Show selected content and activate button
    const activeContent = document.getElementById(tabName);
    if(activeContent) {
        activeContent.classList.add('active');
    }
    
    // Highlight the correct tab button
    // Find the button that called the function or match by text
    // Simplest approach: Loop through buttons and check their onclick attribute text
    tabs.forEach(btn => {
        if(btn.getAttribute('onclick').includes(tabName)) {
            btn.classList.add('active');
        }
    });
}

// --- Normal Calculator Logic ---
const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
    try {
        // Evaluates the string math (be careful with eval in production)
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// --- Temperature Logic ---
function convertTemp(type) {
    const c = document.getElementById('celsius');
    const f = document.getElementById('fahrenheit');
    const k = document.getElementById('kelvin');

    if (type === 'C') {
        f.value = (parseFloat(c.value) * 9/5) + 32;
        k.value = parseFloat(c.value) + 273.15;
    } else if (type === 'F') {
        c.value = (parseFloat(f.value) - 32) * 5/9;
        k.value = (parseFloat(f.value) - 32) * 5/9 + 273.15;
    } else if (type === 'K') {
        c.value = parseFloat(k.value) - 273.15;
        f.value = (parseFloat(k.value) - 273.15) * 9/5 + 32;
    }
    // Rounding for cleaner look
    if(c.value) c.value = parseFloat(parseFloat(c.value).toFixed(2));
    if(f.value) f.value = parseFloat(parseFloat(f.value).toFixed(2));
    if(k.value) k.value = parseFloat(parseFloat(k.value).toFixed(2));
}

// --- Weight Logic ---
function convertWeight(type) {
    const kg = document.getElementById('kg');
    const lbs = document.getElementById('lbs');
    const oz = document.getElementById('oz');

    if (type === 'kg') {
        lbs.value = parseFloat(kg.value) * 2.20462;
        oz.value = parseFloat(kg.value) * 35.274;
    } else if (type === 'lbs') {
        kg.value = parseFloat(lbs.value) / 2.20462;
        oz.value = parseFloat(lbs.value) * 16;
    } else if (type === 'oz') {
        kg.value = parseFloat(oz.value) / 35.274;
        lbs.value = parseFloat(oz.value) / 16;
    }
    
    // Rounding
    if(kg.value) kg.value = parseFloat(parseFloat(kg.value).toFixed(3));
    if(lbs.value) lbs.value = parseFloat(parseFloat(lbs.value).toFixed(3));
    if(oz.value) oz.value = parseFloat(parseFloat(oz.value).toFixed(3));
}