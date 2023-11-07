const domContainer = document.querySelector( "#root" );
const root = ReactDOM.createRoot( domContainer );

const CARS = [
    {
        id: 1,
        brand: "Audi",
        models: [
            {
                id: 1,
                name: "A1",
                collection: [
                    {
                        id: 1,
                        version: "Sportback",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    },
                    {
                        id: 2,
                        version: "Citycarver",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    }
                ]
            },
            {
                id: 2,
                name: "Q5",
                collection: [
                    {
                        id: 1,
                        version: "FY 2021",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Sportback",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    }
                ]
            },
            {
                id: 3,
                name: "TT",
                collection: [
                    {
                        id: 1,
                        version: "Coupe",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Roadster",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        brand: "BMW",
        models: [
            {
                id: 1,
                name: "8 series",
                collection: [
                    {
                        id: 1,
                        version: "G1X LCI",
                        year: 2022,
                        horsepower: 333,
                        engine: 2998
                    },
                    {
                        id: 2,
                        version: "G1X",
                        year: 2019,
                        horsepower: 340,
                        engine: 2998
                    }
                ]
            },
            {
                id: 2,
                name: "X6",
                collection: [
                    {
                        id: 1,
                        version: "G06 LCI",
                        year: 2023,
                        horsepower: 530,
                        engine: 4395
                    },
                    {
                        id: 2,
                        version: "G06",
                        year: 2020,
                        horsepower: 286,
                        engine: 2993
                    }
                ]
            }
        ]
    },
];


const TABLE = () => {
    return <React.Fragment>
        <table>
            <tbody> { CARS.map( (el, index) => <React.Fragment> <TrBrand key={ index } car={ el.brand }
                                                                         colorBrand="white"/>
                    { el.models.map( (item, index) => <tr><React.Fragment> <TrModel key={ index } model={ item.name }
                                                                                    colorModel="red"/>
                            <td> { item.collection.map( (el, index) => {
                                return <React.Fragment>
                                    <ListCarVersion key={ index } version={ el.version } year={ el.year }
                                                    horsepower={ el.horsepower } engine={ el.engine }/>
                                </React.Fragment>
                            } ) }</td>
                        </React.Fragment></tr>
                    )
                    }
                </React.Fragment>
            )
            }
            </tbody>
        </table>
    </React.Fragment>
}

const TrBrand = ({colorBrand, car}) => {
    const tdStyle = {color: colorBrand}
    return <tr>
        <td colSpan="2" style={ tdStyle }>{ car }</td>
    </tr>
}

const TrModel = (props) => {
    const trModelStyle = {backgroundColor: props.colorModel}
    return <td style={ trModelStyle }>{ props.model }</td>
}

const ListCarVersion = (props) => {
    return <ul>
        <li>Version : { props.version }</li>
        <li>year : { props.year }</li>
        <li>Horsepower : { props.horsepower }</li>
        <li>Engine : { props.engine }</li>
    </ul>
}


root.render(
    <React.Fragment>

        <TABLE/>

    </React.Fragment>
);

