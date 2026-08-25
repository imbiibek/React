


export const setItem = (posts) =>{
    localStorage.setItem("blog", JSON.stringify(posts))

}
export const getItem = ()=>{
    const data = localStorage.getItem("blog")
    return data ? JSON.parse(data) : []
}