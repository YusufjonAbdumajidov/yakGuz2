import React from 'react';
import { BsTelegram } from "react-icons/bs"
import {  BiCopyright } from "react-icons/bi";

const Contact = () => {
  return <>
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

export default Contact