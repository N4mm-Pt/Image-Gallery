function getPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
      const photoLayout = document.querySelector(".myProducts-gallery");
      let html = "";
      data.forEach((e) => {
        html += `
            <img id=${e.id} src="${e.thumbnailUrl}" onclick="selectPhoto(${e.id})" />
          `;
      });
      photoLayout.innerHTML = html;
    });
}
getPhotos();

function selectPhoto(imgId) {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
      const photoLayout = document.querySelector("#img-Box");
      const titleLayout = document.querySelector(".centered");
      data.forEach((e) => {
        if (e.id === imgId) {
          photoLayout.src = e.url;
          titleLayout.innerHTML = `${e.title}`;
        }
      });
    });
}

function searchByTitle() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
      const inputValue = document.querySelector("#search");
      const photoLayout = document.querySelector(".myProducts-gallery");
      let html = "";
      data.forEach((e) => {
        if(e.title.includes(inputValue.value))
        {
          html += `
            <img id=${e.id} src="${e.thumbnailUrl}" onclick="selectPhoto(${e.id})" />
          `;
        } 
      });
      if(html === "")
      {
        photoLayout.innerHTML = "No result!"
      }
      else{
        photoLayout.innerHTML = html;
      }
    });
}
