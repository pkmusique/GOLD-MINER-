import '../styles/globals.css'
import Header from '../components/Header'
import Toast from '../components/Toast'
import { useState } from 'react'
export default function MyApp({ Component, pageProps }){ const [toast, setToast] = useState(null); const showToast = (msg)=>{ setToast(msg); setTimeout(()=>setToast(null), 3500); }; return (<><Header /><main className="container mx-auto p-4"><Component {...pageProps} showToast={showToast} /></main><Toast message={toast} /></>)}
