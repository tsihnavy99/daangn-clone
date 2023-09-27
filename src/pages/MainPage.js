import React, { useEffect } from "react";
import '../css/MainPage.css';
import { FaGooglePlay, FaApple } from 'react-icons/fa6';
import ScrollMagic from 'scrollmagic';

const MainPage = () => {
  // 스크롤 애니메이션
  useEffect(() => {
    const spyEls = document.querySelectorAll('section.scroll-spy');
    spyEls.forEach((spyEl) => {
      new ScrollMagic
        .Scene({
          triggerElement: spyEl, // 보여짐 여부를 감시할 요소
          triggerHook: .8, // toggle함수를 실행할 요소의 위치(뷰포트상)
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
    })
  }, [])
  

  return (
    <div className="main-container">
      <section className="main-img scroll-spy">
        <div>
          <div className="text">
            <h1 className="to-right delay-0">당신 근처의<br/>지역 생활 커뮤니티</h1>
            <p className="to-right delay-1">동네라서 가능한 모든 것<br/>당근에서 가까운 이웃과 함께해요.</p>
            <div className="btn-container download-btn to-right delay-2">
              <button className="btn"><FaGooglePlay color={'#fff'} size={20}/>Google Play</button>
              <button className="btn"><FaApple color={'#fff'} size={22}/>App Store</button>
            </div>
          </div>
          <img srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-top-e765d561ee9df7f5ab897f622b8b5a35aaa70314f734e097ea70e6c83bdd73f1.webp" alt="당신 근처의 지역 생활 커뮤니티" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-1-efd09cb54044140d530c6647906303c669ca80a8b51473722fc2b1747a3d9047.png"/>
        </div>
      </section>
      <section className="sub-img white scroll-spy">
        <div>
          <img className="to-right delay-0" srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-1-c84dd43a3a50742bc296bd36e8b9b1c4a487b8d36aaf67e7f90ecce80201cf60.webp" alt="믿을만한 이웃 간 중고거래"/>
          <div className="text">
            <span className="to-left delay-0">중고거래</span>
            <h1 className="to-left delay-0">믿을만한<br/>이웃 간 중고거래</h1>
            <p className="to-left delay-1">동네 주민들과 가깝고 따뜻한 거래를<br/>지금 경험해보세요.</p>
            <div className="btn-container to-left delay-2">
              <button className="btn">인기매물 보기</button>
              <button className="btn">믿을 수 있는 중고거래</button>
            </div>
          </div>
        </div>
      </section>
      <section className="sub-img orange scroll-spy">
        <div>
          <div className="text">
            <div>
              <span className="to-right delay-0">동네생활</span>
              <h1 className="to-right delay-0">이웃만 아는<br/>동네 정보와 이야기</h1>
              <p className="to-right delay-1">우리동네의 다양한 정보와 이야기를<br/>공감과 댓글로 나누어요.</p>
            </div>
            <ul className="to-right delay-2">
              <li className="list-item">
                <div className="icon item1"></div>
                <div className="title">동네모임</div>
                <p className="description">근처 이웃들과 동네<br/>이야기를 해보세요.</p>
              </li>
              <li className="list-item">
                <div className="icon item2"></div>
                <div className="title">동네질문</div>
                <p className="description">궁금한 게 있을 땐<br/>이웃에 물어보세요.</p>
              </li>
              <li className="list-item">
                <div className="icon item3"></div>
                <div className="title">동네분실센터</div>
                <p className="description">무언가를 잃어버렸다면<br/>글을 올려보세요.</p>
              </li>
            </ul>
          </div>
          <img className="to-left delay-0" srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-2-78a84106155b4b2c341b6425515a90782dc08a6f443ba0bb622700ef788d2e19.webp " alt="이웃만 아는 동네 정보와 이야기" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-2-c99a6862a786b8f801c08ea8e76cfc0c06b5f86442c90ff7bffef0f99146321e.png" />
        </div>
      </section>
      <section className="sub-img white scroll-spy">
        <div>
          <img className="to-right delay-0" srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-3-fa126bf72868e1a60f6a67dde54d8a39d51e70ee5df415ebf0ab3175e23d8ee1.webp" alt="걸어서 10분! 동네 알바 구하기" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-3-c105057eecd5aecd8343a3ad6b396e64a79ee75d54b3e6239eb231779ab0db04.png"/>
          <div className="text">
            <span className="to-left delay-0">알바</span>
            <h1 className="to-left delay-0">걸어서 10분!<br/>동네 알바 구하기</h1>
            <p className="to-left delay-1">당근하듯 쉽고, 편하게<br/>당근 알바로 동네 알바를 구할 수 있어요.</p>
            <div className="btn-container to-left delay-2">
              <button className="btn">내근처 알바 보기</button>
            </div>
          </div>
        </div>
      </section>
      <section className="sub-img green scroll-spy">
        <div>
          <div className="text">
            <span className="to-right delay-0">동네가게</span>
            <h1 className="to-right delay-0">내 근처에서 찾는<br/>동네 가게</h1>
            <p className="to-right delay-1">이웃들의 추천 후기를 확인하고<br/>동네 곳곳의 가게들을 찾을 수 있어요.</p>
            <div className="btn-container to-right delay-2">
              <button className="btn">당근 동네가게 보기</button>
            </div>
          </div>
          <img className="to-left delay-0" srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-4-89a00b462e68bd270f7f1f7981a5899db17478ba9a8fef91f5061a2559a6ce2e.webp" alt="믿을만한 이웃 간 중고거래" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-4-9530ae5582ca9a9dc64bdd1530473836edb44c3eb2685868bbfdfb56b9ec57df.png"/>
        </div>
      </section>
    </div>
  )
}

export default MainPage;