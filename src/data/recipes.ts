import type { Recipe } from '../types';
export const recipeCategories=['전체','된장','간장','고추장','식초','장아찌','기타 발효식품'];
export const recipes:Recipe[]=[
 {slug:'soybean-paste',title:'집에서 시작하는 된장',category:'된장',summary:'된장 발효 전 준비 사항과 전체 흐름을 살펴보는 입문 가이드',difficulty:'보통',duration:'재료와 환경에 따라 달라짐',image:'/images/recipes/soybean-paste-guide.svg',products:['OMICS 스마트 발효기기(개발 중)','된장 만들기 키트(출시 예정)'],ingredients:['메주 등 원재료: 제품 안내 확정 후 입력','소금물: 제품 안내 확정 후 입력'],steps:['용기와 도구를 깨끗이 준비합니다.','확정된 제품 안내에 따라 재료를 배합합니다.','온도와 상태를 주기적으로 확인하고 기록합니다.'],cautions:['정확한 배합과 위생 지침은 출시 제품의 공식 설명서를 따르세요.','냄새·색·표면 상태가 평소와 다르면 섭취하지 마세요.']},
 {slug:'soy-sauce',title:'간장 발효 흐름 이해하기',category:'간장',summary:'재료 준비부터 상태 확인까지, 간장 만들기의 큰 흐름',difficulty:'보통',duration:'재료와 환경에 따라 달라짐',image:'/images/recipes/soy-sauce-guide.svg',products:['간장 만들기 키트(출시 예정)'],ingredients:['원재료와 분량: 확인 후 입력'],steps:['발효 용기를 준비합니다.','재료 상태를 확인합니다.','발효 중 변화를 관찰하고 기록합니다.'],cautions:['샘플 콘텐츠이며 실제 조리 시 확정된 제품 설명서를 따르세요.']},
 {slug:'gochujang',title:'고추장 만들기 준비 가이드',category:'고추장',summary:'필요한 도구와 재료를 미리 점검하는 시작 가이드',difficulty:'보통',duration:'재료와 환경에 따라 달라짐',image:'/images/recipes/gochujang-guide.svg',products:['전통 발효 키트(개발 예정)'],ingredients:['원재료와 분량: 확인 후 입력'],steps:['도구와 작업 공간을 정리합니다.','재료의 보관 상태를 확인합니다.','공식 레시피 공개 후 안내에 맞춰 진행합니다.'],cautions:['발효 기간이나 결과를 보장하지 않습니다.','알레르기 유발 원재료 표시를 확인하세요.']}
];
