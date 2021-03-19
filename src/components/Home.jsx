import React from "react";
import MediaCard from "./Modal/Modal";
import { Grid } from "@material-ui/core";
import CheckoutCart from './cart';
const Home = () => {
  return (
    <div>
      <h1>Food Delivery</h1>
      <h3>Menu</h3>

      <Grid container spacing={9}>
        <Grid item xs={11}>
          <div className="badge badge-success float-right">Table no: 8</div>
          <Grid
            container
            spacing={4}
            style={{ maxHeight: 500, overflow: "auto" }}
          >
            <Grid item md={3}>
              <MediaCard
                itemName="Burger"
                imgUrl="https://storage.googleapis.com/alan-tutorial/web-sdk/burger.jpg"
              />
            </Grid>
            <Grid item md={3}>
              <MediaCard
                itemName="Taco"
                imgUrl="https://storage.googleapis.com/alan-tutorial/web-sdk/taco.jpg"
              />
            </Grid>
            <Grid item md={3}>
              <MediaCard
                itemName="PepperoniPizza"
                imgUrl="https://storage.googleapis.com/alan-tutorial/web-sdk/pepperoni.jpg"
              />
            </Grid>
            <Grid item md={3}>
              <MediaCard
                itemName="margherita"
                imgUrl="https://storage.googleapis.com/alan-tutorial/web-sdk/margherita.jpg"
              />
            </Grid>
            <Grid item md={3}>
              <MediaCard
                itemName="burrito"
                imgUrl="https://storage.googleapis.com/alan-tutorial/web-sdk/burrito.jpg"
              />
            </Grid>
            <Grid item md={3}>
              <MediaCard
                itemName="Apple pie"
                imgUrl="https://storage.googleapis.com/alan-tutorial/web-sdk/applepie.jpg"
              />
            </Grid>
            <Grid item md={3}>
              <MediaCard
                itemName="Hawaiian pizza"
                imgUrl="https://www.thespruceeats.com/thmb/fdAR7S3X3tL6iSAHk27WvfI1Bvo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hawaiian-pizza-4691857-hero-01-1a8f6764c70e4113bbf31bd1a73aca2e.jpg"
              />
            </Grid>
            <Grid item md={3}>
              <MediaCard
                itemName="Cheese pizza"
                imgUrl="https://www.cookwithkushi.com/wp-content/uploads/2018/05/IMG_2809_n.jpg"
              />
            </Grid>
            <Grid item md={3}>
              <MediaCard
                itemName="Cheese cake"
                imgUrl="https://preppykitchen.com/wp-content/uploads/2019/10/cheesecake-blog.jpg"
              />
            </Grid>
            <Grid item md={3}>
              <MediaCard
                itemName="Sandwich"
                imgUrl="https://static.toiimg.com/photo/79018582.cms"
              />
            </Grid>
            <Grid item md={3}>
              <MediaCard
                itemName="Orange juice"
                imgUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/glass-of-orange-juice-with-oranges-1589917191.jpg?crop=1.00xw:0.753xh;0,0.206xh&resize=1200:*"
              />
            </Grid>
            <Grid item md={3}>
              <MediaCard
                itemName="Tea"
                imgUrl="https://specials-images.forbesimg.com/imageserve/5f6c061ca71799093f55fd02/960x0.jpg?cropX1=0&cropX2=5029&cropY1=0&cropY2=3354"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <CheckoutCart/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
