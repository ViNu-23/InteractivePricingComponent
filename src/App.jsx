import "./style.css";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { useMediaQuery } from "react-responsive";


function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [value, setValue] = useState(0);
  const [review, setReview] = useState('10K');
  const [yearlyBilling, setYearlyBilling] = useState(false);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    setReview(calculateReview(newValue));
  };

  const calculateReview = (value) => {
    switch (value) {
      case 0:
        return "10K";
      case 1:
        return "50K";
      case 2:
        return "100K";
      case 3:
        return "500K";
      case 4:
        return "1M";
      default:
        return '';
    }
  };

  const calculatePrice = () => {
    switch (value) {
      case 0:
        return 8;
      case 1:
        return 12;
      case 2:
        return 16;
      case 3:
        return 24;
      case 4:
        return 36;
      default:
        return 0;
    }
  };

  const handleYearBillingChange = () => {
    setYearlyBilling(!yearlyBilling);
  };

  const getPrice = () => {
    const price = calculatePrice();
    const yearlyPrice = yearlyBilling ? price * 12 : price;
    const discountedPrice = yearlyBilling ? yearlyPrice * 0.75 : yearlyPrice;
    return discountedPrice;
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          background: "#f1f5fe",
          height: "50vh",
          width: "100vw",
          borderBottomLeftRadius: "100px",
          paddingTop: "5%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "1px solid #cfd8ef",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: isMobile?'0px':"15px",
            left: isMobile?'30%': "45%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "1px solid #cfd8ef",
          }}
        />

        <h2
          style={{
            fontWeight: "800",
            fontSize: isMobile?'30px':"40px",
            position: "relative",
            zIndex: "2",
            color: "#293356",
          }}
        >
          Simple, traffic-based pricing
        </h2>
        <span
          style={{
            fontWeight: 600,
            fontSize: isMobile?'16px':"20px",
            color: "#848ead",
            position: "relative",
            zIndex: "2",
          }}
        >
          Sign-up for our 30-day trial. No credit card required.
        </span>
      </div>
      <div
        style={{
          width: isMobile?'250px':"45vw",
          background: "#fff",
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "30px",
          boxShadow: "0px 20px 30px -5px rgba(127, 137, 185, 0.152073)",
          borderRadius: "1.5rem",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection:isMobile?'column':''
            }}
          >
            <span style={{ color: "#848ead", fontWeight: "600" }}>
              {review} PAGEVIEWS
            </span>

            <h2
              style={{
                color: "#848ead",
              }}
            >
              <span
                style={{
                  fontSize: "50px",
                  fontWeight: "800",
                  color: "#293356",
                }}
              >
                ${getPrice()}
              </span>
              <span style={{ fontSize: "18px", fontWeight: "500" }}>
                / month
              </span>
            </h2>
          </div>
          <div style={{ margin: "25px 0px",display:'flex',justifyContent:'center',alignItems:'center'}}>
            <input
              type="range"
              min="0"
              max="4"
              style={{ width: "80%", padding: isMobile?'0px':'10px 20px' }}
              className="custom-slider"
              value={value}
        onChange={handleChange}
            />
          </div>
          <div
            style={{
              margin: "30px 0px",
              color: "#848ead",
              fontSize: "14px",
              fontWeight: "600",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection:isMobile?'column':''
            }}
          >
            <div style={{display:'flex',margin:'10xp 0px'}}>
              <span style={{marginRight:'10px'}}>Monthly Billing</span>
              <div className="toggle-switch-container">
              <label className="switch">
          <input
            type="checkbox"
            onChange={handleYearBillingChange}
          />
          <span className="slider round"></span>
        </label>
                <span className="toggle-label"></span>
              </div>
            </div>
            <div>
              <span>Yearly Billing</span>
              <button className="dis__btn">-25% discount</button>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between",flexDirection:isMobile?'column':'' }}>
          <div>
            <ul
              style={{ listStyle: "none", fontSize: "14px", color: "#848ead" }}
            >
              <li>
                <TiTick size={15} className="tick_icon" />
                <span>Unlimited websites</span>
              </li>
              <li>
                {" "}
                <TiTick size={15} className="tick_icon" />
                <span>100% data ownership</span>
              </li>
              <li>
                {" "}
                <TiTick size={15} className="tick_icon" />
                <span>Email reports</span>
              </li>
            </ul>
          </div>
          <div style={{ display: "flex", alignItems: "center",justifyContent:'center' ,marginTop:'20px'}}>
            <button className="submit__btn">Start my trial</button>
          </div>
        </div>
      </div>
      <div
        style={{ background: "#f9faff", width: "100vw", height: isMobile?'60vh':"50vh" }}
      ></div>
    </>
  );
}

export default App;
