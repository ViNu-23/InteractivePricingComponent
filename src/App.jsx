import "./style.css";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div
        style={{
          position: "relative", // Position relative for absolute positioning of circle
          lineHeight: "2.7rem",
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
            top: "15px",
            left: "45%",
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
            fontSize: "2rem",
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
            fontSize: "1.3rem",
            lineHeight: "2.3rem",
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
          width: "500px",
          background: "#fff",
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "40px",
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
            }}
          >
            <span style={{ color: "#848ead", fontWeight: "600" }}>
              1M PAGEVIEWS
            </span>

            <h2
              style={{
                color: "#848ead",
              }}
            >
              <span
                style={{
                  fontSize: "45px",
                  fontWeight: "800",
                  color: "#293356",
                }}
              >
                $36.00
              </span>{" "}
              <span style={{ fontSize: "18px", fontWeight: "500" }}>
                / month
              </span>
            </h2>
          </div>
          <div style={{ height: "auto", margin: "25px 0px"}}>
            <input
              type="range"
              min="0"
              max="4"
              style={{ width: "90%",padding:'10px 20px' }}
              className="custom-slider"
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
            }}
          >
            <div style={{display:'flex'}}>
              <span style={{marginRight:'10px'}}>Monthly Billing</span>
              <div className="toggle-switch-container">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={handleToggle}
                    checked={isToggled}
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <ul
              style={{ listStyle: "none", fontSize: "12px", color: "#848ead" }}
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <button className="submit__btn">Start my trial</button>
          </div>
        </div>
      </div>
      <div
        style={{ background: "#f9faff", width: "100vw", height: "50vh" }}
      ></div>
    </>
  );
}

export default App;
