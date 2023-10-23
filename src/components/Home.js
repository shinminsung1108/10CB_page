import { Navbar } from '../pages/Navbar';
import { ImgCarousel } from './common/Carousel';
import { HomeCards } from './common/HomeCards';

export function Home() {

    return (
        <>
            <Navbar />
            {/* 이미지 캐로셀 필요한지 여부 확인 디자인적으로 이상함 현재 */}
            {/* <ImgCarousel /> */}
            {/* <div style={{ marginTop: 10 }} /> */}
            <img

                src='https://cdn.discordapp.com/attachments/1000250817208647700/1165984509863407699/test.png?ex=6548d6b2&is=653661b2&hm=bb66a5b4af3c2f99f61ddb5a2d2c6fe214534df9bf8ed9aef57dab1bfa35047f&'
                alt='league'
                style={{ objectFit: "cover", width: "100%", height: "50%" }}
            />
            <HomeCards />
        </>
    );
}