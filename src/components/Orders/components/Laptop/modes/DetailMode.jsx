
import { useState, useEffect } from "react";
import NavigationSection from "../../../sharedComponents/navigationsComponents/NavigationSection";

import styles from "../../Laptop/LaptopStyles.module.css";

const DetailMode = ({ formData, onEditClick, onBackClick }) => {
    
  // console.log(`formData: ${JSON.stringify(formData)}`); 

  const navigationActions = ["edit", "back"];

  const options = [
    {
      text: "32GB DDR5 +  1TB SSD",
      value: 2099.99,
    },
    {
      text: "32GB DDR5 +  2TB SSD",
      value: 2199.99,
    },
    {
      text: "64GB DDR5 +  1TB SSD",
      value: 2199.99,
    },
    {
      text: "64GB DDR5 +  2TB SSD",
      value: 2299.99,
    },
    {
      text: "64GB DDR5 +  4TB SSD",
      value: 2499.99,
    },
  ];

  const [buttonActive, setButtonActive] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [selected, setSelected] = useState([options[0].text]);
  const [overed, setOvered] = useState(null);

  const manageOverButton = (idx) => {
    setOvered(options[idx].text);
  };
  const manageLeaveButton = () => {
    setOvered(null);
  };

  const manageButtonActive = (idx) => {

    console.log(`idx: ${idx}`)
    console.log(`options.length: ${options.length}`);

    
    const newActiveArray = [];
    for (let i = 0; i < options.length; i++) {
      console.log(`i: ${i}`);
      console.log(`i === idx: ${i === idx}`);
      newActiveArray[i] = i === idx ? true : false;
      console.log(`newActiveArray[${i}]: ${JSON.stringify(newActiveArray[i])}`);
    }
    // console.log(`newActiveArray: ${JSON.stringify(newActiveArray)}`);

    setButtonActive(newActiveArray);
  }

  useEffect(() => {
    buttonActive.map((button, idx) => {
      button === true && setSelected(options[idx].text);
    });
  }, [buttonActive]);

  function Caracteristics() {
    // console.log(`caracteristics:${JSON.stringify(formData.caracteristics)}`);
    return(
      <div className={styles.caracteristics}>
        {Object.keys(formData.caracteristics).map((key) => {
          // console.log(`${key}: ${formData.caracteristics[key]}`);
            return(
            <div key={key} className={styles.caracteristic}>
              <span className={styles.key}> {key}</span>{" "}
              <span className={styles.value}> {formData.caracteristics[key]}</span>
            </div>)
        })} 
      </div>
    )  
  }

  function AboutThisItem() {
    // console.log(`caracteristics:${JSON.stringify(formData.caracteristics)}`);
    return (
      <div className={styles.aboutThisItemContainer}>
        <div className={styles.sectionTitle}>About this item</div>
          <ul className={styles.aboutThisItem}>
            {formData.aboutThisItem.map((about, idx) => {
            // console.log(`${about}: ${formData.aboutThisItem[about]}`);
            return (
              <li key={idx} className={styles.about}> {about}</li>
            );
          })}
          </ul>
      </div>
    );  
  }

  function OptionButtons() {
    return (
      <div className={styles.optionsContainer}>
        <ul>
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => manageButtonActive(idx)}
              onMouseOver={() => manageOverButton(idx)}
              onMouseLeave={() => manageLeaveButton(idx)}
              className={buttonActive[idx] ? styles.active : undefined}
            >
              <div className={`${styles.container}`}>
                <div
                  className={`${styles.content} ${
                    buttonActive[idx] && styles.active
                  }`}
                >
                  <div className={styles.contentTop}>
                    <span>{option.text}</span>
                  </div>
                  <hr className={styles.divider}></hr>
                  <div className={styles.contentBottom}>
                    <span>$ </span>
                    <span> {option.value}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function decimals(number) {
    // console.log(`number: ${number}`);

    const numString = number.toString();
    const parts = numString.split(".");

    const decimalPart = parts.length > 1 ? parts[1] : "0";

    return  decimalPart
    
  }

  function integer(number) {
    // console.log(`number: ${number}`);

    const numString = number.toString();
    const parts = numString.split(".");

    const integerPart = parts[0];

    return  integerPart;
  }

  // useEffect(() => {
  //   console.log(`buttonActive: ${JSON.stringify(buttonActive)}`);
  // }, [buttonActive]);

  const iconsStore = [
    ["icon1.jpg", "image1.jpg"],
    ["icon2.jpg", "image2.jpg"],
    ["icon3.jpg", "image3.jpg"],
    ["icon4.jpg", "image4.jpg"],
    ["icon5.jpg", "image5.jpg"],
    ["icon6.jpg", "image6.jpg"],
  ];

  const [selectedImage, setSelectedImage] = useState(iconsStore[0][1]);
  const [selectedIcon, setSelectedIcon] = useState(0);

  const manageOverIcon = (idx) => {

    // console.log(`icon idx: ${JSON.stringify(idx)}`);
    setSelectedImage(iconsStore[idx][1]);
    setSelectedIcon(idx);

  };

  

  const Icons = () => {
    return [1, 2, 3, 4, 5, 6].map((number, idx) => (
      <div
        key={number}
        className={`${styles.icon} ${
          selectedIcon === idx ? styles.active : ""
        }`}
        onMouseOver={() => manageOverIcon(idx)}
        title={iconsStore[idx][0]}
      >
        <img src={"icons/" + iconsStore[idx][0]} alt={`icon${number}`} />
      </div>
    )); 
    
  }

  const Image = () => {
    return (
      <div className={styles.image} title={selectedImage}>
        <img src={"imgs/" + selectedImage} alt={`imgs/${selectedImage}`} />
      </div>
    );
  }

  return (
    <>
      <NavigationSection
        actions={navigationActions}
        onEditClick={onEditClick}
        onBackClick={onBackClick}
      />

      <div className={styles.itemSection}>
        <div className={styles.imagesSection}>
          <div className={styles.iconsSection}>
            <Icons />
          </div>
          <div className={styles.imageSection}>
            <Image />
          </div>
        </div>
        <div className={styles.detailsSection}>
          {/* <h2 className={styles.title}>{formData.name}</h2> */}
          <div className={styles.descriptionContainer}>
            {formData.description}
          </div>
          <div className={styles.visit}>Visit {formData.Brand} Store</div>
          <div className={styles.ratingsContainer}>
            <span className={styles.rate}>4.8</span>
            <span className={styles.stars}>XXXXX</span>
            <span className={styles.chevron}>&rsaquo;</span>
            <span className={styles.ratings}>12 ratings</span>
            <span className={styles.separator}>|</span>
            <span className={styles.search}>Search this page</span>
          </div>
          <div className={styles.priceContainer}>
            {/* <span className={styles.lable}> Price: </span>{" "} */}
            <span className={styles.sign}>$</span>{" "}
            <span className={styles.integer}>{integer(formData.price)}</span>
            <span className={styles.decimals}>{decimals(formData.price)}</span>
          </div>
          <div className={styles.returns}>
            <span className={styles.text}>FREE Returns</span>
            <span className={styles.chevron}>&rsaquo;</span>
          </div>
          <div className={styles.coupons}>
            <span className={styles.label}>Coupon:</span>
            <span className={styles.check}>
              <input type="checkbox" />
            </span>
            <span className={styles.text}>Apply 5% coupon</span>
            <span className={styles.shop}>Shop items </span>
            <span className={styles.separator}>|</span>
            <span className={styles.terms}>Terms</span>
          </div>
          <div className={styles.apply}>
            Apply now and get a $80 Amazon Gift Card upon approval of the Amazon
            Store Card, or see if you pre-qualify with no impact to your credit
            bureau score.
          </div>
          <div className={styles.Style}>
            Style:
            <span className={styles.text}>{overed ? overed : selected}</span>
          </div>
          <OptionButtons />
          <Caracteristics />
          <div className={styles.divider}></div>
          <AboutThisItem />
          <p>{formData.inStock ? "Available" : "Out of Stock"}</p>
        </div>
      </div>

    </>
  );
};
export default DetailMode;