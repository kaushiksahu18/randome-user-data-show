const data = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1683121394387-bb152b9d3d45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NTg4ODA4OHx8ZW58MHx8fHx8",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1551831621-d79cc0ed270d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw1MjIzMDIxOXx8ZW58MHx8fHx8",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1551831423-9fb43e616870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NTIyMzAyMTl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8NTIyMzAyMTl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8NjU4ODgwODh8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1523477800337-966dbabe060b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8NjU4ODgwODh8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8NTIyMzAyMTl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1580983555975-05bc6e99eb6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzB8NTIyMzAyMTl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1581092916357-5896ebc48073?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzJ8NTIyMzAyMTl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    image:
      "https://images.unsplash.com/photo-1581091877286-979c6f103cad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzR8NTIyMzAyMTl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    image:
      "https://images.unsplash.com/photo-1549473448-5d7196c91f48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzV8NTIyMzAyMTl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 21,
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDV8NTIyMzAyMTl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 22,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDZ8NTIyMzAyMTl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 23,
    image:
      "https://images.unsplash.com/photo-1588178454780-441fa5b99fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjF8NjU4ODgwODh8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 24,
    image:
      "https://images.unsplash.com/photo-1580411415491-a672219c801b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjR8NjU4ODgwODh8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 25,
    image:
      "https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzB8NjU4ODgwODh8fGVufDB8fHx8fA%3D%3D",
  },
];

function CreateCard(imgSrc, id) {
  const card = document.createElement("div");
  const img = document.createElement("img");

  img.src = imgSrc;
  img.id = id;
  img.style = `width:100%; height:100%;
    object-fit: cover;`;

  card.appendChild(img);

  this.card = card;
}

const imgGrid = document.getElementById("img-grid");

data.map((item) => {
  const { card } = new CreateCard(item.image, item.id);
  imgGrid.appendChild(card);
});
