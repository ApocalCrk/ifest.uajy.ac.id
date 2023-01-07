import { Carousel } from "flowbite-react";
import { FC } from "react";
import { FaWhatsapp } from "react-icons/all";
import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import 'swiper/css/navigation';
import "swiper/css/pagination";

import { Card } from "flowbite-react";
import { FaCertificate, FaMoneyBillWave } from "react-icons/all";
import 'react-vertical-timeline-component/style.min.css';
import './Sponsor.css';

const Sponsor: FC = () => {
  return (
    <Layout>
      <div className="bg-[#0A1828] -z-10 absolute top-0 pt-32 w-screen">
        <div className="flex flex-col justify-center items-center w-screen">
          <div className="font-louisgeorgecafe text-4xl text-white">
            IFEST#11 SPONSORSHIP
          </div>
          <div className="font-louisgeorgecafe text-xl text-white text-center pt-6">
            Tertarik dengan acara kami? Dukung kami dengan menjadi sponsor!
          </div>
          <div className="p-2"></div>
          <div className="w-full px-4">
            <Swiper
              autoplay={{ delay: 2000 }}
              effect={"coverflow"}
              grabCursor={false}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[Autoplay, EffectCoverflow]}
              className="mySwiper"
            >
              <SwiperSlide
                className="w-[20rem] h-[30rem] my-8 rounded-xl"
                style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
              >
                <div className="text-center flex gap-2 flex-col h-full items-center justify-start ">
                  <img
                    className="w-32"
                    src="public\images\starslash.svg"
                    style={{ width: "3rem" }}
                    alt="/"
                  />
                  <div className="font-louisgeorgecafe text-[#ffffff62] text-center">
                    Sponsor Kaisar
                  </div>
                  <div className="font-louisgeorgecafe text-[#fff] text-center font-bold">
                    Platinum
                  </div>
                  <div className="font-retroica text-2xl text-[#ff69b4]">
                    <span className="text-sm font-louisgeorgecafe">Rp</span>6.000.000
                  </div>
                  <div className="font-louisgeorgecafe text-[#c5c5c5] overflow-x-auto text-left">
                    <ul className="list-inside list-disc">
                      <li>
                        Penempatan logo pada website IFest #11 dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                        Pencantuman link website atau akun sosial media pada website IFest #11.
                      </li>
                      <li>
                      	Pencantuman logo pada poster pada seluruh event IFest #11 dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada cocard dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada spanduk dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada backdrop panggung dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo di photobooth.
                      </li>
                      <li>
                      	Pencantuman logo pada after movie IFest #11.
                      </li>
                      <li>
                        Pencantuman logo pada backdrop panggung dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada sertifikat pada seluruh event IFest #11 dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Paid promote pada seluruh akun Instagram panitia IFest #11 dengan ketentuan yang ditetapkan pada MOU.
                      </li>
                      <li>
                      	Iklan adlibs oleh MC saat acara berlangsung pada semua event IFest #11 dengan materi iklan disediakan oleh pihak sponsor.
                      </li>
                      <li>
                      	Penayangan Iklan dalam bentuk video dan atau gambar saat break (istirahat) acara pada semua event IFest #11 dengan durasi yang ditetapkan pada MOU.
                      </li>
                      <li>
                      	Mendapatkan tempat untuk mengadakan stand secara mandiri dalam rangka ajang promosi di Innovative Informatics Contest dan Web Design Competition.
                      </li>
                      <li>
                      	Spesial di Hackathon/ Seminar Nasional.
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                    <button className="bg-[#0A1828] hover:bg-transparent transition font-retroica px-4 py-1 rounded-md flex gap-1 items-center text-white">
                      Order
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="w-[20rem] h-[30rem] my-8 rounded-xl"
                style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
              >
                <div className="text-center flex gap-2 flex-col h-full items-center justify-start ">
                  <img
                    className="w-32"
                    src="public\images\starslash.svg"
                    style={{ width: "3rem" }}
                    alt="/"
                  />
                  <div className="font-louisgeorgecafe text-[#ffffff62] text-center">
                    Sponsor Raja
                  </div>
                  <div className="font-louisgeorgecafe text-[#fff] text-center font-bold">
                    Gold
                  </div>
                  <div className="font-retroica text-2xl text-[#ff69b4]">
                    <span className="text-sm font-louisgeorgecafe">Rp</span>4.000.000
                  </div>
                  <div className="font-louisgeorgecafe text-[#c5c5c5] overflow-x-auto text-left">
                    <ul className="list-inside list-disc">
                      <li>
                      	Penempatan logo pada website IFest #11 dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman link website atau akun sosial media pada website IFest #11.
                      </li>
                      <li>
                      	Pencantuman logo pada poster pada seluruh event IFest #11 dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada cocard dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada spanduk dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada backdrop panggung dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo di photobooth.
                      </li>
                      <li>
                      	Pencantuman logo pada after movie IFest #11.
                      </li>
                      <li>
                      	Pencantuman logo pada backdrop panggung dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada sertifikat pada seluruh event IFest #11 dengan ukuran setara dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Paid promote pada seluruh akun Instagram panitia IFest #11 dengan ketentuan yang ditetapkan pada MOU.
                      </li>
                      <li>
                      	Iklan adlibs oleh MC saat acara berlangsung pada semua event IFest #11 dengan materi iklan disediakan oleh pihak sponsor.
                      </li>
                      <li>
                      	Penayangan Iklan dalam bentuk video dan atau gambar saat break (istirahat) acara pada semua event IFest #11 dengan durasi durasi yang ditetapkan pada MOU.
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                    <button className="bg-[#0A1828] hover:bg-transparent transition font-retroica px-4 py-1 rounded-md flex gap-1 items-center text-white">
                      Order
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="w-[20rem] h-[30rem] my-8 rounded-xl"
                style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
              >
                <div className="text-center flex gap-2 flex-col h-full items-center justify-start ">
                  <img
                    className="w-32"
                    src="public\images\starslash.svg"
                    style={{ width: "3rem" }}
                    alt="/"
                  />
                  <div className="font-louisgeorgecafe text-[#ffffff62] text-center">
                    Sponsor Sultan
                  </div>
                  <div className="font-louisgeorgecafe text-[#fff] text-center font-bold">
                    Silver
                  </div>
                  <div className="font-retroica text-2xl text-[#ff69b4]">
                    <span className="text-sm font-louisgeorgecafe">Rp</span>2.500.000
                  </div>
                  <div className="font-louisgeorgecafe text-[#c5c5c5] overflow-x-auto text-left">
                    <ul className="list-inside list-disc">
                      <li>
                      	Penempatan logo pada website IFest #11 dengan ukuran 50% dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman link website atau akun sosial media pada website IFest #11.
                      </li>
                      <li>
                      	Pencantuman logo pada poster pada seluruh event IFest #11 dengan ukuran 50% dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada cocard dengan ukuran 50% dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada spanduk dengan ukuran 50% dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada backdrop panggung dengan ukuran 50% dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada after movie IFest #11.
                      </li>
                      <li>
                      	Pencantuman logo pada backdrop panggung dengan ukuran 50% dengan pihak penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada sertifikat pada seluruh event IFest #11 dengan ukuran 50% dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Iklan adlibs oleh MC saat acara berlangsung pada semua event IFest #11 dengan materi iklan disediakan oleh pihak sponsor.
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                    <button className="bg-[#0A1828] hover:bg-transparent transition font-retroica px-4 py-1 rounded-md flex gap-1 items-center text-white">
                      Order
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="w-[20rem] h-[30rem] my-8 rounded-xl"
                style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
              >
                <div className="text-center flex gap-2 flex-col h-full items-center justify-start ">
                  <img
                    className="w-32"
                    src="public\images\starslash.svg"
                    style={{ width: "3rem" }}
                    alt="/"
                  />
                  <div className="font-louisgeorgecafe text-[#ffffff62] text-center">
                    Sponsor Bos
                  </div>
                  <div className="font-louisgeorgecafe text-[#fff] text-center font-bold">
                    Bronze
                  </div>
                  <div className="font-retroica text-2xl text-[#ff69b4]">
                    <span className="text-sm font-louisgeorgecafe">Rp</span>1.500.000
                  </div>
                  <div className="font-louisgeorgecafe text-[#c5c5c5] overflow-x-auto text-left">
                    <ul className="list-inside list-disc">
                      <li>
                      	Penempatan logo pada website IFest #11 dengan ukuran 25% dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman link website atau akun sosial media pada website IFest #11.
                      </li>
                      <li>
                      	Pencantuman logo pada poster pada seluruh event IFest #11 dengan ukuran 25% dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada cocard dengan ukuran 25% dengan pihak penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada spanduk dengan ukuran 25% dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada backdrop panggung dengan ukuran 25% dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Pencantuman logo pada after movie IFest #11.
                      </li>
                      <li>
                      	Pencantuman logo pada backdrop panggung dengan ukuran 25% dengan pihak penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada sertifikat pada seluruh event IFest #11 dengan ukuran 25% dengan pihak penyelenggara.
                      </li>
                      <li>
                      	Promosi (penyebutan) nama pihak sponsor oleh MC saat acara berlangsung pada semua event IFest #11 dengan ketentuan yang ditetapkan pada MOU .
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                    <button className="bg-[#0A1828] hover:bg-transparent transition font-retroica px-4 py-1 rounded-md flex gap-1 items-center text-white">
                      Order
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <div className="hidden xl:flex w-full justify-center gap-8 pt-10">
            <div>
              <Card
                horizontal
                className="h-[40rem] w-80 flex justify-center !bg-[#0A1828] !border-[#5AA7C0] border-4 text-white hover:scale-110 transition ease-in duration-300 m-auto pt-0"
              >
                <div>
                  <img
                    className="w-52 block m-auto drop-shadow-lg"
                    src="public\images\starslash.svg"
                    style={{ width: "4rem" }}
                    alt="/"
                  />
                </div>
                <div className="font-retroica text-center text-2xl text-[#ffffff62]">
                  Sponsor Bos
                </div>
                <div className="font-retroica flex gap-3 text-[#ffffff] mx-auto">
                  <FaMoneyBillWave /> Rp1.500.000
                </div>
                <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                <div className="font-retroica text-[#c5c5c5] overflow-x-auto text-left h-40">
                  <ul className="list-inside list-disc">
                    <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                    <li>
                      Tautan situs web atau akun sosial media pada logo di
                      website.
                    </li>
                    <li>
                      Logo sponsor pada media publikasi untuk setiap event.
                    </li>
                    <li>
                      Logo sponsor pada e-certificate untuk setiap event.
                    </li>
                    <li>Logo sponsor pada after movie IFest#10.</li>
                    <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                    <li>
                      Tautan situs web atau akun sosial media pada logo di
                      website.
                    </li>
                    <li>
                      Logo sponsor pada media publikasi untuk setiap event.
                    </li>
                    <li>
                      Logo sponsor pada e-certificate untuk setiap event.
                    </li>
                    <li>Logo sponsor pada after movie IFest#10.</li>
                    <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                    <li>
                      Tautan situs web atau akun sosial media pada logo di
                      website.
                    </li>
                    <li>
                      Logo sponsor pada media publikasi untuk setiap event.
                    </li>
                    <li>
                      Logo sponsor pada e-certificate untuk setiap event.
                    </li>
                    <li>Logo sponsor pada after movie IFest#10.</li>
                    <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                    <li>
                      Tautan situs web atau akun sosial media pada logo di
                      website.
                    </li>
                    <li>
                      Logo sponsor pada media publikasi untuk setiap event.
                    </li>
                    <li>
                      Logo sponsor pada e-certificate untuk setiap event.
                    </li>
                    <li>Logo sponsor pada after movie IFest#10.</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                  <button className="bg-[#0A1828] px-4 py-2 rounded-md flex gap-1 items-center text-white w-full justify-center text-lg tracking-wide">
                    Order
                  </button>
                </div>
              </Card>
            </div>
            <div>
              <Card
                horizontal
                className="h-[40rem] w-80 flex justify-center !bg-[#0A1828] !border-[#5AA7C0] border-4 text-white hover:scale-110 transition ease-in duration-300 m-auto pt-0"
              >
                <div>
                  <img
                    className="w-52 block m-auto drop-shadow-lg"
                    src="public\images\starslash.svg"
                    style={{ width: "4rem" }}
                    alt="/"
                  />
                </div>
                <div className="font-retroica text-center text-2xl text-[#ffffff62]">
                  Sponsor Juragan
                </div>
                <div className="font-retroica flex gap-3 text-[#ffffff] mx-auto">
                  <FaMoneyBillWave /> Rp2.500.000
                </div>
                <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                <div className="font-retroica text-[#c5c5c5] overflow-x-auto text-left h-40">
                  <ul className="list-inside list-disc">
                    <li>Semua benefit dari Silver Sponsorship.</li>
                    <li>Iklan saat rehat/jeda acara berdurasi pendek.</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                  <button className="bg-[#0A1828] px-4 py-2 rounded-md flex gap-1 items-center text-white w-full justify-center text-lg tracking-wide">
                    Order
                  </button>
                </div>
              </Card>
            </div>
            <div>
              <Card
                horizontal
                className="h-[40rem] w-80 flex justify-center !bg-[#0A1828] !border-[#5AA7C0] border-4 text-white hover:scale-110 transition ease-in duration-300 m-auto pt-0"
              >
                <div>
                  <img
                    className="w-52 block m-auto drop-shadow-lg"
                    src="public\images\starslash.svg"
                    style={{ width: "4rem" }}
                    alt="/"
                  />
                </div>
                <div className="font-retroica text-center text-2xl text-[#ffffff62]">
                  Sponsor Sultan
                </div>
                <div className="font-retroica flex gap-3 text-[#ffffff] mx-auto">
                  <FaMoneyBillWave /> Rp4.000.000
                </div>
                <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                <div className="font-retroica text-[#c5c5c5] overflow-x-auto text-left h-40">
                  <ul className="list-inside list-disc">
                    <li>Semua benefit dari Gold Sponsorship.</li>
                    <li>Iklan adlibs oleh MC.</li>
                    <li>Paid promote oleh akun panitia.</li>
                    <li>Slot iklan khusus di website.</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                  <button className="bg-[#0A1828] px-4 py-2 rounded-md flex gap-1 items-center text-white w-full justify-center text-lg tracking-wide">
                    Order
                  </button>
                </div>
              </Card>
            </div>
            <div>
              <Card
                horizontal
                className="h-[40rem] w-80 flex justify-center !bg-[#0A1828] !border-[#5AA7C0] border-4 text-white hover:scale-110 transition ease-in duration-300 m-auto pt-0"
              >
                <div>
                  <img
                    className="w-52 block m-auto drop-shadow-lg"
                    src="public\images\starslash.svg"
                    style={{ width: "4rem" }}
                    alt="/"
                  />
                </div>
                <div className="font-retroica text-center text-2xl text-[#ffffff62]">
                  Sponsor Sultan
                </div>
                <div className="font-retroica flex gap-3 text-[#ffffff] mx-auto">
                  <FaMoneyBillWave /> Rp4.000.000
                </div>
                <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                <div className="font-retroica text-[#c5c5c5] overflow-x-auto text-left h-40">
                  <ul className="list-inside list-disc">
                    <li>Semua benefit dari Gold Sponsorship.</li>
                    <li>Iklan adlibs oleh MC.</li>
                    <li>Paid promote oleh akun panitia.</li>
                    <li>Slot iklan khusus di website.</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                  <button className="bg-[#0A1828] px-4 py-2 rounded-md flex gap-1 items-center text-white w-full justify-center text-lg tracking-wide">
                    Order
                  </button>
                </div>
              </Card>
            </div>
          </div> */}
        </div>

        <div className="bg-[#0A1828]">
          <div className="flex flex-col gap-2 justify-center items-center w-screen">
            <div className="font-retroica text-4xl text-white">
              Contact Us
            </div>
            <div className="font-retroica text-base text-white">
              Masih ada yang bingung? Yuk kontak kami.
            </div>
            <div className="h-64 w-64">
              <Carousel leftControl=" " rightControl=" " indicators={false}>
                <div className="text-white text-center flex justify-center">
                  <table className="table-cell border-separate border-[6px] border-[#926DAE] rounded-xl p-2">
                    <thead>
                      <tr>
                        <th className="border-b-[6px] border-[#926DAE]">
                          Sponsor
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>0882 1609 9529</div>
                          <button className="bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                            <FaWhatsapp />
                            Tessa
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>0895 6221 76067</div>
                          <button className="bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                            <FaWhatsapp />
                            Rinn
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        <Footer className="bg-[#0A1828] p-4" />
      </div>
    </Layout>
  );
};

export default Sponsor;
