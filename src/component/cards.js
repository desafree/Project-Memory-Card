import React from 'react'
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'
import img5 from '../img/5.png'
import img6 from '../img/6.png'
import img7 from '../img/7.png'
import img8 from '../img/8.png'
import img9 from '../img/9.png'
import img10 from '../img/10.png'

function Cards(props) {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    console.log(props)
    let elementArray = [<img src={img1} alt='prova' onClick={props.click} id='1' key='1'></img>,<img src={img2} alt='prova' onClick={props.click} id='2' key='2'></img>,<img src={img3} alt='prova' onClick={props.click} id='3' key='3'></img>,<img src={img4} alt='prova' onClick={props.click} id='4' key='4'></img>,<img src={img5} alt='prova' onClick={props.click} id='5' key='5'></img>,<img src={img6} alt='prova' onClick={props.click} id='6' key='6'></img>,<img src={img7} alt='prova' onClick={props.click} id='7' key='7'></img>,<img src={img8} alt='prova' onClick={props.click} id='8' key='8'></img>,<img src={img9} alt='prova' onClick={props.click} id='9' key='9'></img>,<img src={img10} alt='prova' onClick={props.click} id='10' key='10'></img>]
    shuffleArray(elementArray)
    return(
        <div className='imagesContainer'>
            {elementArray.map((item)=>{
                return <div className='imageContainer'>{item}</div>
            })}
        </div>
    )
}

export default Cards