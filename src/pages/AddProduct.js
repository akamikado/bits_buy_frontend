import React, { useState } from "react";
import { TextInput, Textarea, Button } from "@mantine/core";
import classes from "./AddProduct.module.css";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("xyz.com/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName,
          imageLink,
          productDescription,
          basePrice,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(`Error: ${responseData.message}`);
      }

      console.log("Product data successfully submitted:", responseData);
    } catch (error) {
      setErrorMessage(`Error: ${error.message}`);
      console.error("Error submitting product data:", error);
    }
  };

  return (
    <div className={classes["home-page-container"]}>
    <h1>Add Product</h1>
  <div className={classes["form-container"]}>
    <TextInput
      label="Product Name"
      type="text"
      required
      placeholder=""
      className={classes["text-input"]}
      value={productName}
      onChange={(event) => setProductName(event.currentTarget.value)}
    />

    <TextInput
      label="Image Link"
      type="text"
      
      placeholder=""
      className={classes["text-input"]}
      value={imageLink}
      onChange={(event) => setImageLink(event.currentTarget.value)}
    />

    <Textarea
      label="Product Description"
      
      placeholder=""
      className={classes["text-area"]}
      value={productDescription}
      onChange={(event) => setProductDescription(event.currentTarget.value)}
    />

    <TextInput
      label="Base Price($)"
      type="number"
      required
      placeholder=""
      className={classes["text-input"]}
      value={basePrice}
      onChange={(event) => setBasePrice(event.currentTarget.value)}
    />

    {errorMessage && (
      <p className={classes["error-message"]}>{errorMessage}</p>
    )}

    <Button
      variant="light"
      color="teal"
      size="lg"
      radius="xl"
      onClick={handleFormSubmission}
      className={classes["submit-button"]}
    >
      Submit
    </Button>
  </div>
</div>

  );
}

export default AddProduct;
