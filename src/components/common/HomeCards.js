import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

export function HomeCards() {

    //FIXME: Change Image
    const cardData = [
        { title: '리그 일정', description: '다음리그일정을 확인 가능합니다.', image: 'https://t1.daumcdn.net/cfile/tistory/2349473D5644533605' },
        { title: '리그 기록', description: '이전에 리그 기록들을 확인 할 수 있습니다.', image: 'https://t1.daumcdn.net/cfile/tistory/2349473D5644533605' },
        { title: '10CB 소개글', description: '10CB의 역사를 알아보자 !!!', image: 'https://t1.daumcdn.net/cfile/tistory/2349473D5644533605' },
        { title: '심시티 갤러리', description: '심시티를 배워보자 !', image: 'https://t1.daumcdn.net/cfile/tistory/2349473D5644533605', href: 'https://shinminsung1108.github.io/StarCraftBook/' },
        { title: '티어표', description: '티어분포도 등 티어관련 데이터 확인가능', image: 'https://t1.daumcdn.net/cfile/tistory/2349473D5644533605' },
        { title: '인원현황', description: '가입 된 인원을 확인 할 수 있습니다.', image: 'https://t1.daumcdn.net/cfile/tistory/2349473D5644533605' },
      ];
    return (
        <>
            <div style={{ marginTop: 20, padding: 30 }}>
                <Grid container spacing={10} justifyContent="center">
                    {cardData.map(post => (
                        <Grid item key={post.title}>
                            <Card sx={{
                                width: 550,
                                '@media (max-width: 700px)': {
                                    maxWidth: "85vw",
                                },
                            }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="350"
                                        image={post.image}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {post.title}
                                        </Typography>
                                        <Typography component="p">{post.description}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href={post.href}>
                                        바로가기
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>

           
        </>
    );
}