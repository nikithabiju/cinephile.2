import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { app } from "./firebase-config.js";  // Make sure you have Firebase setup

const auth = getAuth(app);
const db = getDatabase(app);

// When the page loads, get user info
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("username").textContent = user.displayName || "User";

        const userId = user.uid;
        fetchUserData(userId);
    } else {
        window.location.href = "login.html"; // Redirect if not logged in
    }
});

function fetchUserData(userId) {
    const watchlistRef = ref(db, `users/${userId}/watchlist`);
    const watchedRef = ref(db, `users/${userId}/watched`);
    const reviewsRef = ref(db, `users/${userId}/reviews`);

    get(watchlistRef).then(snapshot => {
        if (snapshot.exists()) {
            displayMovies(snapshot.val(), "watchlistMovies");
        }
    });

    get(watchedRef).then(snapshot => {
        if (snapshot.exists()) {
            displayMovies(snapshot.val(), "watchedMovies");
        }
    });

    get(reviewsRef).then(snapshot => {
        if (snapshot.exists()) {
            displayReviews(snapshot.val());
        }
    });
}

function displayMovies(movieList, elementId) {
    const listElement = document.getElementById(elementId);
    listElement.innerHTML = "";
    Object.values(movieList).forEach(movie => {
        const li = document.createElement("li");
        li.textContent = movie.title;
        listElement.appendChild(li);
    });
}

function displayReviews(reviews) {
    const reviewList = document.getElementById("userReviews");
    reviewList.innerHTML = "";
    Object.values(reviews).forEach(review => {
        const li = document.createElement("li");
        li.textContent = `"${review.text}" - ${review.movieTitle}`;
        reviewList.appendChild(li);
    });
}
