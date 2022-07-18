import * as React from "react";

function MeanwhileInHyrule(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Image = React.lazy(() => import('../parts/Image'));
    const Description = React.lazy(() => import('../parts/Description'));

    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Meanwhile in Hyrule" />
                <Image path="Petou1.png" alts="Meanwhile in Hyrule 1" />
                <Description>
                    Made these two scenes for a Role Play Game with friends. Character models by <i>Nintendo</i>
                </Description>
                <Image path="Eery1.png" alts="Meanwhile in Hyrule 2" />

            </LayoutArticle>
        </>
    );
}

export default MeanwhileInHyrule;