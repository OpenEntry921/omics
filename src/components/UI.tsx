import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { categoryLabels, smartFermenterStudioImage } from '../data/products';
import { company } from '../data/site';
import type { Product } from '../types';
import { trackEvent } from '../lib/analytics';
export function PageHero({eyebrow,title,children,actions}:{eyebrow:string;title:string;children:ReactNode;actions?:ReactNode}){return <section className="page-hero"><div className="shell"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p className="lead">{children}</p>{actions&&<div className="actions">{actions}</div>}</div></section>}
export function Section({eyebrow,title,intro,children,id,className=''}:{eyebrow?:string;title:string;intro?:string;children:ReactNode;id?:string;className?:string}){return <section id={id} className={`section ${className}`}><div className="shell">{eyebrow&&<span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{intro&&<p className="section-intro">{intro}</p>}{children}</div></section>}
export function Placeholder({label,ratio='4:3'}:{label:string;ratio?:string}){return <div className="placeholder" style={{aspectRatio:ratio.replace(':', '/')}} role="img" aria-label={`${label} 이미지 준비 중`}><span>IMAGE PLACEHOLDER</span><strong>{label}</strong><small>권장 비율 {ratio}</small></div>}
export function OfficialLogo({decorative = false}: {decorative?: boolean}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <strong aria-hidden={decorative}>{company.name}</strong>;
  return <img className="official-logo" src="/brand/logo/omics-logo-primary-transparent.png"
    alt={decorative ? '' : company.name} onError={() => setFailed(true)}/>;
}

export function ProductImage({src, label, ratio = '4:3', thumbnail = false, eager = false}: {
  src?: string; label: string; ratio?: string; thumbnail?: boolean; eager?: boolean;
}) {
  const [failedSrc, setFailedSrc] = useState<string>();
  if (!src || failedSrc === src) {
    return thumbnail ? null : <Placeholder label={label} ratio={ratio}/>;
  }
  const alt = src === smartFermenterStudioImage ? '뚜껑을 연 (주)오믹스 스마트 발효기기' : label;
  return <img className="product-image" style={{aspectRatio: `var(--hero-image-ratio, ${ratio.replace(':', '/')})`}} src={src} alt={alt}
    loading={eager ? 'eager' : 'lazy'} onError={() => setFailedSrc(src)}/>;
}

export function ProductCard({product}: {product:Product}){return <article className="card product-card"><ProductImage src={product.images[0]} label={product.name}/><div className="card-body"><div className="meta"><span>{categoryLabels[product.category]}</span><span className="status">출시 예정</span></div><h3>{product.name}</h3><p>{product.summary}</p><strong className="price">{product.price?`${product.price.toLocaleString()}원`:'가격 확인 후 입력'}</strong><div className="card-actions"><Link className="button secondary" to={`/products/${product.slug}`} onClick={()=>trackEvent('view_product',{product:product.id})}>상세보기</Link><Link className="text-link" to="/stores">판매처 보기 →</Link></div></div></article>}
export function StoreLink({href,label,channel}:{href:string;label:string;channel:string}){return <a className="button" href={href} target="_blank" rel="noopener noreferrer" onClick={()=>trackEvent(channel==='coupang'?'click_coupang':channel==='naver'?'click_smartstore':'click_store',{channel})}>{label}<span aria-hidden> ↗</span></a>}
