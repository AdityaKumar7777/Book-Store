import axios from 'axios';
import React , {useEffect , useState} from 'react';
import Spinner from '../src/components/Spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';

const Home = () => {
  
    
    const [books,setBooks] =useState([]);
    const [loading,setLoading] =useState([false]);
    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:5555/books')
        .then((res)=>{
            setBooks(res.data.data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            
        })
    },[])
    
    
  
}

export default Home