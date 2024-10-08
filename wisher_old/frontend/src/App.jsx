import { useState } from "react";
import Enter from "./components/Enter";
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SendWishes from "./components/SendWishes";
import Error from "./components/Error";
import View from "./components/View";
import Home from "./components/Home";
import { Analytics } from "@vercel/analytics/react"
import MyDocument from "./components/doc";
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';


// function App(){


//   return (

//     <div>
    
//     <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
//       {({ blob, url, loading, error }) =>
//         loading ? 'Loading document...' : 'Download now!'
//     }
//     </PDFDownloadLink>
//   </div>
//   )
// }

function App() {
  const [isUserAuthenicated, setisUserAuthenicated] = useState(false);
  const [createdByUserID, setcreatedByUserID] = useState();
  
  

  return (
    <>
    <div id="app_container">
      <Analytics />
      
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/enter" element={<Enter setIsUserAuthenicated={setisUserAuthenicated} setcreatedByUserID={setcreatedByUserID} />} />
          <Route path="/send" element={<SendWishes isUserAuthenticated={isUserAuthenicated} createdByUserID={createdByUserID} />} />
          <Route path="/view" element={<View isUserAuthenticated={isUserAuthenicated} userId={createdByUserID} />} />

      </Routes>
    </Router>

    </div>
    </>
  )
}

export default App
