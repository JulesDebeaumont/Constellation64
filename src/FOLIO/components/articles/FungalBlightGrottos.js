import * as React from "react";

function FungalBlightGrottos(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Fungal Blight Grottos" />
                <Image path="FBG1.png" alts="Fungal Blight Grottos 1" />
                <Stats
                    engine="F3DZEX"
                    polys="3445"
                    rooms="3"
                    region="Wetlands"
                />
                <Image path="FBG2.png" alts="Fungal Blight Grottos 2" />
                <Image path="FBG3.png" alts="Fungal Blight Grottos 3" />

            </LayoutArticle>
        </>
    );
}

export default FungalBlightGrottos;