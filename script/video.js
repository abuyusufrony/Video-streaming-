const Loadcatagories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => usercatagorey(data.categories))
        .then((err) => console.log(err))

}

Loadcatagories()

const usercatagorey = (data) => {
    console.log(data)
}