import Logo from '../../assest/images/logo-3.png';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
        <div className="headerWrapper">
            <div className="top-strip bg-green">
                <div className="container">
                    <p className="mb-0 mt-0 text-center"><b>MÀU XANH</b> hôm nay, <b>SỨC KHỎE</b> mai sau</p>
                </div>
            </div>

            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="logowrapper d-flex align-items-center col-sm-2">
                            <Link to="/">
                            <img src={Logo} alt="logo 1"/>
                            </Link> 
                        </div>
                        <div className='clo-sm-10 d-flex align-items-center part2'>
                            <button className='KhuVuc'>
                                lựa chọn khu vực
                            </button>
                        </div>
                    </div>
                </div>
                </div>"
        </div>
        </>
    )
}

export default Header;