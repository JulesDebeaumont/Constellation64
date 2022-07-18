function Stats(props) {
    const {region, engine, polys, rooms} = props
    return (
        <>
            <div className="">
                <div className="content">
                    <ul>
                        { region !== null && <li>Region : <i>{region}</i></li>}
                        { engine !== null && <li>Engine : <i>{engine}</i></li>}
                        { polys !== null && <li>Poly count : <i>{polys}</i></li>}
                        { rooms !== null && <li>Room count : <i>{rooms}</i></li>}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Stats;
