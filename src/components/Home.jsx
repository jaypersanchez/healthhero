/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
import Canvas from './Canvas';
import UserProfile from './UserProfile';
import AboutUs from './about/AboutUs';
import NFTView from './nft-view/NFTView';
import UserSidebar from './user-profile/UserSidebar';

import React, {useCallback} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';

// images
import imageMAP from '../assets/images/map.png';
import imageNFT from '../assets/images/NFT.png';
import imageMint from '../assets/images/mint.png';

const ViewModes = {
    HOME: 'home',
    USER_PROFILE: 'user_profile',
};

// eslint-disable-next-line
function Home() {
    const [show, setShow] = React.useState(false);
    const [navbar, setNavbar] = React.useState(false);
    const [showCellDetail, setShowCellDetail] = React.useState(false);
    const [viewMode, setViewMode] = React.useState(ViewModes.HOME);
    const [viewImg, setViewImg] = React.useState("")
    const [xPos, setXPos] = React.useState(-1)
    const [yPos, setYPos] = React.useState(-1)
    const [name, setName] = React.useState("")
    const [opensea, setOpenSea] = React.useState("")
    const [mintList, setMintList] = React.useState([])
    const [id, setId] = React.useState([])
    const [physicalList, setPhysicalList] = React.useState([])
    const [socialList, setSocialList] = React.useState([])
    const [spirtualList, setSpirtualList] = React.useState([])
    const [downtownList, setDowntownList] = React.useState([])
    const [emotionalList, setEmotionalList] = React.useState([])
    const [ocList, setOCList] = React.useState([])
    const [intellectualList, setIntellectualList] = React.useState([])
    const handleClose = () => setShow(false);

    const changeBackground = () => {
        if (window.scrollY >= 210) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    //Rinkeby and Ethereum only
    const supportNetwork = ['0x4','0x1'] 


    React.useEffect(() => {
        changeBackground();
        setTimeout(function () {
            setShow(true);
        }, 4000);
        window.addEventListener('scroll', changeBackground);
    }, []);

    function changeViewMode(evt, _viewMode) {
        evt.preventDefault();
        setViewMode(_viewMode);
    }

    const onClickCell = useCallback((img, xPos, yPos, id, name, opensea) => {
        setViewImg(img)
        setXPos(xPos)
        setYPos(yPos)
        setName(name)
        setId(id)
        setOpenSea(opensea)
        setShowCellDetail(true);
    },[])

    function onCloseNftView(evt) {
        evt.preventDefault();
        setShowCellDetail(false);
    }

    

    return (
        <>
            <section className="site-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3 sidebar px-0">
                            <div className="logo position-relative">
                                <img
                                    src="//user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/191995/548236_713475.png"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="navigation">
                                <ul className="d-flex align-items-center justify-content-between">
                                    <li
                                        className={viewMode === ViewModes.HOME ? 'active' : ''}
                                        onClick={(evt) => changeViewMode(evt, ViewModes.HOME)}
                                    >
                                        <a href="#">
                                            <span className="icon-home"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon-shop"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon-discord"></span>
                                        </a>
                                    </li>
                                    <Dropdown>
                                        <Dropdown.Toggle id="social-dropdown">
                                            <span className="icon-twitter-outline"></span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="https://twitter.com/GoHealthHero" target="_blank">
                        <span class="icon-twitter-outline-fill">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </span>{' '}
                                                Follow us on Twitter
                                            </Dropdown.Item>
                                            <Dropdown.Item href="https://twitter.com/GoHealthHero" target="_blank">
                        <span class="icon-whatsapp-fill">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                        </span>{' '}
                                                Chat on Whatapp
                                            </Dropdown.Item>
                                            <Dropdown.Item href="https://www.facebook.com/gohealthhero/"
                                                           target="_blank">
                        <span className="icon-facebook-fill">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </span>{' '}
                                                Like us on Facebook
                                            </Dropdown.Item>
                                            <Dropdown.Item href="https://www.linkedin.com/company/gohealthhero"
                                                           target="_blank">
                        <span class="icon-linkedin-fill">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </span>{' '}
                                                Follow us on LinkedIn
                                            </Dropdown.Item>
                                            <Dropdown.Item href="https://www.instagram.com/gohealthhero/?hl=en"
                                                           target="_blank">
                        <span class="icon-insta-fill">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </span>
                                                Follow us on Instagram
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="https://www.youtube.com/channel/UCXJM8TeHKGxMHz9KHYbI-AQ"
                                                target="_blank">
                        <span class="icon-youtube-fill">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </span>
                                                Subscribe our Youtube
                                            </Dropdown.Item>
                                            <Dropdown.Item href="https://www.tiktok.com/@gohealthhero" target="_blank">
                        <span class="icon-tiktok-fill">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </span>
                                                See latest Tiktok
                                            </Dropdown.Item>
                                            <Dropdown.Item href="https://www.messenger.com/t/286330911429387"
                                                           target="_blank">
                        <span class="icon-messanger-fill">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </span>
                                                Chat on Messanger
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle id="social-share">
                                            <span className="icon-logout"></span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="https://twitter.com/GoHealthHero" target="_blank">
                        <span class="icon-twitter-outline-fill">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </span>{' '}
                                                Tweet City! GoHealth hero
                                            </Dropdown.Item>
                                            <Dropdown.Item href="https://twitter.com/GoHealthHero" target="_blank">
                        <span class="icon-whatsapp-fill">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                        </span>{' '}
                                                Share via Whatapp!
                                            </Dropdown.Item>
                                            <Dropdown.Item href="https://www.facebook.com/gohealthhero/"
                                                           target="_blank">
                        <span className="icon-facebook-fill">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </span>{' '}
                                                Share using Facebook
                                            </Dropdown.Item>
                                            <Dropdown.Item href="mailto:test@email.com" target="_blank">
                        <span class="icon-email-fill">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </span>{' '}
                                                Share via Gmail
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <li
                                        className={viewMode === ViewModes.USER_PROFILE ? 'active' : ''}
                                        onClick={(evt) => changeViewMode(evt, ViewModes.USER_PROFILE)}
                                    >
                                        <a href="#">
                                            <span className="icon-user"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar-content" id="toggle-container">
                                {viewMode === ViewModes.HOME &&
                                (showCellDetail ? (
                                    <NFTView xPos={xPos} yPos={yPos} img={viewImg} id={id} opensea={opensea} name={name}
                                             onCloseNftView={onCloseNftView}
                                             setList={setMintList}
                                             setPhysicalList={setPhysicalList}
                                             setSocialList={setSocialList}
                                             setSpirtualList={setSpirtualList}
                                             setDowntownList={setDowntownList}
                                             setEmotionalList={setEmotionalList}
                                             setOCList={setOCList}
                                             setIntellectualList={setIntellectualList}
                                    />
                                ) : <AboutUs/>)}
                                {viewMode === ViewModes.USER_PROFILE && <UserSidebar/>}
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 canvas-land px-0">
                            {
                                viewMode === ViewModes.HOME &&
                                <Canvas
                                    onClickCell={onClickCell}
                                    mintList={mintList}
                                />
                            }
                            {viewMode === ViewModes.USER_PROFILE && <UserProfile/>}
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Popup */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Button variant="primary" className="close-btn" onClick={handleClose}>
                        <span className="icon-cross"/>
                    </Button>
                    <div className="modal-inn text-center">
                        <h1 className="clr-red mb-3">How it Works</h1>
                        <p className="max-400 m-auto px-md-5">
                            There are 8,888 unique parcels of land available for minting, each with their own ID.
                        </p>

                        <Carousel id="works-popup" className="carousel slide mt-32">
                            <Carousel.Item>
                                <div className="minh-160">
                                    <img src={imageMAP} className="img-modal" alt="img4"/>
                                </div>
                                <h2 className="h2 mt-5 mb-3">Step 1</h2>
                                <h4 className="fw-bold">Click on a tile to select the land</h4>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="minh-160">
                                    <img src={imageNFT} className="img-modal" alt="img4"/>
                                </div>
                                <h2 className="h2 mb-3">Step 2</h2>
                                <h4 className="fw-bold">The selected Go!Bot will appear</h4>
                            </Carousel.Item>
                            <Carousel.Item className="mb-5">
                                <div className="minh-160">
                                    <img src={imageMint} className="o" alt="img4"/>
                                </div>
                                <h2 className="h2 mt-4 mb-3">Step 3</h2>
                                <h4 className="fw-bold">Hit Mint Token to get your Go!Bot</h4>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Home;
