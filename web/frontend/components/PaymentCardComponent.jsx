import react from "react";

import { Card, Layout } from "@shopify/polaris";

const PaymentCard = () => {

    const PaymentLogos = [
        "https://thumbs.dreamstime.com/b/google-pay-logo-editorial-illustrative-white-background-google-pay-logo-editorial-illustrative-white-background-eps-download-208329369.jpg",
        "https://www.samssocialmediaclub.com/wp-content/uploads/2023/06/paytm-logo-icon-free-vector.jpg",
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png",
        "https://pngimg.com/d/visa_PNG36.png",
        "https://logowik.com/content/uploads/images/787_mastercard.jpg"
    ];

    return (

        <div style={{ display: "flex", justifyContent: "space-around" }}>
            {PaymentLogos.map((logo) => (
                <img src={logo} alt="Payment Options" style={{ width: "100px", height: "100px", borderRadius: "10px", backgroundColor: "#ffffff", margin: "5px" }} />
            ))}
        </div>

    );
};

export default PaymentCard;