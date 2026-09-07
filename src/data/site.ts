import type { SalesChannel } from '../types';
export const company = { name:'OMICS', representative:'조은희', phone:'1551-2028', email:'omicskr@naver.com', address:'[정보 입력 필요]', businessNumber:'[정보 입력 필요]', mailOrderNumber:'[정보 입력 필요]' };
export const salesChannels: SalesChannel[] = [
  {id:'direct',name:'OMICS 자사몰',url:'',enabled:false,label:'자사몰 준비 중'},
  {id:'coupang',name:'쿠팡',url:'',enabled:false,label:'입점 준비 중'},
  {id:'naver',name:'네이버 스마트스토어',url:'',enabled:false,label:'입점 준비 중'},
  {id:'official',name:'기타 공식 판매처',url:'',enabled:false,label:'판매처 준비 중'},
];
export const navItems = [{to:'/products',label:'제품'},{to:'/kits',label:'발효 키트'},{to:'/recipes',label:'레시피'},{to:'/technology',label:'기술'},{to:'/brand',label:'브랜드'},{to:'/stores',label:'구매처'},{to:'/b2b',label:'B2B 문의'}];
