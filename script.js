document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
  
    // Example data
    const data = [
      {
        userId: 1,
        id: 1,
        title: "Title 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia rhoncus justo, ac tincidunt risus dignissim ac. Quisque elementum ipsum non ligula elementum, at placerat lacus gravida."
      },
      // Add more data objects as needed

      {
        userId: 2,
        id: 2,
        title: "Title 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia rhoncus justo, ac tincidunt risus dignissim ac. Quisque elementum ipsum non ligula elementum, at placerat lacus gravida."
      },
      {
        userId: 3,
        id: 3,
        title: "Title 3",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia rhoncus justo, ac tincidunt risus dignissim ac. Quisque elementum ipsum non ligula elementum, at placerat lacus gravida."
      },
      {
        userId: 4,
        id: 4,
        title: "Title 4",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia rhoncus justo, ac tincidunt risus dignissim ac. Quisque elementum ipsum non ligula elementum, at placerat lacus gravida."
      },
      {
        userId: 5,
        id: 5,
        title: "Title 5",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia rhoncus justo, ac tincidunt risus dignissim ac. Quisque elementum ipsum non ligula elementum, at placerat lacus gravida."
      },
      {
        userId: 6,
        id: 6,
        title: "Title 6",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia rhoncus justo, ac tincidunt risus dignissim ac. Quisque elementum ipsum non ligula elementum, at placerat lacus gravida."
      },
      {
        userId: 7,
        id: 7,
        title: "Title 7",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia rhoncus justo, ac tincidunt risus dignissim ac. Quisque elementum ipsum non ligula elementum, at placerat lacus gravida."
      },
      {
        userId: 8,
        id: 8,
        title: "Title 8",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia rhoncus justo, ac tincidunt risus dignissim ac. Quisque elementum ipsum non ligula elementum, at placerat lacus gravida."
      },
      {
        userId: 9,
        id: 9,
        title: "Title 9",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia rhoncus justo, ac tincidunt risus dignissim ac. Quisque elementum ipsum non ligula elementum, at placerat lacus gravida."
      },
      {
        userId: 10,
        id: 10,
        title: "Title 10",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia rhoncus justo, ac tincidunt risus dignissim ac. Quisque elementum ipsum non ligula elementum, at placerat lacus gravida."
      },

      {
        userId: 11,
        id: 11,
        title: "Title 11",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia rhoncus justo, ac tincidunt risus dignissim ac. Quisque elementum ipsum non ligula elementum, at placerat lacus gravida."
      },

      {
        userId: 12,
        id: 12,
        title: "Title 12",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia rhoncus justo, ac tincidunt risus dignissim ac. Quisque elementum ipsum non ligula elementum, at placerat lacus gravida."
      },


      
    ];
  
    // Generate the boxes
    data.forEach((item, index) => {
      if (index % 4 === 0) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
      }
  
      const row = container.lastElementChild;
  
      const box = document.createElement("div");
      box.className = "box";
  
      const image = document.createElement("img");
      image.src = `https://picsum.photos/200?random=${item.id}`;
      box.appendChild(image);
  
      const userId = document.createElement("p");
      userId.textContent = `User ID: ${item.userId}`;
      box.appendChild(userId);
  
      const title = document.createElement("h3");
      title.textContent = item.title;
      box.appendChild(title);
  
      const body = document.createElement("p");
      body.textContent = item.body;
      box.appendChild(body);
  
      const readMore = document.createElement("a");
      readMore.href = "#";
      readMore.textContent = "Read More...";
      readMore.addEventListener("click", function(event) {
        event.preventDefault();
        box.classList.toggle("expanded");
        readMore.textContent = box.classList.contains("expanded") ? "Read Less" : "Read More...";
      });
      box.appendChild(readMore);
  
      row.appendChild(box);
    });
  });
  