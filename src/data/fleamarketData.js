const title = [
  "삼성텔레비전60인치",
  "고장난 갤럭시탭 s6 lte(lite아닙니다)+삼성 정품 키보드",
  "새상품 몽클레어 상의,패딩,자켓류 정리해요",
  "콤프레셔 2.5마력",
  "갤럭시 버즈2 pro 판매합니다",
  "아이폰 12미니 블랙",
  "네셔널 패딩 팔아요",
  "사용한지2주된 전자렌지팝니다",
  "삼성노트북",
  "네이처하이크 야전침대",
  "밀레 경량 패딩 105",
  "14K 로즈골드 귀걸이 새상품",
]

const location = [
  "서울 서초구 반포2동",
  "서울 관악구 대학동",
  "서울 강남구 신사동",
  "경북 칠곡군 왜관읍",
  "서울 관악구 신림동",
  "전북 전주시 완산구 중화산동2가",
  "충북 청주시 상당구 용담동",
  "서울 중랑구 면목제4동",
  "부산 북구 화명동",
  "전북 전주시 완산구 평화2동",
  "서울 양천구 목2동",
  "대전 서구 도안동"
]

export default function fleamarketData(num) {
  const result = [];
  
  for(let i=0; i<num; i++) {
    const item = {};

    item['title'] = title[Math.floor(Math.random() * title.length)];
    item['price'] = `${Math.ceil(Math.random() * 30)}0,000원`;
    item['location'] = location[Math.floor(Math.random() * location.length)];
    item['interest'] = Math.round(Math.random() * 50);
    item['chat'] = Math.round(Math.random() * 50);

    result.push(item);
  }

  return result;
}
