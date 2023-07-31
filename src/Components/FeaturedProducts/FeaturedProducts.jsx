import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss"


const FeaturedProducts = ({ type }) => {
    const data = [
        {
            id: 1,
            img:"https://static.fnac-static.com/multimedia/Images/FR/NR/31/fb/80/8452913/1540-1/tsp20230701073555/Boruto-Naruto-next-generations-Tome-1.jpg",
            title: "Boruto ep 1",
            isNew: true,
            oldPrice: 19,
            price: 16,
        },
        {
            id: 2,
            img:"https://static.fnac-static.com/multimedia/Images/FR/NR/89/cf/4a/4902793/1540-1/tsp20230720110751/L-Attaque-des-Titans-T01.jpg",
            title: "attack on titan",
            isNew: true,
            oldPrice: 60,
            price: 26,
        },
        {
            id: 3,
            img:"https://static.fnac-static.com/multimedia/Images/FR/NR/59/a4/e8/15246425/1540-1/tsp20230720102408/Darling-in-the-Franxx-T07.jpg",
            title: "darling in the franx",
            isNew: true,
            oldPrice: 40,
            price: 20,
        },
    ]
    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos officia recusandae ipsa molestias ut ratione harum exercitationem eius velit voluptatem, nostrum quod doloribus suscipit obcaecati itaque, omnis officiis fugiat nesciunt.</p>
            </div>
            <div className="bottom">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}


export default FeaturedProducts