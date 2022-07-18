import * as React from "react";

function FungalBlight(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Image = React.lazy(() => import('../parts/Image'));
    const Stats = React.lazy(() => import('../parts/Stats'));

    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Fungal Blight" />
                <Image path="FB1.png" alts="Fungal Blight 1" />
                <Stats
                    engine="F3DZEX"
                    polys="3258"
                    rooms="3"
                    region="Wetlands"
                />
                <Image path="FB2.png" alts="Fungal Blight 2" />
                <Image path="FB3.png" alts="Fungal Blight 3" />
                <Image path="FB4.png" alts="Fungal Blight 4" />
                <Image path="FB5.png" alts="Fungal Blight 5" />
                <Image path="FB6.png" alts="Fungal Blight 6" />

            </LayoutArticle>
        </>
    );
}

export default FungalBlight;