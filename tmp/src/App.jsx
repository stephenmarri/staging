import { Outlet } from "react-router-dom";
import Copyright from "./Components/Copyright"
import Navbar from "./Pages/Navbar/Navbar";
import { Analytics } from '@vercel/analytics/react';
import ComingSoon from "./Pages/Coming Soon/ComingSoon";
import MobileNav from "./Components/MobileNav";

function App() {

  // return (
  //   <>
  //     <div id="main_container">
  //       <Analytics />
  //       <Navbar />
  //       <MobileNav />
  //       <Outlet />
  //       <Copyright />
  //     </div>
  //   </>
  // )
  return (
    <>      
        <Analytics />
        <ComingSoon />
    </>
  )
}

export default App
