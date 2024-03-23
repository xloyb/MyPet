import React from 'react'

const Sidebar = () => {
  return (
    <div><div className="drawer lg:drawer-open">



    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* Page content here */}
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
      <div className="flex items-center p-2.5">
  <div className="avatar">
    <div className="w-24 rounded-full ">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="ml-4"> 
    <span className="font-semibold">xLoy</span>
  </div>
</div>

      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    
    </div>
  </div></div>
  )
}

export default Sidebar