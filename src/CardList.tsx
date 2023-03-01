import * as React from "react";
import {Card} from "./Card";
import {CardData} from "./types";
import {BrowserRouter as Router, Route} from "react-router-dom";

interface ListProps {
    match: any;
    history: any;
}

const List = ({match, history}: ListProps) => (
    <ul className="card-list">
        {cardData.map((card: CardData) => (
            <Card
                key={card.id}
                isSelected={match.params.id === card.id}
                history={history}
                {...card}
            />
        ))}
    </ul>
);

export const CardList = () => (
// @ts-ignore
    <Router>
        <Route path={["/:id", "/"]} component={List}/>
    </Router>
);

const cardData: CardData[] = [
    // Photo by ivan Torres on Unsplash
    {
        id: "c",
        category: "Pizza",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E",
        imageUrl: 'https://mintpay-site.s3.ap-south-1.amazonaws.com/fitu.d88f3db0.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiAeMJT3jBE%2FLOAlAt2KYxjMpcA5hqcFmjWeVlG2x2zxpAIgLOWDTf1UFJe4PdkZsedm%2ByRAtAGeuYV6awA1eCPv5FUq%2FQIIXBADGgwzNzQ4NDA0MTIzMzYiDGuzvikbnb4%2FCUurXSraAq%2Fsz6svzmRHiT0LlfEmm8J%2ByICJH4fp0lkvfSEqExZopF1AcQKeEGmBLx8DCVbssI1PNdRrHwRaE93Em00y53cJzAg9U8FviMS1NS667Idr9xvgPZvS8180XMlOb8VtBDwYoqvhHS2n7%2FD0EOapiWPaCZQ33mx1w6KlbzT7UPzOl1UwjDzu0UUUVg2nM1ubVz%2BMJgkoREheEyIU50%2BtuEkCiv8Tk6NYBM5Np4%2Fd9qjlujQTvgSclWHKeyROTEkJUUQbYmormPlVeDDAl6gaIuCQNcY30dFQWZ655nxwa4EH3GuqFZxm4IpUK%2BOsgZDDdMdX6in0ZUL%2FiZdzGyJ%2BaKJAyQWSBKqzfgn67ENON7C5an5cBnSPZ8LZJxivdW%2BlHRTcBf1fWvU1TC3nt9qzWM7tkB2StoXwnMR8%2B1PAZcN04YCLaNeiwLdm87zOcGPi6XMkYu9GpYccNscw8JrynwY6tAL7L43dPdSCrnVtMH1F6ztO5kRuFR5GxDjaJEEx%2B0dRz0mBr0CuUCPcUSqr5uqLXDy%2FSFhOY72rNRys13YtsCPew76yYrV8hgfJsN6V1KNlT3Dgzia6dRa7V08zsSDOkxylFta%2F9qLVegYVbuJvCKR05qUXw6zp0vxZECWdg%2F3DfvoURTaB4eBHhcbLOfleltTUW4i%2F02bCdQe%2FAmCca1SPHvkcV3Tm%2FRAUoOtFIzEp3z%2FgU8tQVO7OgYQpecuv02JSCM40TpvH2RKl3jOh0sLXkN55NUOSnRytI5QulxKkgI0IcvEVEbdR9MaeHy%2BYo%2FYm4aOkESze%2BJXF5JByOUuVPCu2AX7neVh2SBF0AeJSHkcfBIEMPZR%2Bb1ZBzCB%2FAzYM%2FyZ9Y%2FXR76KxrWvaGRRxKQ4Jtg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230227T110236Z&X-Amz-SignedHeaders=host&X-Amz-Expires=660&X-Amz-Credential=ASIAVORR2ZCYMPTSCKGR%2F20230227%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=cc2ce39e35d2e326843ab00ff406aa07d2d5b8868edbeb4240f2945c625b7f85'

    },
    // Photo by Dennis Brendel on Unsplash
    {
        id: "f",
        category: "How to",
        title: "Arrange Your Apple Devices for the Gram",
        pointOfInterest: 120,
        backgroundColor: "#959684",
        imageUrl: 'https://mintpay-site.s3.ap-south-1.amazonaws.com/fitu.d88f3db0.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiAeMJT3jBE%2FLOAlAt2KYxjMpcA5hqcFmjWeVlG2x2zxpAIgLOWDTf1UFJe4PdkZsedm%2ByRAtAGeuYV6awA1eCPv5FUq%2FQIIXBADGgwzNzQ4NDA0MTIzMzYiDGuzvikbnb4%2FCUurXSraAq%2Fsz6svzmRHiT0LlfEmm8J%2ByICJH4fp0lkvfSEqExZopF1AcQKeEGmBLx8DCVbssI1PNdRrHwRaE93Em00y53cJzAg9U8FviMS1NS667Idr9xvgPZvS8180XMlOb8VtBDwYoqvhHS2n7%2FD0EOapiWPaCZQ33mx1w6KlbzT7UPzOl1UwjDzu0UUUVg2nM1ubVz%2BMJgkoREheEyIU50%2BtuEkCiv8Tk6NYBM5Np4%2Fd9qjlujQTvgSclWHKeyROTEkJUUQbYmormPlVeDDAl6gaIuCQNcY30dFQWZ655nxwa4EH3GuqFZxm4IpUK%2BOsgZDDdMdX6in0ZUL%2FiZdzGyJ%2BaKJAyQWSBKqzfgn67ENON7C5an5cBnSPZ8LZJxivdW%2BlHRTcBf1fWvU1TC3nt9qzWM7tkB2StoXwnMR8%2B1PAZcN04YCLaNeiwLdm87zOcGPi6XMkYu9GpYccNscw8JrynwY6tAL7L43dPdSCrnVtMH1F6ztO5kRuFR5GxDjaJEEx%2B0dRz0mBr0CuUCPcUSqr5uqLXDy%2FSFhOY72rNRys13YtsCPew76yYrV8hgfJsN6V1KNlT3Dgzia6dRa7V08zsSDOkxylFta%2F9qLVegYVbuJvCKR05qUXw6zp0vxZECWdg%2F3DfvoURTaB4eBHhcbLOfleltTUW4i%2F02bCdQe%2FAmCca1SPHvkcV3Tm%2FRAUoOtFIzEp3z%2FgU8tQVO7OgYQpecuv02JSCM40TpvH2RKl3jOh0sLXkN55NUOSnRytI5QulxKkgI0IcvEVEbdR9MaeHy%2BYo%2FYm4aOkESze%2BJXF5JByOUuVPCu2AX7neVh2SBF0AeJSHkcfBIEMPZR%2Bb1ZBzCB%2FAzYM%2FyZ9Y%2FXR76KxrWvaGRRxKQ4Jtg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230227T110236Z&X-Amz-SignedHeaders=host&X-Amz-Expires=660&X-Amz-Credential=ASIAVORR2ZCYMPTSCKGR%2F20230227%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=cc2ce39e35d2e326843ab00ff406aa07d2d5b8868edbeb4240f2945c625b7f85'
    },
    // Photo by Alessandra Caretto on Unsplash
    {
        id: "a",
        category: "Pedal Power",
        title: "Map Apps for the Superior Mode of Transport",
        pointOfInterest: 260,
        backgroundColor: "#5DBCD2",
        imageUrl: 'https://mintpay-site.s3.ap-south-1.amazonaws.com/fitu.d88f3db0.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiAeMJT3jBE%2FLOAlAt2KYxjMpcA5hqcFmjWeVlG2x2zxpAIgLOWDTf1UFJe4PdkZsedm%2ByRAtAGeuYV6awA1eCPv5FUq%2FQIIXBADGgwzNzQ4NDA0MTIzMzYiDGuzvikbnb4%2FCUurXSraAq%2Fsz6svzmRHiT0LlfEmm8J%2ByICJH4fp0lkvfSEqExZopF1AcQKeEGmBLx8DCVbssI1PNdRrHwRaE93Em00y53cJzAg9U8FviMS1NS667Idr9xvgPZvS8180XMlOb8VtBDwYoqvhHS2n7%2FD0EOapiWPaCZQ33mx1w6KlbzT7UPzOl1UwjDzu0UUUVg2nM1ubVz%2BMJgkoREheEyIU50%2BtuEkCiv8Tk6NYBM5Np4%2Fd9qjlujQTvgSclWHKeyROTEkJUUQbYmormPlVeDDAl6gaIuCQNcY30dFQWZ655nxwa4EH3GuqFZxm4IpUK%2BOsgZDDdMdX6in0ZUL%2FiZdzGyJ%2BaKJAyQWSBKqzfgn67ENON7C5an5cBnSPZ8LZJxivdW%2BlHRTcBf1fWvU1TC3nt9qzWM7tkB2StoXwnMR8%2B1PAZcN04YCLaNeiwLdm87zOcGPi6XMkYu9GpYccNscw8JrynwY6tAL7L43dPdSCrnVtMH1F6ztO5kRuFR5GxDjaJEEx%2B0dRz0mBr0CuUCPcUSqr5uqLXDy%2FSFhOY72rNRys13YtsCPew76yYrV8hgfJsN6V1KNlT3Dgzia6dRa7V08zsSDOkxylFta%2F9qLVegYVbuJvCKR05qUXw6zp0vxZECWdg%2F3DfvoURTaB4eBHhcbLOfleltTUW4i%2F02bCdQe%2FAmCca1SPHvkcV3Tm%2FRAUoOtFIzEp3z%2FgU8tQVO7OgYQpecuv02JSCM40TpvH2RKl3jOh0sLXkN55NUOSnRytI5QulxKkgI0IcvEVEbdR9MaeHy%2BYo%2FYm4aOkESze%2BJXF5JByOUuVPCu2AX7neVh2SBF0AeJSHkcfBIEMPZR%2Bb1ZBzCB%2FAzYM%2FyZ9Y%2FXR76KxrWvaGRRxKQ4Jtg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230227T110236Z&X-Amz-SignedHeaders=host&X-Amz-Expires=660&X-Amz-Credential=ASIAVORR2ZCYMPTSCKGR%2F20230227%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=cc2ce39e35d2e326843ab00ff406aa07d2d5b8868edbeb4240f2945c625b7f85'
    },
    // Photo by Taneli Lahtinen on Unsplash
    {
        id: "g",
        category: "Holidays",
        title: "Our Pick of Apps to Help You Escape From Apps",
        pointOfInterest: 200,
        backgroundColor: "#8F986D",
        imageUrl: 'https://mintpay-site.s3.ap-south-1.amazonaws.com/fitu.d88f3db0.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiAeMJT3jBE%2FLOAlAt2KYxjMpcA5hqcFmjWeVlG2x2zxpAIgLOWDTf1UFJe4PdkZsedm%2ByRAtAGeuYV6awA1eCPv5FUq%2FQIIXBADGgwzNzQ4NDA0MTIzMzYiDGuzvikbnb4%2FCUurXSraAq%2Fsz6svzmRHiT0LlfEmm8J%2ByICJH4fp0lkvfSEqExZopF1AcQKeEGmBLx8DCVbssI1PNdRrHwRaE93Em00y53cJzAg9U8FviMS1NS667Idr9xvgPZvS8180XMlOb8VtBDwYoqvhHS2n7%2FD0EOapiWPaCZQ33mx1w6KlbzT7UPzOl1UwjDzu0UUUVg2nM1ubVz%2BMJgkoREheEyIU50%2BtuEkCiv8Tk6NYBM5Np4%2Fd9qjlujQTvgSclWHKeyROTEkJUUQbYmormPlVeDDAl6gaIuCQNcY30dFQWZ655nxwa4EH3GuqFZxm4IpUK%2BOsgZDDdMdX6in0ZUL%2FiZdzGyJ%2BaKJAyQWSBKqzfgn67ENON7C5an5cBnSPZ8LZJxivdW%2BlHRTcBf1fWvU1TC3nt9qzWM7tkB2StoXwnMR8%2B1PAZcN04YCLaNeiwLdm87zOcGPi6XMkYu9GpYccNscw8JrynwY6tAL7L43dPdSCrnVtMH1F6ztO5kRuFR5GxDjaJEEx%2B0dRz0mBr0CuUCPcUSqr5uqLXDy%2FSFhOY72rNRys13YtsCPew76yYrV8hgfJsN6V1KNlT3Dgzia6dRa7V08zsSDOkxylFta%2F9qLVegYVbuJvCKR05qUXw6zp0vxZECWdg%2F3DfvoURTaB4eBHhcbLOfleltTUW4i%2F02bCdQe%2FAmCca1SPHvkcV3Tm%2FRAUoOtFIzEp3z%2FgU8tQVO7OgYQpecuv02JSCM40TpvH2RKl3jOh0sLXkN55NUOSnRytI5QulxKkgI0IcvEVEbdR9MaeHy%2BYo%2FYm4aOkESze%2BJXF5JByOUuVPCu2AX7neVh2SBF0AeJSHkcfBIEMPZR%2Bb1ZBzCB%2FAzYM%2FyZ9Y%2FXR76KxrWvaGRRxKQ4Jtg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230227T110236Z&X-Amz-SignedHeaders=host&X-Amz-Expires=660&X-Amz-Credential=ASIAVORR2ZCYMPTSCKGR%2F20230227%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=cc2ce39e35d2e326843ab00ff406aa07d2d5b8868edbeb4240f2945c625b7f85'
    },
    // Photo by Simone Hutsch on Unsplash
    // {
    //     id: "d",
    //     category: "Photography",
    //     title: "The Latest Ultra-Specific Photography Editing Apps",
    //     pointOfInterest: 150,
    //     backgroundColor: "#FA6779"
    // },
    // // Photo by Siora Photography on Unsplash
    // {
    //     id: "h",
    //     category: "They're all the same",
    //     title: "100 Cupcake Apps for the Cupcake Connoisseur",
    //     pointOfInterest: 60,
    //     backgroundColor: "#282F49"
    // },
    // // Photo by Yerlin Matu on Unsplash
    // {
    //     id: "e",
    //     category: "Cats",
    //     title: "Yes, They Are Sociopaths",
    //     pointOfInterest: 200,
    //     backgroundColor: "#AC7441"
    // },
    // // Photo by Ali Abdul Rahman on Unsplash
    // {
    //     id: "b",
    //     category: "Holidays",
    //     title: "Seriously the Only Escape is the Stratosphere",
    //     pointOfInterest: 260,
    //     backgroundColor: "#CC555B"
    // }
];
