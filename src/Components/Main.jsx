import React from 'react';
import Navbar from './Navbar';

import kadrlar1 from "../assets/kadrlar1.jpg";
import kadrlar2 from "../assets/kadrlar2.jpg";
import { Link } from 'react-router-dom';

import hamkor1 from "../assets/hamkor1.jpg";
import hamkor2 from "../assets/hamkor2.jpg";

import { BsTelegram } from "react-icons/bs"
import {  BiCopyright } from "react-icons/bi";


const Main = () => {
  return <>
    <div className='mainContainer'>
        <div className="coverBack"></div>
        <main>
          <Navbar />
          <div className="showcase">
            <p>Amu-Qashqadaryo irrigatsiya tizimlari havza boshqarmasi xuzuridagi</p>  
            <h1>Yakkabog-G’uzor irrigatsiya tizimi boshqarmasi</h1>
            <button > <a style={{textDecoration: "none"}} href="https://suvchi.gov.uz/uz" >Vazirlik rasmiy sayti</a> </button>
          </div>
        </main>
    </div>
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
      <div className='hamkorlik'>
      <section>
        <b>--YAKGUZ--</b>
        <h1>Hamkorlik</h1>
        <span>Xitoylik mutaxassislar bilan hamkorlikda tomchilatib sug'orish texnologiyasi asosida yetishtirilgan paxtaning xosildorligi urganildi.</span>
        <p>Koson tumani Guvalak xududidagi "Kelajak oq oltin" fermer xujaligining paxta maydoniga "O'zbekiston-Xitoy paxtani tomchilatib sug'orish sinovi va texnologiyasini kengaytirish" loyixasi doirasida 2021 yilda Xitoy davlatida chigit olib kelib qadalgan edi.</p>
        <p>Ushbu loyixa Xitoy fanlar akademiyasining Shinjon ekologiya va geografiya insituti, Xitoy fanlar akademiyasi Geografik fanlar va tabiiy resurslarini tadqiq qilish insituti, O'zbekistan Respublikasi Suv hujaligi vazirligi, Irrigatsiya va suv muammolari ilmiy-tadqiqot insituti, Xinjiang Insitute of Ecology and Geography, Chinece academy of Sciences (XIEG) va Genetika va usimliklar eksperimental biologiyasi insituti, Amu-Qashqadaryo itxb hamkorlikda amalga oshirilgan edi.</p>
      </section>
      <section>
        <img src={hamkor1} alt="" />
        <img src={hamkor2} alt="" />
      </section>
    </div>

    <div className='contactContainer'>
        <section>
            <h1>YAKGUZ</h1>
            <p>Amu-Qashqadaryo irrigatsiya tizimlari havza boshqarmasi xuzuridagi Yakkabog-G’uzor irrigatsiya tizimi boshqarmasi</p>
            <p>Bizning telegram kanal: <BsTelegram className='tgIcon' /> </p>
        </section>
        <section>
            <h1>Asosiy sahifalar</h1>
            <p>Ma'lumotlar</p>
            <p>Rahbariyat</p>
            <p>Qabul</p>
            <p>Aloqa</p>
        </section>
        <section>
            <p>Ish vaqti: 9:00 - 18:00</p>
            <p>E-mail: qashqadaryo@kashagro.uz</p>
            <p>Ishonch telefoni: +99855 404-18-74</p>
            <p>Manzil: G’uzor shaxri, Mustaqillik ko’chasi 41 uy</p>
        </section>
    </div>
    <footer>
        <p><BiCopyright /> Copyright 2023 - All rights reserved</p>
    </footer>
  </>
}

export default Main