import React from 'react';
import './App.css';
import Button from "./components/Button";
import Producten from "./components/Producten";
import pinkBag from  './assets/bag_1.png';
import brownBag from "./assets/bag_2.png";
import greyBag from "./assets/bag_3.png";
import yellowBag from "./assets/bag_4.png";
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"
import Tile from "./components/Tile";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button
                    buttonText= "to the collection"/>
                <Button
                    buttonText= "shop all bags"/>
                <Button
                    buttonText= "pre-orders"
                    disabled={true}/>
            </nav>

            <main>
                <Producten
                    spanText="Best seller"
                    image={pinkBag}
                    pText ="The Handy Bag"
                    bagPrice = "€495"
                />
                <Producten
                    spanText="Best seller"
                    image={brownBag}
                    pText ="The Stylish Bag"
                    bagPrice = "€250"
                />
                <Producten
                    spanText="New Collection"
                    image={greyBag}
                    pText ="The simple Bag"
                    bagPrice = "€300"
                />
                <Producten
                    spanText="New Collection"
                    image={yellowBag}
                    pText ="The Trendy Bag"
                    bagPrice = "€150"
                />
            </main>

            <footer>

                <Tile
                    title = "The Brand"
                   description= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque aut commodi cum deleniti doloremque eligendi eum eveniet expedita harum illum incidunt ipsa laudantium libero maxime molestias nemo nisi, non odit officiis omnis pariatur placeat praesentium quae quam quisquam ratione, reiciendis repellat sed temporibus veritatis vero voluptate voluptatem? Incidunt, tempora!"
                />
                <Tile
                    image={brand} alt="The Brand"
                />

                <Tile
                    image = {ourStory} alt="Our Story"
                />
                <Tile
                    title = "Our Story"
                    description= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque aut commodi cum deleniti doloremque eligendi eum eveniet expedita harum illum incidunt ipsa laudantium libero maxime molestias nemo nisi, non odit officiis omnis pariatur placeat praesentium quae quam quisquam ratione, reiciendis repellat sed temporibus veritatis vero voluptate voluptatem? Incidunt, tempora!"
                />
            </footer>

        </>
    );
}
export default App;



