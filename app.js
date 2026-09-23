import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { addDoc, collection, getFirestore, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const contactForm = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit-button");
const formStatus = document.querySelector("#form-status");
const isConfigured = !Object.values(firebaseConfig).some((value) => value.startsWith("PASTE_"));

if (contactForm && isConfigured) {
    const firebaseApp = initializeApp(firebaseConfig);
    const database = getFirestore(firebaseApp);

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        submitButton.disabled = true;
        submitButton.querySelector("span").textContent = "...";
        formStatus.textContent = "Sending your message...";

        const formData = new FormData(contactForm);

        try {
            await addDoc(collection(database, "contactMessages"), {
                name: formData.get("name").trim(),
                email: formData.get("email").trim(),
                message: formData.get("message").trim(),
                createdAt: serverTimestamp(),
                status: "new"
            });
            contactForm.reset();
            formStatus.textContent = "Thanks. Your message has been sent successfully.";
        } catch (error) {
            console.error("Unable to save contact message", error);
            formStatus.textContent = "Something went wrong. Please try again shortly.";
        } finally {
            submitButton.disabled = false;
            submitButton.querySelector("span").textContent = "↗";
        }
    });
} else if (contactForm) {
    formStatus.textContent = "Add your Firebase Web App config to enable message delivery.";
    contactForm.addEventListener("submit", (event) => event.preventDefault());
}