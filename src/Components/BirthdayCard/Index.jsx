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
            console.log(activeContent, contentList.length);
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
                        <h1 className="modal__title">Para mi querida enana de pies frios ❤️</h1>
                        <div className="modal__container">
                            <div className="modal-content active">
                                <p className="modal__text">
                                    Sabes, he pensado tanto en que escribirte, que si me siento aquí a escribir yo creo que no
                                    me dan las
                                    páginas.
                                    Voy a ser un poquito cursi, pero te prometo que esta será la última vez ¿vale?
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Primeramente, feliz 19 años (cara lagrimita). Espero que hoy sea un día super increíble para
                                    ti, te
                                    llenen de mucho amor, compartas con tus seres queridos, me mande mi bizcocho y que sientas
                                    que el mundo
                                    será solo para ti.
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Deseo que este nuevo año, disfrutes de todo lo que quieras hacer, recuerda frey que de este
                                    mundo lo que
                                    uno se lleva son esos momentos tan mágicos que el cerebro no los quiere ni borrar. Así que
                                    trata que
                                    cada día sea mágico.
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Deseo que puedas viajar. Viaja cerca, viaja lejos, ven y vuélvete a ir, la tía de papi
                                    siempre me decía
                                    que si uno no viaja muere ciego. Yo pienso que es verdad, solo cuando viajas te das cuenta
                                    de lo
                                    increíble que es el mundo, hazlo sola o acompañada...
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    y busca destinos que se ajusten a tu
                                    presupuesto,
                                    incluso si no tienes mucho, puedes ir a lugares increibles.
                                    hazlo ahora que estas joven, las circunstancias no harán más que hacerlo difícil, incluso si
                                    estas muchísimo
                                    mejor económicamente.
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Espero que este año te den todo el amor que te mereces y en verdad te merece un montón.
                                    Espero que
                                    empieces a luchar por tus sueños, no dejes que nadie te diga que no puedes logarlos. Yo
                                    confió en que si
                                    puedes (espero poder estar para verte cumplirlos).
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Pasa tiempo con tus amigos, bríndales cariño, amor, buenos momentos y sobre todo confía en
                                    ellos, ellos están para apoyarte, si te sientes mal o si quieres hablar, salir a comer o
                                    cantar, cuenta con ellos.
                                    Sé que tienes un montón que te aprecian y aprecias.
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Pasa tiempo
                                    con tu familia, ámalos y dedícales tiempo de calidad. Nunca sabremos cuando se van y lo
                                    mejor es poder
                                    decir “Le di lo mejor que pude a todos ellos”
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Estos son mis bellos deseos para ti, pero al final y el más importante, vive la vida como
                                    quieras
                                    vivirla, haz todo lo que te guste, comete errores, baila mucho (sé que te encanta), por
                                    favor cuida
                                    mucho de tu salud (a mi si me gustaría que vivieras muchos años)...
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Come todo lo que no te mate y has las
                                    cosas más locas y divertidas que puedas hacer.
                                    Disfruta de cada salida, y de verdad no te limites a la circunstancias, si quieres hacer
                                    algo y lo intentas hasta lograrlo, el mundo buscara la manera de ayudarte.
                                </p>
                            </div>
                            <div className="modal-content">
                                <p className="modal__text">
                                    Mi mayor deseo para ti es que a partir de este año vivas una vida la cual no te arrepientas
                                    y espero algún día, poder a escuchar tus historias.
                                </p>
                                <section className="custom_message">
                                    <p>TE QUIERO MUCHO FREY</p>
                                    <p>Disfruta mucho tu dia.</p>
                                    <BeatingHeart />
                                </section>
                            </div>
                        </div>
                        <button className="modal__btn" id="next">Continuar →</button>
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