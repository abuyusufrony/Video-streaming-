const Loadcatagories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => usercatagorey(data.categories))
        .then((err) => console.log(err))

}

const videoLoad = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((res) => res.json())
        .then((data) => LoadvideoByuser(data.videos))
        .then((error) => console.log(error))
}

const LoadvideoByuser = (allVideo) => {
    const videoConatiner = document.getElementById('video-container')
    allVideo.forEach((Video) => {
        const card = document.createElement('div')
        card.classList = '<div class="card card-compact   ">'
        card.innerHTML = `<figure>
    <img
      src=${Video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class=card-title>${Video.title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`
        videoConatiner.append(card)
    })
}

const usercatagorey = (data) => {
    const navCatagory = document.getElementById('catagories');
    data.forEach((items) => {
        console.log(items)
        const button = document.createElement('button');
        button.classList = 'btn'
        button.innerText = items.category;
        navCatagory.appendChild(button)


    });
}

Loadcatagories()
videoLoad()