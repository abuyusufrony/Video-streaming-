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
        console.log(Video)
        const card = document.createElement('div')
        card.classList = '<div class="card card-compact   ">'
        card.innerHTML = `<figure class="h-[200px]">
    <img  class="w-full h-full"
      src=${Video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex">
       <div>
        <img class="h-10 w-10 rounded-full object-cover" src=${Video.authors[0].profile_picture}/>
        </div>
        <div> <h2> ${Video.title} </h2></div>
         </div>
         <div class="flex items-center gap-2"> 
          <p> ${Video.authors[0].profile_name} </p> 
         <img class="w-5 h-5"  src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/> 
         </div>

 `

        videoConatiner.appendChild(card)
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

// {
//     "category_id": "1001",
//     "video_id": "aaag",
//     "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
//     "title": "Sunrise Reverie",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
//             "profile_name": "Ava Johnson",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "1.1K",
//         "posted_date": "16950"
//     },
//     "description": "'Sunrise Reverie' by Ava Johnson takes listeners on a serene journey through tranquil melodies and soft harmonies. With 1.1K views, this track is perfect for morning relaxation or an evening wind-down. Ava's heartfelt lyrics and soothing voice create a sense of peace, making it a go-to for fans seeking calm and inspiration in their musical choices."
// }