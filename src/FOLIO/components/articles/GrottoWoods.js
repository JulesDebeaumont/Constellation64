import * as React from "react";

function GrottoWoods(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const Description = React.lazy(() => import('../parts/Description'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Grotto Woods" />
                <Image path="GW0.png" alts="Grotto Woods 1" />
                <Stats
                    engine="Eevee"
                    polys="814"
                    rooms="1"
                    region="Lost Woods"
                />
                <Description>
                    Originaly made this for <i>Link's Awakening 64</i>
                </Description>
                <Image path="GW1.png" alts="Grotto Woods 1" />


            </LayoutArticle>
        </>
    );
}

export default GrottoWoods;