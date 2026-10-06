// Filter fashion products
function filterItems(category) {

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        if (category === "all") {
            product.style.display = "block";
        }
        else if (product.classList.contains(category)) {
            product.style.display = "block";
        }
        else {
            product.style.display = "none";
        }

    });
}


// Color matching
function matchColor() {

    let color = document.getElementById("color").value;
    let result = document.getElementById("colorResult");

    let matches = {

        black: "🤍 White • 🤎 Beige • ❤️ Red • ✨ Gold",

        white: "🖤 Black • 💙 Blue • 🌸 Pink • 🤎 Brown",

        pink: "🤍 White • 🩶 Grey • 🖤 Black • 🤎 Beige",

        blue: "🤍 White • 🤎 Brown • 🩶 Grey • 💙 Navy",

        burgundy: "🤍 Cream • 🖤 Black • 🤎 Beige • ✨ Gold",

        beige: "🤍 White • 🖤 Black • 🍷 Burgundy • 💚 Olive"
    };

    result.innerHTML =
        "Best matches for " + color.toUpperCase() +
        ":<br><br>" + matches[color];
}


// Outfit builder
function createLook() {

    let top = document.getElementById("top").value;
    let bottom = document.getElementById("bottom").value;
    let shoes = document.getElementById("shoes").value;
    let accessory = document.getElementById("accessory").value;

    let score = Math.floor(Math.random() * 16) + 85;

    document.getElementById("outfitResult").innerHTML = `
        <h3>✨ YOUR LOOK ✨</h3>

        👕 <b>Top:</b> ${top}<br>
        👖 <b>Bottom:</b> ${bottom}<br>
        👟 <b>Shoes:</b> ${shoes}<br>
        👜 <b>Accessory:</b> ${accessory}

        <br><br>

        <strong>STYLE SCORE: ${score}/100</strong>

        <br>

        💡 Stylist Tip:
        Keep your accessories minimal for a balanced look!
    `;
}


// Favorite message
function showMessage(message) {
    alert(message);
}
