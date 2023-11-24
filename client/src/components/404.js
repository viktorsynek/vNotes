import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
            <Navbar />
            <div className="error">
                <h1>404 Error <span>- Page Not Found</span></h1>
                <Link to="/">Back to Home</Link>
            </div>
        </>
    );
}
 
export default PageNotFound;