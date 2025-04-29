import React from "react";

const Fun = function() {

    return (
        <div>
            <h1 className="text-black p-3">Компаний-роботодатели</h1>
            <p className="text-black pb-10 pl-3">Познакомтесь нашими партнерами-работодателями и совместными программами подготовки</p>

            <section className="grid grid-cols-3 gap-10 , flex items-center">
                <div className="bg-color: bg-green-500 p-7">
                    <p className="color: text-black">Ведущий игрок на туристическом<br/> рынке России уже 14лет<br/> предлагает инновационные IT-<br/>решение и услуги, облегчающие<br/> жизнь туристам и партнерам.</p>

                    <button className="">Программа</button>
                </div>
                <div className=" bg-green-500 p-10">
                    <p className="color: text-black">Создает сопровождает и<br/>развивает государственные<br/> информационные системы<br/> Московской области.</p>

                    <button className="color: bg-blue-600">Программа</button>
                </div>
                <div className="p-10  bg-green-500">
                    <p className="color: text-black">Контур-экосистема для бизнеса<br/> избавляет предпринимателей<br/> от рутины, освобождая время для<br/> творчества и развития.</p>

                    <button className="color: bg-blue-600">Программа</button>
                </div>
                <div className="p-7  bg-green-500">
                    <p className="color: text-black">Компания специализируется<br/> на наукоемкой цифровизации<br/> производственных<br/> и поддерживающих бизнесс-<br/>процессов.</p>

                    <button className="color: bg-blue-600">Программа</button>
                </div>
                <div className="p-7  bg-green-500">
                    <p className="color: text-black">Международная IT-компания,<br/> которая специализируется<br/> на закаазной разработке веб-<br/>сервисов и мобильных<br/> прилоожениию.</p>

                    <button className="color: bg-blue-600">Программа</button>
                </div>
                <div className="color: text-white bg-black p-13">
                    <h1 className="">И еще более<br/>20 компаний</h1>
                </div>
            </section>
        </div>
    )
}

export default Fun