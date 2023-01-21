import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                        what are we ?
                    </h1>
                <p> Alpha Mobiles (Jumpstart) is committed to complying with local laws and regulations as well as applying a strict global code of conduct to all employees. It believes that ethical management is not only a tool for responding to the rapid changes in the global business environment, but also a vehicle for building trust with its various stakeholders including customers, shareholders, employees, business partners and local communities. With an aim to become one of the most ethical companies In the world, Samsung continues to train its employees and operate monitoring systems, while practicing fair and transparent corporate management.</p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80' alt="Segun Adebayo"/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="Segun Adebayo"/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                        How?
                    </h1>
                <p>Commodo est cillum laboris proident exercitation veniam excepteur do mollit aliquip irure. Consequat adipisicing commodo anim aliqua labore nisi reprehenderit dolore aliquip in eu est nulla. Ea sint adipisicing elit id ullamco nisi cupidatat nisi labore.
                   Id laborum nostrud aute id et voluptate. Deserunt nisi ex et elit officia ex ea. Consectetur magna aliqua mollit ea velit anim eiusmod ea exercitation sit ex dolore. Dolor velit proident veniam id quis labore nostrud amet tempor excepteur. Do eiusmod ut cupidatat ea laboris elit dolore proident mollit labore magna aliquip. Dolor et cupidatat minim qui ad sunt ea aute fugiat.
                   Est exercitation laboris Lorem sint Lorem id aute excepteur sint cupidatat. Et enim minim aliqua cillum sint elit consectetur. Voluptate tempor et velit ullamco consequat enim ipsum cupidatat laboris sunt excepteur. Nostrud mollit nulla labore irure tempor eiusmod. Tempor ut voluptate amet elit quis do ex nostrud minim proident veniam nulla non esse.
                   Commodo est cillum laboris proident exercitation veniam excepteur do mollit aliquip irure. Consequat adipisicing commodo anim aliqua labore nisi reprehenderit dolore aliquip in eu est nulla. Ea sint adipisicing elit id ullamco nisi cupidatat nisi labore.
                   Id laborum nostrud aute id et voluptate. Deserunt nisi ex et elit officia ex ea. Consectetur magna aliqua mollit ea velit anim eiusmod ea exercitation sit ex dolore. Dolor velit proident veniam id quis labore nostrud amet tempor excepteur. Do eiusmod ut cupidatat ea laboris elit dolore proident mollit labore magna aliquip. Dolor et cupidatat minim qui ad sunt ea aute fugiat.
                   Est exercitation laboris Lorem sint Lorem id aute excepteur sint cupidatat. Et enim minim aliqua cillum sint elit consectetur. Voluptate tempor et velit ullamco consequat enim ipsum cupidatat laboris sunt excepteur. Nostrud mollit nulla labore irure tempor eiusmod. Tempor ut voluptate amet elit quis do ex nostrud minim proident veniam nulla non esse.</p>
                </div>
            </div>
        </>
    
    )
}

export default About
