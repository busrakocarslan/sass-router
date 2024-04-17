import React from 'react'
import "./About.scss"
import ankkedi4 from "../../assets/img/ankkedi4.webp";


const More = () => {
  return (
    <div>
        <p>In 1962, many American military personnel saw Angora Cats, the product of a 45-year breeding program, at the Ankara Zoo, and the military personnel who took a few pairs back to their country helped revive interest in this breed. These slim cats with silky, medium-length fur are loved and continue to be bred with interest in all countries that know and enjoy the beauty of cats.</p>
        <img style={{width:"250px",
            borderRadius: "10px"}} src={ankkedi4} alt="img" />
    </div>
  )
}

export default More