import {useState, useRef} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Swiper from 'react-native-swiper'
import Slide1 from '@/assets/images/screens/on-boarding-1.png';
import Slide2 from '@/assets/images/screens/on-boarding-2.jpg';
import Slide3 from '@/assets/images/screens/on-boarding-3.jpg';
import SlideItem from './slideItem';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {},
    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        height: 20,
        left: 10,
        right: 10,
        padding: 10,
        zIndex: 1,
    },
    dotStyle: {
        width: '33.3%',
        height: 3
    },
    activeDotStyle: {
        width: '33.3%',
        height: 3
    },
    dotColor: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)'
    },
    activeDotColor: {
        backgroundColor: 'rgba(255, 255, 255, 1)'
    }
})

const items = [
    {
        title: 'Mirësevini në HaniPini Delivery App',
        content: 'Bëhu pjesë e ekipit tonë. Fito sipas kushteve tua dhe nis rrugëtimin drejt suksesit.',
        image: Slide1
    }, {
        title: 'Fito, Mëso dhe Rritu',
        content: 'Kthe çdo shpërndarje në mundësi. Fillo të fitosh sot dhe ndërto aftësi për nesër.',
        image: Slide2
    }, {
        title: 'Rrugëtimi Yt Fillon Këtu',
        content: 'Orar fleksibil dhe pagesë e mirë. Drejto karrierën tënde drejt suksesit me ne.',
        image: Slide3
    }
]
export default function Slider() {
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const swiperRef = useRef<Swiper>(null);
    const goToSlide = (index: number) => {
        if (index >= items.length) {
            index = 0
        }

        if (swiperRef.current) {
            swiperRef.current.scrollTo(index + 1);
        }
    };
    return (
        <View style={styles.main}>
            <Swiper
                ref={swiperRef}
                paginationStyle={styles.paginationStyle}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.dotStyle}
                style={styles.wrapper}
                index={0}
                dotColor={styles.dotColor.backgroundColor}
                activeDotColor={styles.activeDotColor.backgroundColor}
                showsButtons={false}>
                {items.map((item, index) =>
                    <SlideItem key={index} index={index} nextSlide={goToSlide} title={item.title}
                               content={item.content} image={item.image}/>)}
            </Swiper>
        </View>
    );
}
