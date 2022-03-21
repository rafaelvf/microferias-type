import React from "react";
import m from "../img/m.png"
import { Link } from 'react-router-dom';
import "../styles/Card.css"
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { GET_FERIAS } from "../redux/actions";
import dateFormat from 'dateformat';
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

const Card:React.FC =()=>{

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(GET_FERIAS())
    },[])
    
    const {ferias}=useSelector((state:any)=>state.allFerias)
    
    
    console.log(ferias,"ferias")
    return (
        <div className="todo">


            { ferias && ferias.map((i:any)=>(


                <Link to={`/detalles/${i._id}`} key={i._id} className='link'>
            <div className='container'>
            <div className="foto">
                <img src={i.image} alt=''></img>
            </div>
            <div>
                <h1 className='blog-post__title'>{i.name}</h1>
                <div className='blog-post__date'>
                        
                        <span>{dateFormat(i.date,"d, mmmm, yyyy")}</span>
                        <span>{i.address}</span>
                </div>
            </div>
            <div className="description_link">
                <div>
                    <p className='blog-post__text'>
                        {i.description}
                    </p>
                </div>
                <div className="link2">
                        <div className="fb">
                        <FacebookShareButton url={`https://flamboyant-golick-d7cb40.netlify.app/detail/${i._id}`} quote='Hola, quiero compartir este evento'>
                            <FacebookIcon className="share" round={true} size='1em' />
                        </FacebookShareButton>
                        </div>
                        <div>
                        <WhatsappShareButton
                            title='Hola, te comparto este evento, te pueda interesar!'
                            url={`https://flamboyant-golick-d7cb40.netlify.app/detail/${i._id}`}>
                            <WhatsappIcon className="share" round={true} size='1em' />
                        </WhatsappShareButton>
                        </div>
                </div>
            </div>
            

        </div>
        </Link>
            )  )
        }

    



        </div>
    )
}

export default Card;


{/* <Link to={'/detalles'} className='link'>
            <div className='container'>
            <div>
                <img src={m} alt=''></img>
            </div>
            <div>
                <h1 className='blog-post__title'>Bonaterra</h1>
                <div className='blog-post__date'>
                        <span>Sunday</span>
                        <span>10-10-22</span>
                        <span>Avenida 9 de ocutbre y huancavilca</span>
                </div>
            </div>
            <div>
                <p className='blog-post__text'>
                    la feria bonaterra tendra lugar en el buijo y ni se que asdfa adf asdfa dfadfasd ad asdfa d asdf adf ad fa df asd fa  ni se que asdfa adf asdfa dfadfasd ad asdfa d 
                </p>
            </div>
            

        </div>
        </Link> */}