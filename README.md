<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Favorite Movies & Anime</title>
<style>
    body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #0f0e0e;
    color: #fff;
    scroll-behavior: smooth;
}

/* Navbar */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #1f1f1f;
}

nav .logo {
    font-size: 22px;
    color: #ff5252;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    position: relative;
    transition: 0.3s;
}

nav ul li a:hover,
nav ul li a.active {
    color: #ff5252;
}

nav ul li a::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -5px;
    background-color: #ff5252;
    transition: width 0.3s;
}

nav ul li a:hover::after {
    width: 100%;
}

/* Header Section */
header {
    text-align: center;
    padding: 80px 20px;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('images/inception.jpg') no-repeat center center/cover;
}

header h1 {
    font-size: 40px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}

header p {
    font-size: 18px;
    margin-bottom: 30px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
}

header .btn {
    padding: 12px 25px;
    background-color: #ff5252;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    border-radius: 5px;
    transition: 0.3s;
}

header .btn:hover {
    background-color: #e04848;
}

/* Section Titles */
section h2 {
    text-align: center;
    margin: 50px 0 30px;
    color: #ff5252;
}

/* Cards Layout */
.cards, .movies-list, .anime-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    padding: 0 20px 50px;
}

.card, .movie-card, .anime-card {
    background-color: #1f1f1f;
    border-radius: 10px;
    overflow: hidden;
    width: 250px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card img, .movie-card img, .anime-card img {
    width: 100%;
    height: 350px;
    object-fit: cover;
}

.card h3, .movie-card h3, .anime-card h3 {
    margin: 15px 0 10px;
    color: #ff5252;
}

.card p, .movie-card p, .anime-card p {
    padding: 0 10px 15px;
    font-size: 14px;
}

.card a, .movie-card a, .anime-card a {
    display: inline-block;
    margin-bottom: 15px;
    padding: 8px 15px;
    background-color: #ff5252;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: 0.3s;
}

.card a:hover, .movie-card a:hover, .anime-card a:hover {
    background-color: #e04848;
}

.card:hover, .movie-card:hover, .anime-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(255, 82, 82, 0.5);
}

/* Footer */
footer {
    text-align: center;
    padding: 20px;
    background-color: #1f1f1f;
    border-top: 1px solid #333;
    margin-top: 50px;
    font-size: 14px;
    color: #aaa;
}

/* Responsive */
@media (max-width: 768px) {
    .cards, .movies-list, .anime-list {
        flex-direction: column;
        align-items: center;
    }

    header h1 {
        font-size: 32px;
    }
}

@media (max-width: 600px) {
    .card, .movie-card, .anime-card {
        width: 90%;
    }

    header h1 {
        font-size: 26px;
    }
}

#reviews {
  text-align: center;
  margin: 50px auto;
  width: 90%;
  max-width: 600px;
}

#reviewForm {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 10px;
}

#reviewForm input,
#reviewForm select,
#reviewForm textarea {
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
}

#reviewForm button {
  background-color: #ff5252;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

#reviewForm button:hover {
  background-color: #e04848;
}

#reviewsContainer {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.review-card {
  background-color: #1f1f1f;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
}


</style>
</head>
<body>
    <nav>
        <h2 class="logo">🎬 My Movie & Anime World</h2>
        <ul>
            <li><a href="intex.html" class="active">Home</a></li>
            <li><a href="movie.html">Movies</a></li>
            <li><a href="anime.html">Anime</a></li>
            <li><a href="webseries.html">Web Series</a></li>
        </ul>
    </nav>

   <header>
        <h1>Welcome to My Favorite Movies & Anime</h1>
        <p>Explore the stories, characters, and worlds that inspire me the most!</p>
        <a href="movie.html"class='btn'>Start Exploring</a>
    </header>

   <section class="featured">

  <h2>🎥 My Top Picks</h2>

  <div class="cards">

   <div class="card">
                <img src="inception.jpg.jpg" alt="Inception">
                <h3>Inception</h3>
                <p>A mind-bending sci-fi thriller directed by Christopher Nolan.</p>
            </div>

  <div class="card">
                <img src="aot.jpg.jpg" alt="Attack on Titan">
                <h3>Attack on Titan</h3>
                <p>An epic anime about humanity’s fight for survival.</p>
            </div>

   <div class="card">
                <img src="spiderman.jpg" alt="Spider-Man: No Way Home">
                <h3>Spider-Man: No Way Home</h3>
                <p>Heroes unite in a multiverse-spanning adventure.</p>
            </div>

   <div class="card">
                <img src="demon_slayer.jpg.jpg" alt="Demon Slayer">
                <h3>Demon Slayer</h3>
                <p>Every episode feels like a movie — the visuals, music, and emotions are top-notch. </p>
            </div>

 <div class="card">
                <img src="joker.jpg" alt="Joker">
                <h3>Joker</h3>
                <p>A chilling look into the mind of Gotham’s future villain.</p>
            </div>
    <div class="card">
                <img src="onepiece.jpg.jpg" alt="One Piece">
                <h3>One Piece</h3>
                <p>A long but worthwhile journey! The mix of humor, adventure, and emotion is unmatched.</p>
            </div>

   </div>
 </section>

<footer>
        <p>© 2025 My Movie & Anime World | Designed by [Shadow]</p>
    </footer>


</body>



</html>


