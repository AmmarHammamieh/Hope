import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BackgroundOne from '../assets/images/home/sectionOne/backgroundOne.svg';
import Drawer from '../assets/images/home/drawer.svg';
import Logo from '../assets/images/home/logo.svg';
import firstSlide from "../assets/images/home/sectionOne/firstSlide.svg";
import secondSlide from "../assets/images/home/sectionOne/secondSlide.svg";
import thirdSlide from "../assets/images/home/sectionOne/thirdSlide.svg";
import WhySimple from "../assets/images/home/sectionTwo/WhySimple.svg";
import ScreenIcon from "../assets/images/home/sectionTwo/ScreenIcon.svg";
import ListIcon from "../assets/images/home/sectionTwo/ListIcon.svg";
import CardIcon from "../assets/images/home/sectionTwo/CardIcon.svg";
import ToolAdvertising from "../assets/images/home/sectionTwo/ToolAdvertising.svg";
import ShopIcon from "../assets/images/home/sectionTwo/ShopIcon.svg";
import CursorIcon from "../assets/images/home/sectionTwo/CursorIcon.svg";
import WhySimpleCover from "../assets/images/home/sectionTwo/WhySimpleCover.svg";
function Home() {
    const [drawer, setDrawer] = useState(false)

    const whySimpleList = [
        {
            img: ScreenIcon,
            title: "امتلك متجر بهويتك و بأقل التكاليف",
            desc: "مع بسيط تستطيع خلال دقائق إنشاء متجرك الخاص بأقل التكاليف والحصول على استضافة مجانية وتحديثات مستمرة ومتجددة وبدون أي عمولة على المبيعات "
        },
        {
            img: ListIcon,
            title: "سهولة إدراج المنتجات وإدارة المخزون",
            desc: "ستتمكن من إدارة منتجاتك مهما كان نوع هذه المنتجات سواءاً منتجات جاهزة أو حسب الطلب أو منتجات رقمية وغيرها بكل سهولة"
        },
        {
            img: CardIcon,
            title: "دعم جميع وسائل الدفع",
            desc: "في سلة نوفر لك جميع  وسائل الدفع بدءأ نت التحويل البنكي والدفع عند الاستلام والدفع  بالبطاقات الائتمانية (فيزا وماستر كارد) والدفع بواسطة آبل باي وكذلك باي  بال "
        },
        {
            img: ToolAdvertising,
            title: "أدوات تسويقية لزيادة مبيعاتك",
            desc: "حرصنا من تمكين التجار من التسويق بشكل قوي و بأدوات سهلة وبسيطة , حيث يمكنك عمل حملات تسويقية وإرسالها للعملاء   (فيزا وماستر كارد) والدفع بواسطة آبل باي وكذلك باي  بال "
        },
        {
            img: ShopIcon,
            title: "تقارير مفاصة لقياس أداء المتجر",
            desc: "من خلال التقارير ستتمكن من الحصول على جميع المعلومات  التي تحتاج إليها لمعرفة أداء المتجر واتخاذ أفضل القرارات "
        },
        {
            img: CursorIcon,
            title: "تصاميم احترافية",
            desc: "تصميم المتجر ومظهره هو مايكوّن أول انطباع لدى العميل عن مدى احترافية القائمين على المتجر ,لذلك وفرنا لكم تشكيلة من التصاميم عالية الاحترافية "
        },

    ]
    return (
        <div className=''>
            <div style={{ backgroundImage: `url(${BackgroundOne})` }} className=' flex flex-col lg:h-[100vh] bg-contain bg-no-repeat px-5 lg:px-16'>
                <div className='flex justify-between mt-3' >
                    <div className={`hidden lg:flex w-fit justify-center items-center  text-primary space-x-5 font-semibold`} >
                        {/* <a href='/' onClick={() => Signout()} className='m-3 cursor-pointer title'>تسجيل الخروج</a> */}
                        <Link to="/SignIn" className='cursor-pointer title'>تسجيل الدخول</Link>
                        <Link to="/Info" className='title'>تجربة المنصة</Link>
                        <Link to="/Blog" className='title'>المدونة</Link>
                        <Link to="/Packages" className='title'>الأسعار</Link>
                        <div className=' rounded-lg h-fit w-fit flex justify-center items-center '>
                            <Link to="/" className=' relative px-2 py-1 group overflow-hidden z-0 cursor-pointer title'>
                                <span className="absolute z-1 bottom-0 left-0  w-0 h-0 mb-0 transition-all duration-200 ease-out  transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-b-2 group-hover:border-l-2 border-red-600 opacity-90 "></span>
                                <span className="absolute z-1 top-0 left-0  w-0 h-0 mb-0 transition-all duration-700 ease-out  transform  translate-y-0 group-hover:w-full group-hover:h-full group-hover:border-t-2   border-red-600 opacity-90 "></span>
                                <span className="absolute z-1 top-0 right-0  w-0 h-0 mb-0 transition-all duration-700 ease-out  transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-r-2  border-red-600 opacity-90 "></span>
                                <span className='relative group-hover:text-danger text-2xl'>الرئيسية</span>
                            </Link>
                        </div>
                    </div>
                    <img id="drawerbtn" src={Drawer} className='lg:hidden text-white text-4xl mt-0 cursor-pointer w-10 h-20' />
                    <img src={Logo} className="w-28 h-14" />
                </div>
                <div className='flex flex-col justify-evenly  lg:flex-row h-full items-center'>
                    <Carousel infiniteLoop="true" showStatus={false} autoPlay="true" showIndicators={false} showArrows={false} showThumbs={false} interval={5000} className='w-3/4 lg:w-1/2'>
                        <div className=''>
                            <img src={firstSlide} className="" />
                        </div>
                        <div className=''>
                            <img src={secondSlide} className="" />
                        </div>
                        <div className=''>
                            <img src={thirdSlide} className="" />
                        </div>
                    </Carousel>
                    <div className=''>
                        <div className=' flex flex-col items-center text-center  lg:text-right lg:items-end lg:w-4/5 lg:ml-auto'>
                            <h1 className='w-full text-primary text-6xl lg:text-7xl  font-Somar-ExtraBold '> أنشئ متجرك الخاص <span className='text-danger font-Somar-Black'>مجاناً </span> و ابدأ البيع الأن</h1>

                            <p className='w-3/5 lg:text-end font-semibold mt-2 text-primary font-Somar-SemiBold text-xl'> امتلك متجر  احترافي بسهولة وسرعة وانطلق في عالم البيع الالكتروني</p>

                            <div className='flex justify-end h-[5rem] items-center mt-5'>
                                <Link to="/Info" className='relative mr-5 group overflow-hidden rounded-lg h-fit w-fit flex  z-0  justify-center items-center  border-2 border-primary hover:border-none'>
                                    <span class="absolute z-10 bottom-0 left-0  w-0 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-b-4 group-hover:border-l-4 border-red-600 opacity-90 "></span>
                                    <span class="absolute z-10 top-0 left-0  w-0 h-0 mb-0 transition-all duration-600 ease-out transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-t-4   border-red-600 opacity-90 "></span>
                                    <span class="absolute z-10 top-0 right-0  w-0 h-0 mb-0 transition-all duration-600 ease-out transform translate-y-0  group-hover:w-full group-hover:h-full group-hover:border-r-4  border-red-600 opacity-90 "></span>
                                    <a className='px-6 py-2'>
                                        <span className='relative group-hover:text-danger font-Somar-Bold text-xl text-primary'>تجربة المنصة</span>
                                    </a>
                                </Link>
                                <div className='flex justify-center items-center '>
                                    <Link to="/CreateStoreBody" className=' px-12 py-2 rounded-lg bg-primary text-white font-semibold cursor-pointer font-Somar-Bold text-xl'>أنشئ متجرك مجاناً </Link>
                                </div>
                                {/* <div className='flex justify-center items-center ml-2 '>
                                            <Link to="/DashBoard/store" className=' px-6 py-2 rounded-lg bg-primary text-white font-semibold cursor-pointer font-Somar-Bold text-xl'> لوحة التحكم</Link>
                                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* */}

            <div className='relative py-8 px-5 lg:px-16 '>
                <img src={WhySimpleCover} className='lg:hidden absolute top-0 right-0 object-center-top -z-10 object-cover sm:object-contain w-full h-full ' />
                <img src={WhySimple} className="m-auto w-1/2 sm:w-1/4" />
                <div dir='rtl' lang='ar' className='grid grid-cols-2 lg:grid-cols-3 gap-16 mt-16'>
                    {whySimpleList.map((item) => (
                        <div className='flex flex-col items-center'>
                            <img src={item.img} className="w-1/3 md:w-1/4 pb-2" />
                            <div className='flex flex-col items-center lg:mb-2 text-secondry'>
                                <h1 className='text-center text-xl lg:text-4xl  py-1 font-Somar-Bold'>{item.title}</h1>
                                <span className='text-center text-lg lg:text-2xl  font-Somar-Medium'>{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* */}
            <div className='flex flex-col justify-start mt-20'>
                <div style={{ backgroundImage: `url(${StoresCover})` }} className=' flex flex-col w-full min-h-[100vh] bg-cover bg-no-repeat bg-center  bg-fill'>
                    {/*  */}
                    <div className='w-fit h-full flex justify-center mr-5  pb-10'>
                        <div className='text-center flex flex-col justify-center items-end w-4/5 ml-5'>
                            <h1 className='w-full text-[#035AA7]  text-5xl font-bold  font-serif  '>متاجر على منصة بسيط</h1>

                            <div className='flex flex-col text-center items-center mb-1'>
                                <img id="TitleImg" src={Stores.Image[Index]} className="w-4/12 mb-5 mt-10  ml-28 " />
                                <div className='w-full ml-28 justify-center md: items-center  text-[#035AA7] flex '>
                                    <p id="Title" className='w-3/4  md:w-5/12 text-xl font-Somar-Regular '>{Stores.Paragraph[Index]}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-full h-full grid grid-cols-1'>
                        <div className='h-full w-full flex flex-col justify-center items-center'>
                            <div className='flex flex-col justify-center pb-28 w-3/4'>
                                <img src={BigScreen} className="w-8/12 md:w-6/12 md:ml-56 h-full ml-28 " />
                                <div className='flex justify-center ml-10 p-5 w-full h-full mt-10 pb-10 space-x-3 items-center'>
                                    <img src={LeftArrow} className=" cursor-pointer " />
                                    <a className=' text-[#FDB958] cursor-pointer'>1</a>
                                    <a className='px-3 py-1 rounded-full bg-[#FDB958] text-white cursor-pointer'>2</a>
                                    <a className=' text-[#FDB958] cursor-pointer '>3</a>
                                    <img src={RightArrow} className="ml-5 cursor-pointer " />
                                </div>
                                <div className='absolute flex justify-center items-center w-1/2 h-1/4'>
                                    <img id="ScreenImg" src={Stores.BackGround[Index]} className=" w-[83%] md:w-[61%]  ml-[28rem] mb-[22rem] md:ml-[34.7rem]  mr-56 mt-[12rem] md:mt-[11.6rem] " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home