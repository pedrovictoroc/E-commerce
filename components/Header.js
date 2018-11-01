import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import {Menu, Container, Image} from 'semantic-ui-react';

Router.onRouteChangeStart =(url) =>{
    NProgress.start()
}

Router.onRouteChangeComplete = (url)=>{
    NProgress.done()
}

Router.onRouteError = (url) =>{
    NProgress.done()
}

export default () => (
    <React.Fragment>
        <Head>
            <link rel="stylesheet" type="text/css" href="/static/nprogress.css"/>
        </Head>
    <Menu inverted fixed='top'>
        <Container text></Container>    
            <Link href='/' prefetch passHref>
                <Menu.Item as='a' header>
                    <Image
                        size="mini"
                        src="/static/rajadoufc.jpg"
                        style = {{marginRight:'1.5em'}}
                    />
                    Bazar de Pessoas
                </Menu.Item>
            </Link>

            <Link href='/cart' prefetch passHref>
                <Menu.Item position='right' as='a' header>
                    Cart
                </Menu.Item>
            </Link>
        <Container/>
    </Menu>
    </React.Fragment>
)