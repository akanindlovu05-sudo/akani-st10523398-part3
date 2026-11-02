// Bean & Bake Café - main.js
// This file is linked from enquiry.html (#enquiryForm / #formStatus) but is
// intentionally left empty for Part 2, which covers CSS styling and
// responsive design only. Form validation and submit handling will be
// added here in Part 3.
document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. CONTACT FORM VALIDATION
    // ==========================================
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all required fields in the contact form.");
                return;
            }

            // Simple email format verification
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you, " + name + "! Your message has been sent successfully. We will get back to you soon!");
            contactForm.reset();
        });
    }

    // ==========================================
    // 2. ENQUIRY / ORDER FORM DYNAMIC RESPONSE
    // ==========================================
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullName = document.getElementById("enquiryName").value.trim();
            const enquiryType = document.getElementById("enquiryType").value;
            const responseBox = document.getElementById("enquiryResponse");

            if (fullName === "" || enquiryType === "") {
                alert("Please complete all required fields for your enquiry.");
                return;
            }

            // Dynamic response generation based on selection
            let responseText = "";
            if (enquiryType === "custom-cake") {
                responseText = `Thank you ${fullName}! Custom cake orders at Bean & Bake require at least 48 hours notice. Our baker will contact you shortly to confirm design details and pricing.`;
            } else if (enquiryType === "catering") {
                responseText = `Thank you for your catering interest, ${fullName}! A café coordinator will email our full artisanal pastry and coffee catering menu shortly.`;
            } else {
                responseText = `Thank you ${fullName}! Your enquiry regarding our bakery items has been received. We look forward to serving you at Bean & Bake Café!`;
            }

            // Display dynamic response on the page
            if (responseBox) {
                responseBox.style.display = "block";
                responseBox.innerHTML = `<p style="background: #fdf6ec; padding: 14px; border-left: 5px solid #d4a373; margin-top: 15px; border-radius: 4px; color: #4a3b32;"><strong>Dynamic Response:</strong> ${responseText}</p>`;
            } else {
                alert(responseText);
            }

            enquiryForm.reset();
        });
    }

    // ==========================================
    // 3. PRODUCT SEARCH & FILTER FEATURE
    // ==========================================
    const searchInput = document.getElementById("productSearch");
    if (searchInput) {
        searchInput.addEventListener("keyup", function (e) {
            const searchTerm = e.target.value.toLowerCase();
            const productCards = document.querySelectorAll(".product-card, .item-card, .card, .menu-item");

            productCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    card.style.display = "block"; // Show matching item
                } else {
                    card.style.display = "none";  // Hide non-matching item
                }
            });
        });
    }

    // ==========================================
    // 4. GLOBAL SEARCH / NAVBAR FILTER FALLBACK
    // ==========================================
    const generalSearchForm = document.querySelector(".search-form, header form");
    if (generalSearchForm && !searchInput) {
        generalSearchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const queryInput = generalSearchForm.querySelector("input[type='text'], input[type='search']");
            if (queryInput && queryInput.value.trim() !== "") {
                alert("Searching for: " + queryInput.value.trim() + ". Redirecting to items...");
            } else {
                alert("Please enter a term to search.");
            }
        });
    }

});