"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

console.log(11111);
export default function AboutLayout({children}) {
  const router = useRouter()
  return(
    <div className="about-layout">
      <div>this is header</div>
      <div>
        <Link href={'/'}>back to index</Link>
        <button onClick={() => router.push('/')}>index</button>
        <button onClick={() => console.log('hello')}>say hello</button>
      </div>
        {children}
    </div>
  )
}