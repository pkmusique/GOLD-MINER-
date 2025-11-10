export const depositOptions = Array.from({length:100}, (_,i)=>100*(i+1));
export const TYME_ACCOUNT = '51113633471';
export const ADMIN_PASSWORD = process.env.ADMIN_PASS;

export function basicPlanPayout(amount){
  const x0 = 100, y0 = 250;
  const x1 = 10000, y1 = 250000;
  const x = Math.max(x0, Math.min(x1, amount));
  const ratio = (x - x0) / (x1 - x0);
  return Math.round(y0 + ratio * (y1 - y0));
}
export function standardPlanDaily(amount){ const dailyPer100 = 40; return Math.round((amount/100) * dailyPer100); }
