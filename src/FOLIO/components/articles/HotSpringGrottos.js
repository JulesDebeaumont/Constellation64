import * as React from "react";

function HotSpringGrottos(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Hot Spring Grottos" />
                <Image path="HSV Grotto_IG.png" alts="Hot Spring Grottos 1" />
                <Stats
                    engine="F3DZEX"
                    polys="1258"
                    rooms="3"
                    region="Hot Spring Valley"
                />
                <Image path="HSV Grotto_IG2.png" alts="Hot Spring Grottos 2" />
                <Image path="HSV Grotto_IG3.png" alts="Hot Spring Grottos 3" />

            </LayoutArticle>
        </>
    );
}

export default HotSpringGrottos;