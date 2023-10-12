import React from 'react';
import hamkor1 from "../assets/hamkor1.jpg";
import hamkor2 from "../assets/hamkor2.jpg";

const Hamkorlik = () => {
  return (
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
  )
}

export default Hamkorlik