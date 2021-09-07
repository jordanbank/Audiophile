import * as React from "react"
import {Helmet} from "react-helmet";

const Layout = ({children, title, description}) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
                
                <meta httpEquiv="Content-Security-Policy" content="default-src 'none'; 
                                                                   img-src 'self';
                                                                   script-src 'self' 'unsafe-eval';
                                                                   connect-src 'self';
                                                                   style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
                                                                   font-src https://fonts.googleapis.com https://fonts.gstatic.com;
                                                                   "/>
        
                <meta httpEquiv="X-Content-Type-Options" content="nosniff"/>
                <meta httpEquiv="x-dns-prefetch-control" content="off"/>
                <meta name="referrer" content="no-referrer"/>
                
            </Helmet>
            {children}
        </React.Fragment>
    );
}

export default Layout;