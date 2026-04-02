// 'use client'
import React from 'react'
// import { useSearchParams } from "next/navigation";
import '../../public/css/animate.min.css'
import '../../public/css/feather.css'
import '../../public/css/lc_lightbox.css'
import '../../public/css/font-awesome.min.css'
import '../../public/css/magnific-popup.min.css'
import '../../public/css/bootstrap.min.css'
import '../../public/css/style.css'
const page = () => {
  // const searchParams = useSearchParams();
  // const pickupDate = searchParams.get("pickupDate") || "";
  // const returnDate = searchParams.get("returnDate") || "";
  // const pickupLocation = searchParams.get("pickupLocation") || "";

  //   const formatDate = (dateStr) => {
  //   if (!dateStr) return "";
  //   const [year, month, day] = dateStr.split("-");
  //   return `${day}.${month}.${year}`;
  // };

  // console.log(pickupDate, returnDate, pickupLocation);

  //   const iframeUrl = `https://rentsyst.com/settings/iframe-constructor/?token=ce0w13SfbpuhuRpJn1hJtQSZwb-LfLlH&id=9423&date_from=${formatDate(pickupDate)}&date_to=${formatDate(returnDate)}`;
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="css/owl.carousel.min.css"/>
      <link rel="stylesheet" type="text/css" href="css/swiper-bundle.min.css"/>
      <link rel="stylesheet" type="text/css" href="css/bootstrap-datetimepicker.min.css"/>
      <link rel="stylesheet" type="text/css" href="css/jquery.mCustomScrollbar.min.css"></link>
      <iframe style={{width: '100%', height: 900, border: 'none'}} 
        src="https://rentsyst.com/settings/iframe-constructor/?token=ce0w13SfbpuhuRpJn1hJtQSZwb-LfLlH&id=9423"
        >
        </iframe>
    </div>
  )
}

export default page


// "use client";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useRef } from "react";

// const Page = () => {
//   const searchParams = useSearchParams();
//   const pickupDate = searchParams.get("pickupDate") || "";
//   const returnDate = searchParams.get("returnDate") || "";
//   const iframeRef = useRef(null);

//   // Convert YYYY-MM-DD to Unix timestamp (seconds)
//   const toTimestamp = (dateStr) => {
//     if (!dateStr) return null;
//     return Math.floor(new Date(dateStr).getTime() / 1000);
//   };

//   // Convert YYYY-MM-DD to DD.MM.YYYY
//   const formatDate = (dateStr) => {
//     if (!dateStr) return "";
//     const [year, month, day] = dateStr.split("-");
//     return `${day}.${month}.${year}`;
//   };

//   const iframeUrl = `https://rentsyst.com/settings/iframe-constructor/?token=ce0w13SfbpuhuRpJn1hJtQSZwb-LfLlH&id=9423&pickup_date=${formatDate(pickupDate)}&return_date=${formatDate(returnDate)}`;

//   useEffect(() => {
//     const iframe = iframeRef.current;
//     if (!iframe) return;

//     const sendDates = () => {
//       const pickupTs = toTimestamp(pickupDate);
//       const returnTs = toTimestamp(returnDate);

//       // Try multiple message formats Rentsyst might accept
//       const messages = [
//         { pickup_date: formatDate(pickupDate), return_date: formatDate(returnDate) },
//         { date_from: formatDate(pickupDate), date_to: formatDate(returnDate) },
//         { pickup_date: pickupTs, return_date: returnTs },
//         { date_from: pickupTs, date_to: returnTs },
//       ];

//       messages.forEach((msg) => {
//         iframe.contentWindow?.postMessage(msg, "https://rentsyst.com");
//         iframe.contentWindow?.postMessage(JSON.stringify(msg), "https://rentsyst.com");
//       });
//     };

//     iframe.addEventListener("load", sendDates);
//     return () => iframe.removeEventListener("load", sendDates);
//   }, [pickupDate, returnDate]);

//   return (
//     <div>
//       <iframe
//         ref={iframeRef}
//         style={{ width: "100%", height: 900, border: "none" }}
//         src={iframeUrl}
//       />
//     </div>
//   );
// };

// export default Page;
