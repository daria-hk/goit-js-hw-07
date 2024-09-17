const categoriesAmount = document.querySelectorAll("ul#categories > li.item").length;
const categories= document.querySelectorAll("ul#categories > li.item");

console.log(`Number of catergories: ${categoriesAmount}`);

categories.forEach((categorie) => {
    const items = categorie.querySelectorAll("ul > li");
    console.log(`Catergory: ${categorie.firstElementChild.innerHTML} \n Elements: ${items.length} `);
});


