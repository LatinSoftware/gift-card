import React from 'react';
import { BeatingHeart } from '../BeatingHeart/index'

import {  OpenModal, CloseModal,  SlideText } from './ModalHelper';

import './Gift.css';
import './Envelop.css';
import './Modal.css';
import './ModalAnimation.css';
import { useEffect } from 'react';


const BirthdayCard = ({setStep}) => {

    const Close = (e) => {
        e.preventDefault();
        CloseModal();
    }

    useEffect(() => {
        let contentList = [].slice.call(document.querySelector('.modal__container').children);
        const nextBtn = document.querySelector("#next");
        nextBtn.addEventListener("click", () => {
            SlideText(contentList);
            let activeContent = findActiveContent(contentList);
            if(activeContent === 0){
                setTimeout(() => setStep(5), 3000);
            }

        });
    }, [])

    return (
        <React.Fragment>
            <div className="birthday-gift">
                <div className="gift">
                    <input id="click" type="checkbox" />
                    <label className="click" htmlFor="click" />
                    <div className="wishes">Happy Birthday!</div>
                    <div className="sparkles">
                        <div className="spark1" />
                        <div className="spark2" />
                        <div className="spark3" />
                        <div className="spark4" />
                        <div className="spark5" />
                        <div className="spark6" />
                    </div>
                    <div className="envelop" id="showModalBtn" onClick={OpenModal}>
                        <div id="card">
                            <div className="heart" />
                            <div className="heart1" />
                            <div className="heart2" />
                            <div className="heart3" />
                            <div className="heart4" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="modal-container">
                <div className="modal-background">
                    <div className="modal">
                        <h1 className="modal__title">Para mi querida enana de pies frios ??????</h1>
                        <div className="modal__container">
                            <div className="modal-content active">
                                <p className="modal__text">
                                    Sabes, he pensado tanto en que escribirte, que si me siento aqu?? a escribir yo creo que no
                                    me dan las
                                    p??ginas.
                                    Voy a ser un poquito cursi, pero te prometo que esta ser?? la ??ltima vez ??vale?
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Primeramente, feliz 19 a??os ????. Espero que hoy sea un d??a super incre??ble para
                                    ti, te
                                    llenen de mucho amor, compartas con tus seres queridos, me mande mi bizcocho y que sientas
                                    que el mundo
                                    ser?? solo para ti.
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Deseo que este nuevo a??o, disfrutes de todo lo que quieras hacer, recuerda frey que de este
                                    mundo lo que
                                    uno se lleva son esos momentos tan m??gicos que el cerebro no los quiere ni borrar. As?? que
                                    trata que
                                    cada d??a sea m??gico.
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Deseo que puedas viajar. Viaja cerca, viaja lejos, ven y vu??lvete a ir, la t??a de papi
                                    siempre me dec??a
                                    que si uno no viaja muere ciego. Yo pienso que es verdad, solo cuando viajas te das cuenta
                                    de lo
                                    incre??ble que es el mundo, hazlo sola o acompa??ada...
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    y busca destinos que se ajusten a tu
                                    presupuesto,
                                    incluso si no tienes mucho, puedes ir a lugares increibles.
                                    hazlo ahora que estas joven, las circunstancias no har??n m??s que hacerlo dif??cil, incluso si
                                    estas much??simo
                                    mejor econ??micamente.
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Espero que este a??o te den todo el amor que te mereces y en verdad te mereces un mont??n.
                                    Espero que
                                    empieces a luchar por tus sue??os, no dejes que nadie te diga que no puedes logarlos. Yo
                                    conf??o en que si
                                    puedes (espero poder estar para verte cumplirlos).
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Pasa tiempo con tus amigos, br??ndales cari??o, amor, buenos momentos y sobre todo conf??a en
                                    ellos, ellos est??n para apoyarte, si te sientes mal o si quieres hablar, salir a comer o
                                    cantar, cuenta con ellos.
                                    S?? que tienes un mont??n que te aprecian y aprecias.
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Pasa tiempo
                                    con tu familia, ??malos y ded??cales tiempo de calidad. Nunca sabremos cuando se van y lo
                                    mejor es poder
                                    decir ???Le di lo mejor que pude a todos ellos???
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Estos son mis bellos deseos para ti, pero al final y el m??s importante, vive la vida como
                                    quieras
                                    vivirla, haz todo lo que te guste, comete errores, baila mucho (s?? que te encanta), por
                                    favor cuida
                                    mucho de tu salud (a mi si me gustar??a que vivieras muchos a??os)...
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Come todo lo que no te mate y has las
                                    cosas m??s locas y divertidas que puedas hacer.
                                    Disfruta de cada salida, y de verdad no te limites a la circunstancias, si quieres hacer
                                    algo y lo intentas hasta lograrlo, el mundo buscara la manera de ayudarte.
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Mi mayor deseo para ti es que a partir de este a??o vivas una vida la cual no te arrepientas
                                    y espero alg??n d??a, poder a escuchar tus historias.
                                </p>
                                <section className="custom_message">
                                    <p>TE QUIERO MUCHO FREY</p>
                                    <p>Disfruta mucho tu dia.</p>
                                    <BeatingHeart />
                                </section>
                            </div>
                        </div>
                        <button className="modal__btn" id="next">Continuar ???</button>
                        <a id="close_modal" className="link-2" href='#' onClick={Close} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function findActiveContent(contentList) {
    let activeContent = contentList.findIndex(e => {
        return e.classList.contains('active');
    })

    if(activeContent < 0)
        return 0;
    return activeContent
}

export { BirthdayCard }