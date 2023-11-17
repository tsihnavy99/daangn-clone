import React from 'react';
import '../css/Footer.css';
import { useMediaQuery } from 'react-responsive';
import { PiArrowUpRightLight, PiCaretDownBold } from 'react-icons/pi';
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoBlogger,
} from 'react-icons/bi';
import { TbWorld } from 'react-icons/tb';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const isPC = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const Icons = () => {
    return (
      <div className="icons">
        <BiLogoFacebookCircle size={26} />
        <BiLogoInstagram size={26} />
        <BiLogoYoutube size={26} />
        <BiLogoBlogger size={26} />
        <div className="select-container">
          <label htmlFor="label-select">
            <TbWorld className="world-icon" />
            <select
              id="label-select"
              onBlur={() => {
                const arr = document.querySelector('.down-arr');
                arr.style.transform = 'rotateX(0deg)';
              }}
              onClick={() => {
                const arr = document.querySelector('.down-arr');
                arr.style.transform =
                  arr.style.transform === 'rotateX(180deg)' ? 'rotateX(0deg)' : 'rotateX(180deg)';
              }}
            >
              <option>한국</option>
              <option>영국</option>
              <option>캐나다</option>
              <option>미국</option>
              <option>일본</option>
            </select>
            <PiCaretDownBold className="down-arr" />
          </label>
        </div>
      </div>
    );
  };
  const InfoText = () => {
    return (
      <div>
        <p>
          <span>대표</span>김용현, 황도연<span className="right">사업자번호</span>375-87-00088
        </p>
        <p>
          <span>직업정보제공사업 신고번호</span>J1200020200016
        </p>
        <p>
          <span>주소</span>서울특별시 구로구 디지털로 30길 28, 609호 (당근서비스)
        </p>
        <p>
          <span>전화</span>1544-9798<span className="right">고객문의</span>cs@daangnservice.com
        </p>
      </div>
    );
  };

  return (
    <footer is_pc={String(isPC)}>
      {isPC ? (
        <></> /* 모바일용 다운로드 링크 */
      ) : (
        <div className="download-links">
          <span>당근 앱 다운로드</span>
          <Link to="/">
            <span>
              Android
              <PiArrowUpRightLight size={18} />
            </span>
          </Link>
          <Link to="/">
            <span>
              iOS
              <PiArrowUpRightLight size={18} />
            </span>
          </Link>
        </div>
      )}
      <div className="survice-list" is_pc={String(isPC)}>
        <ul className="list1">
          <li>
            <Link to="/">중고거래</Link>
          </li>
          <li>
            <Link to="/">동네가게</Link>
          </li>
          <li>
            <Link to="/">당근알바</Link>
          </li>
          <li>
            <Link to="/">부동산 직거래</Link>
          </li>
          <li>
            <Link to="/">중고차 직거래</Link>
          </li>
        </ul>
        <ul className="list2">
          <li>
            <Link to="/">당근비즈니스</Link>
          </li>
          <li>
            <Link to="/">채팅하기</Link>
          </li>
        </ul>
        <ul className="list3">
          <li>
            <Link to="/">자주 묻는 질문</Link>
          </li>
          <li>
            <Link to="/">회사 소개</Link>
          </li>
          <li>
            <Link to="/">인재 채용</Link>
          </li>
        </ul>
        {isPC /* PC용 다운로드 링크 */ ? (
          <div className="download-btn">
            <span>당근 앱 다운로드</span>
            <div className="btn-container">
              <button className="btn">
                <FaGooglePlay size={16} />
                Google Play
              </button>
              <button className="btn">
                <FaApple size={20} />
                App Store
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="infos">
        {isPC ? (
          <div className="pc-icon-container">
            <InfoText />
            <Icons />
          </div>
        ) : (
          <InfoText />
        )}
        <p className="inquiry">
          <span>
            <Link to="/">제휴 문의</Link>
          </span>
          <span>
            <Link to="/">광고 문의</Link>
          </span>
          <span>
            <Link to="/">PR 문의</Link>
          </span>
          <span>
            <Link to="/">IR 문의</Link>
          </span>
        </p>
        <p className="terms">
          <span>
            <Link to="/">이용약관</Link>
          </span>
          <span id="privacy">
            <Link to="/">개인정보처리방침</Link>
          </span>
          <span>
            <Link to="/">위치기반서비스 이용약관</Link>
          </span>
          <span>
            <Link to="/">이용자보호 비전과 계획</Link>
          </span>
          <span>
            <Link to="/">청소년보호정책</Link>
          </span>
        </p>
      </div>
      {isPC ? <></> : <Icons />}
    </footer>
  );
};

export default Footer;
