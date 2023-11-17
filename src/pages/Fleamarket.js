import React, { useEffect, useState } from 'react';
import '../css/Fleamarket.css';
import emptyImage from '../empty_image.svg';
import fleamarketData from '../data/fleamarketData';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Fleamarket = () => {
  const [data, setData] = useState([]);
  const [keywords, setKeywords] = useState([])

  useEffect(() => {
    setData(fleamarketData(12));

    axios.get('https://www.daangn.com/web/search/keywords')
      .then(response => {
        setKeywords(response.data.keywords);
      }).catch(error => {
        console.log(error);
      })
  }, [])
  
  const renderItems = () => {
    return data.map((item) => (
      <li>
        <img className="img" src={item.img?item.img:emptyImage} alt="상품 사진" />
        <p className="title">{item.title}</p>
        <p className="price">{item.price}</p>
        <p className="location">{item.location}</p>
        <p className="etc"><span>관심 {item.interest}</span><span>채팅 {item.chat}</span></p>
      </li>
    ))
  }
  
  return (
    <div className="main-container">
      <div className="header">
        <div>
          <h1>믿을만한<br/>이웃 간 중고거래</h1>
          <div> </div>
          <span className="bg-img">
            {/* <img src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/mobile/3x/fleamarket-1caf5c24c82acb20bd86fa8c018987be7812a1f0ce0858dcf175568bfc3cf87d.webp' alt='믿을만한 이웃 간 중고거래'/> */}
          </span>
        </div>
      </div>
      <div className="item-list">
        <h3>중고거래 인기매물</h3>
        <ul className="items">
          {data&&renderItems()}
        </ul>
        <span className="load-more-btn" onClick={()=>setData(current => [...current, ...fleamarketData(12)])}>인기매물 더 보기</span>
      </div>
      <div className="search-keywords">
        <span className="load-more-btn">중고거래 인기검색어</span>
        <ul>{keywords.map(keyword => (
          <li><Link>{keyword}</Link></li>  
        ))}</ul>
      </div>
    </div>
  )
}

export default Fleamarket;