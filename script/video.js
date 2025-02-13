const Loadcatagories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => usercatagorey(data.categories))
        .then((err) => console.log(err))

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