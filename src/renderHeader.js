function renderHeader(projectObj) {
  const header = document.querySelector(".project-detail");
  const title = document.createElement("h1");
  title.textContent = projectObj.title;
  const description = document.createElement("h3");
  description.textContent = projectObj.description;

  header.appendChild(title);
  header.appendChild(description);
}

export { renderHeader };
