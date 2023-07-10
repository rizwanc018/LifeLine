import { SideBar, Header } from "../../_components/admin"

function AdminHome() {
  return (
    <>
      <Header />
      <div className='flex'>
        <SideBar />
        <div className='p-7'>dashboard</div>
      </div>
    </>
  )
}

export default AdminHome