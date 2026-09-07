export type AnalyticsEvent='view_product'|'click_store'|'click_coupang'|'click_smartstore'|'click_inquiry'|'request_launch_alert'|'view_recipe';
export function trackEvent(event:AnalyticsEvent,properties:Record<string,string>={}){ if(import.meta.env.DEV) console.info('[analytics preview]',event,properties); window.dispatchEvent(new CustomEvent('omics:analytics',{detail:{event,properties}})); }
