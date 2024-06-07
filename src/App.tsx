import React from 'react';
import "./styles/styles.css";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import KillListPage from './pages/KillListPage';
import Snacker from './pages/Snacker';



// const { connectors } = getDefaultWallets({
//   appName: 'My RainbowKit App',
//   chains
// });

// const wagmiClient = createClient({
//   autoConnect: false,
//   connectors,
//   provider
// })


function App() {
  return (
    // <WagmiConfig client={wagmiClient}>
    //   <RainbowKitProvider coolMode chains={chains}>
        <BrowserRouter>
        <Routes>
        <Route path ="/" element={<HomePage />}/>
        <Route path ="/KillList" element={<KillListPage/>}/>
        <Route path ="/Snacker" element={<Snacker/>}/>
        </Routes>
        </BrowserRouter>
    //   </RainbowKitProvider>
    // </WagmiConfig>
  );
}

export default App;