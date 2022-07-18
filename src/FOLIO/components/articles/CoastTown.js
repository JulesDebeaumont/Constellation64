import * as React from "react";

function CoastTown(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Coast Town" />
                <Image path="CT5.png" alts="Coast Town 1" />
                <Stats
                    engine="F3DZEX"
                    polys="3697"
                    rooms="4"
                    region="The Whispering Sea"
                />
                <Image path="CT1.png" alts="Coast Town 2" />
                <Image path="CT2.png" alts="Coast Town 3" />
                <Image path="CT3.png" alts="Coast Town 4" />

            </LayoutArticle>
        </>
    );
}

export default CoastTown;