const categoryItems = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const itemText = item.querySelector("h2").textContent;
  console.log(`Category: ${itemText}`);

  const itemCategories = item.querySelectorAll("li");
  console.log(`Elements: ${itemCategories.length}`);
});
