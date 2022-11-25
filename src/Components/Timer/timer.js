import gsap from "gsap";


const init = (targetDate,setDistance) => {
    // find days elements
    const days = document.querySelectorAll(".bloc-time.days .figure")
    const days_1 = days[0];
    const days_2 = days[1];

    const hours = document.querySelectorAll(".bloc-time.hours .figure")
    const hour_1 = hours[0];
    const hour_2 = hours[1];

    const minutes = document.querySelectorAll(".bloc-time.min .figure")
    const minute_1 = minutes[0];
    const minute_2 = minutes[1];

    const seconds = document.querySelectorAll(".bloc-time.sec .figure")
    const second_1 = seconds[0];
    const second_2 = seconds[1];
    
    var interval = setInterval(() => {  
        const now = new Date().getTime();
        const distance = targetDate - now;
        let dd = Math.floor(distance / (1000 * 60 * 60 * 24));    
        let hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let ss = Math.floor((distance % (1000 * 60)) / 1000);

        checkHour(dd, days_1, days_2);
        checkHour(hh, hour_1, hour_2);
        checkHour(mm, minute_1, minute_2);
        checkHour(ss, second_1, second_2);

        setDistance(distance);

        if (distance < 0) {
            clearInterval(interval);
            dd = hh = mm = ss = 0
        }
    }, 1000)

}


const animateFigure = ($el, value) => {
    let $top  = $el.querySelector('.top'),
    $bottom   = $el.querySelector('.bottom'),
    $back_top = $el.querySelector('.top-back'),
    $back_bottom = $el.querySelector('.bottom-back');

    // Before we begin, change the back value
    $back_top.querySelector('span').textContent = value;
  
    // Also change the back bottom value
    $back_bottom.querySelector('span').textContent = value;

    // Then animate
    gsap.to($top, 0.8, {
        rotationX: '-180deg',
        transformPerspective: 300,
        ease: "power2.out",
        onComplete: function () {
            $top.textContent = value;
            $bottom.textContent = value;
            gsap.set($top, { rotationX: 0 });
        }
    });

    gsap.to($back_top, 0.8, {
        rotationX: 0,
        transformPerspective: 300,
        ease: "power2.out",
        clearProps: 'all'
    });
}

const checkHour = function (value, $el_1, $el_2) {

    var val_1 = value.toString().charAt(0),
        val_2 = value.toString().charAt(1),
        fig_1_value = $el_1.querySelector('.top').textContent,
        fig_2_value = $el_2.querySelector('.top').textContent;

    if (value >= 10) {

        // Animate only if the figure has changed
        if (fig_1_value !== val_1) animateFigure($el_1, val_1);
        if (fig_2_value !== val_2) animateFigure($el_2, val_2);
    }
    else {

        // If we are under 10, replace first figure with 0
        if (fig_1_value !== '0') animateFigure($el_1, 0);
        if (fig_2_value !== val_1) animateFigure($el_2, val_1);
    }
}

export default init;