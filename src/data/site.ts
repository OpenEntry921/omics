import type { SalesChannel } from '../types';
export const company = { name:'(주)오믹스', representative:'조은희', phone:'1551-2028', email:'omicskr@naver.com', address:'경기도 화성시 동탄광역환승로 62, 201동 713호(오산동, 동탄역 삼정그린코아)', businessNumber:'894-81-02213', mailOrderNumber:'' };
export const salesChannels: SalesChannel[] = [
  {id:'direct',name:`${company.name} 자사몰`,url:'',enabled:false,label:'자사몰 준비 중'},
  {id:'coupang',name:'쿠팡',url:'',enabled:false,label:'입점 준비 중'},
  {id:'naver',name:'네이버 스마트스토어',url:'',enabled:false,label:'입점 준비 중'},
  {id:'official',name:'기타 공식 판매처',url:'',enabled:false,label:'판매처 준비 중'},
];
export const navItems = [{to:'/products',label:'제품'},{to:'/kits',label:'발효 키트'},{to:'/recipes',label:'레시피'},{to:'/technology',label:'기술'},{to:'/brand',label:'브랜드'},{to:'/stores',label:'구매처'},{to:'/b2b',label:'B2B 문의'}];
