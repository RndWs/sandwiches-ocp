
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import TopLayout from "./components/TopLayout";
// import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

// IMPORT FUNCTIONS
import getUrl from "./functions/getUrl";
const BASE_URL = getUrl();
  // console.log(`BASE_URL: ${BASE_URL}`);

import componentMap from "./functions/componentLoader";

// array of object defyning 
// the menu 
// and the components to load for the BrowserRouter 
import menuArray from "./menu-setup/menuArray";

// css
import "./App.css";

const App = () => {
  return (
    <div className="wrap">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={BASE_URL + "/"} element={<TopLayout />}>
            {menuArray.map(({ link, name, index }) => {
              const Component = componentMap[name] || NotFound;
              return (
                <Route
                  key={link}
                  path={link}
                  index={index === true || false}
                  element={<Component />}
                />
              );
            })}
            {/* Catch all invalid routes */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;


        
