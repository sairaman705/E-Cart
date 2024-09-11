import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './Footer';
import { Header } from './Header';

const Layout = (props) => {
    return(
        <div>
            <Header />
            <main>
            <ToastContainer />
            {props.children}
            </main>
            <Footer />
        </div>
            
        
    );
}

export default Layout;