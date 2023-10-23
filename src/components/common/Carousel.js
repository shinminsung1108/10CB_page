import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

export function ImgCarousel() {

    const imageMap = [
        { img: "https://i.namu.wiki/i/XNoUhPIZ8EuY4Kn1YpCssmgZiNv7wK9JGeIqRzlFO6qRfk3G1i7fGYeer9zc36DfwtA8sjCkeli9AkH0sbkRHw.webp"},
        { img: "https://t1.daumcdn.net/cfile/tistory/2349473D5644533605"},
        { img: "https://p4.wallpaperbetter.com/wallpaper/890/849/174/starcraft-starcraft-ii-zerg-starcraft-hd-wallpaper-preview.jpg"},
    ]
    return (
        <>
            <Carousel interval={3000} height="50vh">
                {imageMap.map((item, idx) =>
                    <Paper key={idx}><img src={item.img} alt="이미지"  width= "100%" style={{ objectFit: "cover" }} /></Paper>
                )}
            </Carousel>
        </>
    );
}