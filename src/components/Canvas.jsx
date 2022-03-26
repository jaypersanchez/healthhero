/* eslint-disable no-unused-expressions */
import React, {useEffect, useRef, memo} from 'react';
import SweetAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import towns from '../towns'
import Accordion from 'react-bootstrap/Accordion';
import navigator from '../assets/images/navigator.png';
import {TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch';
import env from 'react-dotenv';

const Alert = withReactContent(SweetAlert);

const CANVAS_WIDTH = 10000;
const CANVAS_HEIGHT = 10000;
const PIXEL_SIZE = 100;

export const Canvas = ({mintList, onClickCell}) => {
    const canvasRef = useRef();
    useEffect(() => {
        const canvasElem = canvasRef.current
        if (canvasElem instanceof HTMLCanvasElement) {
            const ctx = canvasElem.getContext('2d');
            drawCanvas()
            canvasElem.addEventListener('click', handleCanvasClick)
        }
        return () => {
            window.removeEventListener('resize', drawCanvas)
            if (canvasElem instanceof HTMLCanvasElement) {
                canvasElem.removeEventListener('click', handleCanvasClick)
            }
        }
    }, [canvasRef, mintList])


    const drawBoard = (context) => {
        context.lineWidth = 6
        for (let x = 0; x < Math.ceil(CANVAS_WIDTH / PIXEL_SIZE); x++) {
            context.moveTo(x * PIXEL_SIZE, 0);
            context.lineTo(x * PIXEL_SIZE, CANVAS_WIDTH);
        }
        for (let y = 0; y < Math.ceil(CANVAS_HEIGHT / PIXEL_SIZE); y++) {
            context.moveTo(0, y * PIXEL_SIZE);
            context.lineTo(CANVAS_HEIGHT, y * PIXEL_SIZE);
        }
        context.strokeStyle = '#00000078';
        context.stroke()
    }


    const drawCanvas = () => {
        const canvasElem = canvasRef.current
        if (canvasElem instanceof HTMLCanvasElement) {
            const context = canvasElem.getContext('2d');
            context.translate(0, 0);
            const background = new Image();
            //Need to get image from storage.  So relating image character and the selected pixel area(land area) is first step in flow
            background.src = 'https://gohealthhero-production.s3.amazonaws.com/map.png';
            background.onload = () => {
                context.drawImage(background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                towns.forEach(town => {
                    context.fillStyle = town.color;
                    town.value.forEach(item => {
                        context.fillRect(item.x * 10, item.y * 10, 100, 100);
                        if (!item.available) {
                            context.fillStyle = 'yellow';
                            context.fillRect(item.x * 10, item.y * 10, 100, 100);
                            context.fillStyle = town.color;
                        }
                    })
                })
                mintList.forEach(({x, y, image}) => {
                    let mintImage = new Image();
                    mintImage.src = image;
                    mintImage.onload = () => {
                        context.drawImage(mintImage, (x - 1) * 10, (y - 1) * 10, PIXEL_SIZE, PIXEL_SIZE);
                        context.fillText(x, (x - 1) * 10, (y - 1) * 10)
                        context.fillText(y, (x - 1) * 10, (y - 1) * 10 + 10)
                    }
                })
                drawBoard(context)
            };
        }

    }

    /*
    * When a pixel area is selected, flow must validate that the 
    * current select X and Y hasn't already been selected and/or minted
    */
    const handleCanvasClick = (e) => {
        const canvasElem = e.target
        const pX = e.offsetX * CANVAS_WIDTH / canvasElem.clientWidth
        const pY = e.offsetY * CANVAS_HEIGHT / canvasElem.clientWidth
        console.log('clicked at:', pX, pY)
        const findObject = () => {
            for (const town of towns) {
                for (const item of town.value) {
                    const X = item.x * 10
                    const Y = item.y * 10
                    if (X <= pX && pX <= X + PIXEL_SIZE && Y <= pY && pY <= Y + PIXEL_SIZE) {
                        return item
                    }
                }
            }
            return null
        }
        const obj = findObject()
        console.log('selected object: ', obj)
        const name = obj && obj.card_data['name'] || 'Go!Bot Deed';
        const image = obj && obj.card_data['image'] || '/images/default.jpg';
        if (obj) {
            if (obj.available) {
                Alert.fire({
                    imageUrl: image,
                    imageHeight: 280,
                    imageAlt: 'A tall image',
                    background: 'linear-gradient(180deg, #007FFF 0%, #000000 100%)',
                    color: 'white',
                    html: '<p> ' + name + ' is available to be bought through OpenSea',
                    confirmButtonColor: 'rgb(13, 173, 233)',
                    confirmButtonText: 'OpenSea Collection',
                }).then((result) => {
                    if (result.isConfirmed) {
                        const url = env.OPENSEA_URL;
                        console.log(`OPENSEAURL ${url}`)
                        window.open(url, '_blank');
                    }
                });
            } else {
                Alert.fire({
                    html:
                        '<p>' +
                        name +
                        '</p> <br/> <p>This parcel of Health Hero City land is sold. You can always make an offer on this parcel or select another parcel that is currently available for minting.</p>',
                    imageUrl: image,
                    imageHeight: 280,
                    imageAlt: 'A tall image',
                    confirmButtonColor: 'rgb(13, 173, 233)',
                    background: 'linear-gradient(180deg, #007FFF 0%, #000000 100%)',
                    color: 'white',
                    customClass: 'swal-height',
                    confirmButtonText: 'Make an offer',
                    showCancelButton: true,
                    cancelButtonText: `Select another`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        const url = obj.opensea;
                        window.open(url, '_blank');
                    }
                });
            }
            onClickCell(image, obj.x, obj.y, obj.id, name, obj.opensea);
            return
        }

        Alert.fire({
            imageUrl: image,
            imageHeight: 280,
            imageAlt: 'A tall image',
            html: '<p> This Go!Bot NFT/parcel of Health Hero City land is not available for sale yet.</p>',
            confirmButtonColor: 'rgb(13, 173, 233)',
            color: 'white',
            background: 'linear-gradient(180deg, #007FFF 0%, #000000 100%)',
        });

    }

    return (
        <div className="canvas-container position-relative">
            <TransformWrapper maxScale={10} doubleClick={{step: 10}}>
                <TransformComponent wrapperStyle={{maxHeight: '100vh'}}>
                    <canvas id="canvas" ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT}/>
                </TransformComponent>
            </TransformWrapper>

            <div className="tool-box">
                <div className="--img">
                    <img src={navigator} className="img-fluid" alt="img4"/>
                </div>
                <div className="--tool">
                    <button>
                        <span className="icon-plus"/>
                    </button>
                    <button className="my-2">
                        <span className="icon-minus"/>
                    </button>
                    <button>
                        <span className="icon-cross"/>
                    </button>
                </div>
            </div>

            <div className="legend-background position-absolute">
                <Accordion id="legends">
                    <Accordion.Item eventKey="0">
                        <Accordion.Body className="legend">
                            <ul>
                                <li>
                                    <span className="social"/> Social Town
                                </li>
                                <li>
                                    <span className="physical"/> Physical Town{' '}
                                </li>
                                <li>
                                    <span className="intellicual"/> Intellectual Town
                                </li>
                                <li>
                                    <span className="spirtual"/> Spirtual Town
                                </li>
                                <li>
                                    <span className="down"/>
                                </li>
                                <li>
                                    <span className="environmental"/> Environmental Town
                                </li>
                                <li>
                                    <span className="emotional"/> Emotional Town
                                </li>
                                <li>
                                    <span className="oc"/> Occupational Town
                                </li>
                            </ul>
                        </Accordion.Body>
                        <Accordion.Header>
                            <span className="icon-info"/>
                            LEGENDS
                            <span className="icon-up clr-white"/>
                        </Accordion.Header>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}


export default memo(Canvas);