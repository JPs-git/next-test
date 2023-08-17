import BottomNav from '@/components/bottomNav'

export default function MainAppLayout({children}) {
  return (
    <>
    <div className='main-body' style={{height: '80vh'}}>
      {children}
    </div>
    <BottomNav/>
    </>
  )
}