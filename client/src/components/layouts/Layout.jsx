import Header from "./Header";
import Footer from "./Footer";
 
import {Helmet} from 'react-helmet';
import {Toaster} from 'react-hot-toast';

const Layout = ({children, title, description, keywords, author}) =>{
    return(
        <>
        <Helmet>
        <meta charSet='utf-8'/>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author}/>
        <title>{title}</title>
        </Helmet>

        <Header/>
        <main style={{minHeight:'70vh'}}> 
        <Toaster/>
        {children}
        </main>
        <Footer/>
        </>
    )
}

Layout.defaultProps={
    title:"Ecommerce app - onyone",
    discription: "mern stack training projects",
    keywords:"mern, ecoommerce, react, node, mongodb",
    author:'aman negi'
};

export default Layout;



