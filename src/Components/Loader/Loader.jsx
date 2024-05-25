import React , {useEffect , useState} from 'react'
import "./Loader.css"
import Logo from "../../img/logo.png"

const Loader = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader runs for 4 seconds

    return () => clearTimeout(timer);
  }, []);
    return (
        loading && (
            <div className="logo-loader-container">
            <div className="logo-loader-animation">
                <img src={Logo} alt="" />
            </div>
        </div>
        )
       
    )
}

export default Loader