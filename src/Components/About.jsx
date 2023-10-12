import React from 'react';
import kadrlar1 from "../assets/kadrlar1.jpg";
import kadrlar2 from "../assets/kadrlar2.jpg";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
        <span>-YAKGUZ-</span>
        <h1>Yosh kadrlar</h1>
        <div>
            <section>
                <img src={kadrlar1} alt="" />
                <p>Ayni paytda Yakkabog';G'uzor irrigatsiya tizimi boshqarmasida 6 nafar 30 yoshgacha bulgan yoshlar faoliyat yuritmoqda. "Paxtaobod" kaalida olisdan qatnab ishlovchi 2 nafar yosh hodimlarga suvchilar uyida qolib ishlashlari uchun barcha sharoitlar yaratildi.</p>
            </section>
            <section>
                <img src={kadrlar2} alt="" />
                <p>Shuningdek, xodimlarning tartib-intizomi, ishga kelib-ketishi, uz xizmat vazifalarini sidqidildan bajarishi bilan bog'liq masalalar muxokoma qilindi. Yangi qabul qilingan O'zbekiston Respublikasining "Mexnat kodeksi" haqida huquqiy tushunchalar berildi.</p>
            </section>
        </div>
        <div>
          <Link to="/malumotlar">
          <button>To'liq Ma'lumotlar</button>
          </Link>
          
        </div>
    </div>
  )
}

export default About