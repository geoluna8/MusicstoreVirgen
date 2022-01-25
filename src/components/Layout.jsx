import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from './Footer';
import Loading from "./Loading";

const Layout = () => {
    
    const [loading, setLoading] = useState(false);
    return (
        <div className="App">
            <NavBar titulo="Geo Music Store"></NavBar>
            <Outlet context={[loading, setLoading]} />
            <Footer mensaje="Soy el footer"></Footer>
            {loading ? <Loading /> : null} 
        </div>
    )
}

export default Layout;