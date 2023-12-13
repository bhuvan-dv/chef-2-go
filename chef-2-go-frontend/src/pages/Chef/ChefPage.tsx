import React from 'react';
import './ChefPage.css'
import { Card, CardContent, Typography, CardMedia, Grid, Button } from '@mui/material';

interface Chef {
  id: number;
  name: string;
  speciality: string;
  recipes: string[];
  imageUrl: string;
}

interface TopChefsProps {
  chefs: Chef[];
}

const ChefPage: React.FC<TopChefsProps> = ({ chefs }) => {
  document.title = "Top Chefs";
  return (
    <div className="container mx-auto my-8">
      {/* Rectangular Full-Width Image Section */}
      <div className="relative">
        <img
          src="https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg" // Replace with your actual image URL
          alt="Full Width Image"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
          <h2 className="text-4xl font-bold mb-4">Explore our Top Chef pages</h2>
          <p className="text-xl">Discover talented chefs and their signature recipes.</p>
        </div>
      </div>

      <div id="first_container" className="content-container fr-view" /><div className="slider-container" style={{ height: "500px", width: "1680px" }} /><div className="slider-container-in vegas-container" style={{ height: "667px", width: "1680px" }}><div className="vegas-slide vegas-transition-fade vegas-transition-fade-in vegas-transition-fade-out" style={{ transition: "all 7000ms ease" }}><div className="vegas-slide-inner"
        style={{
          backgroundImage: 'url("/images/chef.webp")',
          backgroundColor: 'rgb(255, 255, 255)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      ></div></div>
        <div className="vegas-slide vegas-transition-fade vegas-transition-fade-in" style={{ transition: "all 7000ms ease" }}>
          <div className="vegas-slide-inner"
            style={{
              backgroundImage: 'url("/images/chef1.jpg")',
              backgroundColor: 'rgb(255, 255, 255)',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
          >
            <div className="vegas-wrapper" style={{ overflow: 'visible', padding: '0px' }} />
            <a className="previous hidden-xs" role="button" style={{ visibility: 'visible' }}></a>
            <a className="next hidden-xs" role="button" style={{ visibility: 'visible' }}></a>
          </div>

          <div className="row-fluid homepage_settings">

            <div className="clearfix"></div>
            <div className="col-md-12 search_box fpad img-rounded">
              <h2 className="fpad bold nomargin sm-text-center">
                Find Your Perfect Chef Today            </h2>
              <div className="clearfix"></div>
              <div className="form-group nomargin hidden-xs hidden-sm col-md-3">
                <label className="nomargin">
                  What do you need:
                </label>
              </div>
              <div className="form-group nomargin hidden-xs hidden-sm col-md-3 nolpad">
                <label className="nomargin">
                  Specializing in:
                </label>
              </div>
              <div className="form-group nomargin hidden-xs hidden-sm col-md-3 nolpad">
                <label className="nomargin">
                  More Options
                </label>
              </div>
              <div className="form-group nomargin hidden-xs hidden-sm col-md-3 nolpad">
                <label className="nomargin">
                  Search by location:
                </label>
              </div>
              <div className="clearfix"></div>
              <form className="fpad form-inline website-search" name="frm1" action="/search_results">
                <div className="form-group col-xs-12 col-md-3 nolpad sm-norpad">
                  <div className="input-group col-xs-12">
                    {/* <select placeholder="Select Category" name="sid" id="sid" className="infinite-chained form-control input-lg select2-preload" style={{ color: 'rgb(168, 168, 168)' }}>
                      <option value="">Select Category</option>
                      <option value="10">Business Partners</option>
                      <option value="2">Personal Chef</option>
                    </select> */}
                  </div>
                </div>
                <div className="form-group col-xs-12 col-md-3 nolpad sm-norpad">
                  <div className="input-group col-xs-12">
                    {/* <select placeholder="Select Sub-Category" name="tid" id="tid" data-next="ttid" className="infinite-chained form-control input-lg select2-preload" style={{ color: 'rgb(168, 168, 168)' }}>
                      <option value="">Select Sub-Category</option>
                    </select> */}
                  </div>
                </div>
                <div className="form-group col-xs-12 col-md-3 nolpad sm-norpad">
                  <div className="input-group col-xs-12">
                    {/* <select placeholder="More Options" name="ttid" id="ttid" className="infinite-chained form-control input-lg select2-preload" style={{ color: 'rgb(168, 168, 168)' }}>
                      <option value="">More Options</option>
                    </select> */}
                  </div>
                </div>
                <div className="form-group col-xs-12 col-md-3 nopad">
                  <div className="col-xs-12 nopad">
                    <span className="input_wrapper"><input type="text" className="googleSuggest googleLocation img-rounded form-control input-lg sm-center-block" name="location_value" id="location_google_maps_homepage" value="" placeholder="City or Post Code" /><span className="fill_location large"><i className="fa fa-crosshairs" title="Use Current Location" aria-hidden="true"></i></span></span>
                  </div>
                </div>
                <div className="form-group col-xs-12 col-md-12 nopad nomargin">
                  <button type="submit" className="btn btn-lg btn-block tmargin btn_home_search">Search Now</button>
                </div>
                <div className="clearfix"></div>
              </form>
              <div className="clearfix"></div>
            </div>

            <div className="clearfix"></div>
          </div>
          <div className="clearfix"></div>
        </div></div>




      {/* Top Chefs Section */}
      <h1 className="text-3xl font-bold mb-4 mt-8">Top Chefs and Their Recipes</h1>
      <Grid container spacing={3}>
        {chefs.map((chef) => (
          <Grid item xs={12} sm={6} md={4} key={chef.id}>
            <Card>
              <CardMedia
                component="img"
                alt={chef.name}
                height="200"
                image={chef.imageUrl}
                className="object-cover"
              />
              <CardContent>
                <Typography variant="h6">{chef.name}</Typography>
                <Typography color="textSecondary" gutterBottom>{chef.speciality}</Typography>
                <Typography variant="body2" component="p">
                  <strong>Recipes:</strong>
                  <ul>
                    {chef.recipes.map((recipe, index) => (
                      <li key={index}>{recipe}</li>
                    ))}
                  </ul>
                </Typography>
                {/* View Chef Button */}
                <Button variant="contained" color="primary" className="mt-4">
                  View Chef
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ChefPage;
