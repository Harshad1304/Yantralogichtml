import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollTop from '../components/ScrollTop/ScrollTop';
import LocomotiveScroll from 'locomotive-scroll';


function RootLayout() {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (locomotiveScrollRef.current) locomotiveScrollRef.current.destroy();
    };
  }, []);

  return (
    <div id="root-layout" ref={scrollRef}>
      <ScrollTop />
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;