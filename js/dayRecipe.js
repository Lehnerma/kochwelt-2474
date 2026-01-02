let dayRecipes = [
  {
    title: "Lasagne",
    img: "./assets/img/lasagne.jpg",
    recipe: "../recipe/lasagne.html",
    descrip:
      "Eine klassische Lasagne besticht durch ihre Schichten aus herzhafter Bolognese, cremiger Béchamel-Sauce und zarten Nudelplatten. Das Ganze wird großzügig mit Käse bestreut und im Ofen goldbraun überbacken, bis es herrlich duftet. Sie ist das ultimative Wohlfühlgericht für die ganze Familie und lässt sich zudem wunderbar vorbereiten. Ein zeitloser italienischer Favorit, der einfach immer überzeugt.",
  },
  {
    title: "Tomaten-Pasta",
    img: "./assets/img/pasta.jpg",
    recipe: "../recipe/pasta_tomato.html",
    descrip: "Diese Tomaten-Pasta ist der Inbegriff von schneller, ehrlicher Küche mit Fokus auf frische Zutaten. Saftige Tomaten werden mit Olivenöl, Knoblauch und aromatischem Basilikum zu einer leichten Sauce eingekocht. Zusammen mit al dente gekochten Nudeln entsteht ein Gericht, das nach Sommer in Italien schmeckt. Frisch geriebener Parmesan runden das Aroma perfekt ab.",
  },
  { title: "Karniyarik", img: "./assets/img/profil.png", recipe: "../recipe/karniyarik.html", descrip: "Karniyarik ist ein Klassiker der türkischen Küche, bei dem sanft gebratene Auberginen mit einer würzigen Hackfleisch-Gemüse-Mischung gefüllt werden. Die Kombination aus weicher Aubergine, Tomaten, Paprika und orientalischen Gewürzen sorgt für eine wahre Geschmacksexplosion." },
  {
    title: "Schoko Kuchen",
    img: "./assets/img/choco_cake.jpg",
    recipe: "../recipe/chocolate_cake.html",
    descrip: "Dieser Schokokuchen ist ein Traum für alle Genießer – außen leicht knusprig und innen herrlich saftig. Hochwertiger Kakao oder geschmolzene Zartbitterschokolade verleihen ihm ein intensives Aroma, das nicht zu süß ist. Er ist im Handumdrehen gebacken und eignet sich perfekt für den Nachmittagskaffee.",
  },
  { title: "Tiramisu", img: "./assets/img/tiramisu.jpg", recipe: "../recipe/tiramisu.html", descrip: "Hol dir ein klein wenig Italien zu dir nachhause. Mit einem der bekanntesten Desserts die es aus dem sonnigen Italien gibt. Der cremige, leicht Mandelige Geschmack wird dich und deine Gäste begeistern." },
];

const dayRecipeImg = document.getElementById("dayRecipeImg");
const dayRecipeTitle = document.getElementById("dayRecipeTitle");
const dayRecipeDescrip = document.getElementById("dayRecipeDescrip");
const dayRecipeLink = document.getElementById("dayRecipeLink");

function setDayRecipe() {
  let randomNumber = Math.floor(Math.random() * dayRecipes.length);
  console.log(dayRecipes[randomNumber]);
  dayRecipeImg.src = dayRecipes[randomNumber].img;
  dayRecipeTitle.innerText = dayRecipes[randomNumber].title;
  dayRecipeDescrip.innerText = dayRecipes[randomNumber].descrip;
  dayRecipeLink.href = dayRecipes[randomNumber].recipe;
}
