import axios from "axios";


export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params :{
        key : "c5fe87c353b2472cbb277df9a395accd"
    }
})

 