const features = [
  {
    image: "/images/features/features-tab-1.svg",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    link: "#",
  },
  {
    image: "/images/features/features-tab-2.svg",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    link: "#",
  },
  {
    image: "/images/features/features-tab-3.svg",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    link: "#",
  },
];

const featureOptions = document.querySelectorAll(".feature-option");

featureOptions.forEach((option, index) => {
  option.addEventListener("click", () => {
    featureOptions.forEach((opt) => opt.classList.remove("selected"));

    option.classList.add("selected");
    const current = features[index];
    // Update
    document.querySelector("#feature-img").src = current.image;
    document.querySelector("#feature-img").alt = current.title;
    document.querySelector("#feature-title").textContent = current.title;
    document.querySelector("#feature-description").textContent =
      current.description;
    document.querySelector("#feature-link").href = current.link;
  });
});
