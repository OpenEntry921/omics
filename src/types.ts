export type ProductCategory = 'device' | 'kit' | 'ingredient' | 'accessory' | 'subscription';
export type ProductStatus = 'coming-soon' | 'preorder' | 'on-sale' | 'sold-out';
export type SalesChannel = { id:string; name:string; url:string; enabled:boolean; label:string; trackingCode?:string };
export type Product = { id:string; slug:string; name:string; category:ProductCategory; summary:string; description:string; status:ProductStatus; price?:number; currency:'KRW'; images:string[]; features:string[]; audience:string[]; components:string[]; usage:string[]; specifications:Record<string,string>; notices:string[]; salesChannels:{channelId:string;productUrl:string;enabled:boolean}[] };
export type Recipe = { slug:string; title:string; category:string; summary:string; difficulty:string; duration:string; image:string; products:string[]; ingredients:string[]; steps:string[]; cautions:string[] };
