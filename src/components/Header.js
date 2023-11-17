import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Header.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { CiSearch, CiMenuBurger } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';

const Header = () => {
  const [keywords, setKeywords] = useState([])

  useEffect(() => {
    axios.get('https://www.daangn.com/web/search/keywords')
      .then(response => {
        setKeywords(response.data.keywords);
      }).catch(error => {
        console.log(error);
      })
  }, [])

  const renderKeywords = () => {
    return keywords.map((keyword) => (
      <Link key={'link_'+keyword}>
        <li key={'li_'+keyword}>{keyword}</li>
      </Link>
    ))
  }

  const searchSetHidden = (hidden = false) => {
    const mobileSearch = document.querySelector('section.mobile-search');
    if (hidden) {
      mobileSearch.classList.remove('show');
      mobileSearch.classList.add('hidden');
      // 검색창 닫으면 검색 키워드 초기화
      const searchInput = document.querySelector('.search-container .search-input');
      searchInput.value = '';
    } else {
      mobileSearch.classList.add('show');
      mobileSearch.classList.remove('hidden');
    }
  };
  const blurSetHidden = (hidden = false) => {
    const backgroundBlur = document.querySelector('.background-blur');
    if (hidden) {
      backgroundBlur.classList.remove('bg-show');
      backgroundBlur.classList.add('bg-hidden');
    } else {
      backgroundBlur.classList.remove('bg-hidden');
      backgroundBlur.classList.add('bg-show');
    }
  };
  const menuSetHidden = (hidden = false) => {
    const btnFront = document.querySelector('span.btn.front');
    const btnBack = document.querySelector('span.btn.back');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (hidden) {
      btnFront.classList.remove('btn-rotate');
      btnBack.classList.remove('btn-rotate');
      mobileMenu.classList.remove('show');
      mobileMenu.classList.add('hidden');
    } else {
      btnFront.classList.add('btn-rotate');
      btnBack.classList.add('btn-rotate');
      mobileMenu.classList.add('show');
      mobileMenu.classList.remove('hidden');
    }
  };

  const MobileSearch = () => {
    return (
      <section className="mobile-search hidden">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="물품이나 동네를 검색해보세요" />
          <span
            className="btn search-btn"
            onClick={() => {
              searchSetHidden(true);
              blurSetHidden(true);
            }}
          >
            취소
          </span>
        </div>
        <div className="recommend">
          <span>추천</span>
          <ul className="list">
            {keywords.length>0?renderKeywords():null}
            {/* <Link to="/">
              <li>축전 자전거</li>
            </Link>
            <Link to="/">
              <li>인천 노트북</li>
            </Link>
            <Link to="/">
              <li>분당 유모차</li>
            </Link>
            <Link to="/">
              <li>송파 자전거</li>
            </Link>
            <Link to="/">
              <li>자전거</li>
            </Link>
            <Link to="/">
              <li>화분</li>
            </Link> */}
          </ul>
        </div>
      </section>
    );
  };

  const isPC = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isNarrowPC = useMediaQuery({
    query: '(max-width: 992px)',
  });

  const HeaderComponent = () => {
    return (
      <>
        {isPC ? (
          <>
            <ul className="menus">
              <li className="menu">
                <Link to={'/fleamarket'}>중고거래</Link>
              </li>
              <li className="menu">
                <Link to={'/nearby-stores'}>동네가게</Link>
              </li>
              <li className="menu">
                <Link to={'/jobs'}>알바</Link>
              </li>
              <li className="menu">
                <Link to={'/realty'}>부동산 직거래</Link>
              </li>
              <li className="menu">
                <Link to={'/car'}>중고차 직거래</Link>
              </li>
            </ul>
            <div
              className="background-blur bg-hidden"
              onClick={() => {
                searchSetHidden(true);
                blurSetHidden(true);
              }}
            ></div>
            <div className="etc">
              <div className="search-container">
                {isNarrowPC ? (
                  <>
                    <span
                      id="search-icon"
                      className="btn"
                      onClick={() => {
                        searchSetHidden();
                        blurSetHidden();
                      }}
                    >
                      <CiSearch size={24} />
                    </span>
                    <MobileSearch />
                  </>
                ) : (
                  <input
                    type="text"
                    className="search-input"
                    placeholder="물품이나 동네를 검색해보세요"
                  />
                )}
              </div>
              <button className="btn chat-btn">채팅하기</button>
            </div>
          </>
        ) : (
          <>
            <div></div>
            {/* HEADER 우측 검색 및 메뉴 */}
            <div className="etc">
              <span
                id="search-icon"
                className="btn"
                onClick={() => {
                  searchSetHidden();
                  blurSetHidden();
                  menuSetHidden(true);
                }}
              >
                <CiSearch size={24} />
              </span>
              <div
                onClick={e => {
                  const tf = e.target.parentElement.classList.contains('btn-rotate');
                  menuSetHidden(tf);
                  blurSetHidden(tf);
                }}
              >
                <span className="btn front">
                  <CiMenuBurger size={24} />
                </span>
                <span className="btn back">
                  <TfiClose size={18} />
                </span>
              </div>
            </div>
            {/* 우측 검색 및 메뉴 버튼 클릭 시 나오는 배경 */}
            <div
              className="background-blur bg-hidden"
              onClick={() => {
                searchSetHidden(true);
                blurSetHidden(true);
                menuSetHidden(true);
              }}
            ></div>
            {/* 검색 버튼 클릭 시 나오는 부분 */}
            <MobileSearch />
            {/* 메뉴 버튼 클릭 시 나오는 부분 */}
            <section className="mobile-menu hidden">
              <div className="menu-container">
                <ul className="mobile-menus">
                  <Link to={'/fleamarket'}>
                    <li className="menu">중고거래</li>
                  </Link>
                  <Link to={'/nearby-stores'}>
                    <li className="menu">동네가게</li>
                  </Link>
                  <Link to={'/jobs'}>
                    <li className="menu">알바</li>
                  </Link>
                  <Link to={'/realty'}>
                    <li className="menu">부동산 직거래</li>
                  </Link>
                  <Link to={'/car'}>
                    <li className="menu">중고차 직거래</li>
                  </Link>
                </ul>
              </div>
            </section>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <header>
        <div is_pc={String(isPC)}>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <div className="header-container">
            <HeaderComponent />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
