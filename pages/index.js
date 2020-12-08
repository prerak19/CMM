import React, { Component } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Container } from 'reactstrap';

SwiperCore.use([Navigation]);

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productsArray: [
				{ img: "p1.png" },
				{ img: "p2.png" },
				{ img: "p3.png" },
				{ img: "p4.png" },
				{ img: "p5.png" },
				{ img: "p6.png" },
				{ img: "p7.png" },
				{ img: "p8.png" },
				{ img: "p9.png" },
				{ img: "p10.png" },
				{ img: "p11.png" },
				{ img: "p12.png" },
			]
		}
	}

	render() {
		const { productsArray } = this.state;
		let obj = {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
		return (
			<div>
				<section className="header_spc">
					<div className="main_banner">
						<div className="container d-flex justify-content-around align-items-center">
							<div className="row">
								<div className="col-md-6 col-sm-12">
									<h1 className="mb-4">On an assortment of Rice, Snacks, Spices, Shampoos and more.</h1>
									<button className="btn btn_white mx-auto d-block">
										Shop Now
                        </button>
								</div>
								<div className="col-md-6 col-sm-12"></div>
							</div>
							<span className="percent_off"><a >25 % OFF</a></span>
						</div>
					</div>
				</section>
				<section>
					<div className="product_layout1">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-sm-12">
									<h3 className="prod_title mb-5 text-center">
										Snack Store
                        </h3>
								</div>
								<div className="col-md-4 col-sm-12 text-center">
									<a  className="prod_img_lg">
										<div className=" mx-auto mb-3">
											<img src="static/img/p1.png" width="auto" height="270" alt="img" />
										</div>
										<p className="prod_name">
											Chips & Namkeens
                            </p>
									</a>
								</div>
								<div className="col-md-4 col-sm-12 text-center">
									<a  className="prod_img_sm">
										<div className=" mx-auto mb-4">
											<img src="static/img/p26.png" width="auto" height="100" alt="img" />
										</div>
										<p className="prod_name">
											Biscuit & Cookies
                            </p>
									</a>
									<a  className="prod_img_sm">
										<div className=" mx-auto mb-4">
											<img src="static/img/p27.png" width="auto" height="100" alt="img" />
										</div>
										<p className="prod_name">
											Sauce, Spreads & Dips
                            </p>
									</a>
								</div>
								<div className="col-md-4 col-sm-12 text-center">
									<a  className="prod_img_sm">
										<div className=" mx-auto mb-4">
											<img src="static/img/p25.png" width="auto" height="100" alt="img" />
										</div>
										<p className="prod_name">
											Frozen Snacks
                            </p>
									</a>
									<a  className="prod_img_sm">
										<div className=" mx-auto mb-4">
											<img src="static/img/p29.png" width="auto" height="100" alt="img" />
										</div>
										<p className="prod_name">
											Soups, Noodles & Pastas
                            </p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="container mb-5 circle_offers">
						<div className="row">
							<div className="col-md-3 col-sm-6 col-6 col-xs-6 text-center">
								<a  className="prod_img_sm">
									<div className=" mx-auto mb-4">
										<img src="static/img/offer1.png" width="auto" height="170" alt="img" className="shadow rounded-circle" />
									</div>
								</a>
							</div>
							<div className="col-md-3 col-sm-6 col-6 col-xs-6 text-center">
								<a  className="prod_img_sm">
									<div className=" mx-auto mb-4">
										<img src="static/img/offer2.png" width="auto" height="170" alt="img" className="shadow rounded-circle" />
									</div>
								</a>
							</div>
							<div className="col-md-3 col-sm-6 col-6 col-xs-6 text-center">
								<a  className="prod_img_sm">
									<div className=" mx-auto mb-4">
										<img src="static/img/offer3.png" width="auto" height="170" alt="img" className="shadow rounded-circle" />
									</div>
								</a>
							</div>
							<div className="col-md-3 col-sm-6 col-6 col-xs-6 text-center">
								<a  className="prod_img_sm">
									<div className=" mx-auto mb-4">
										<img src="static/img/offer4.png" width="auto" height="170" alt="img" className="shadow rounded-circle" />
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="product_layout1">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-sm-12">
									<h3 className="prod_title mb-5 text-center">
										Drinks & Beverages
                        </h3>
								</div>
								<div className="col-md-3 col-sm-6 col-xs-6 col-6 text-center">
									<a  className="prod_img_sm">
										<div className=" mx-auto mb-4">
											<img src="static/img/p20.png" width="auto" height="100" alt="img" />
										</div>
										<p className="prod_name">
											Tea
                            </p>
									</a>
								</div>
								<div className="col-md-3 col-sm-6 col-xs-6 col-6 text-center">
									<a  className="prod_img_sm">
										<div className=" mx-auto mb-4">
											<img src="static/img/p21.png" width="auto" height="100" alt="img" />
										</div>
										<p className="prod_name">
											Coffee
                            </p>
									</a>
								</div>
								<div className="col-md-3 col-sm-6 col-xs-6 col-6 text-center">
									<a  className="prod_img_sm">
										<div className=" mx-auto mb-4">
											<img src="static/img/p22.png" width="auto" height="100" alt="img" />
										</div>
										<p className="prod_name">
											Juice & Cold Drinks
                            </p>
									</a>
								</div>
								<div className="col-md-3 col-sm-6 col-xs-6 col-6 text-center">
									<a  className="prod_img_sm">
										<div className=" mx-auto mb-4">
											<img src="static/img/p23.png" width="auto" height="100" alt="img" />
										</div>
										<p className="prod_name">
											Health Drinks
                            </p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="product_layout1">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-sm-12">
									<h3 className="prod_title mb-5 text-center">
										Beauty & Hygiene
                        </h3>
								</div>
								<div className="col-md-4 col-sm-12 text-center">
									<a  className="prod_img_lg">
										<div className=" mx-auto mb-3">
											<img src="static/img/p2.png" width="auto" height="270" alt="img" />
										</div>
										<p className="prod_name">
											Soaps & Shower Gels
                            </p>
									</a>
								</div>
								<div className="col-md-4 col-sm-12 text-center">
									<a  className="prod_img_sm">
										<div className=" mx-auto mb-4">
											<img src="static/img/p24.png" width="auto" height="100" alt="img" />
										</div>
										<p className="prod_name">
											Men’s Grooming
                            </p>
									</a>
									<a  className="prod_img_sm">
										<div className=" mx-auto mb-4">
											<img src="static/img/p28.png" width="auto" height="100" alt="img" />
										</div>
										<p className="prod_name">
											Oral Care
                            </p>
									</a>
								</div>
								<div className="col-md-4 col-sm-12 text-center">
									<a  className="prod_img_sm">
										<div className=" mx-auto mb-4">
											<img src="static/img/p25.png" width="auto" height="100" alt="img" />
										</div>
										<p className="prod_name">
											Chips & Namkeens
                            </p>
									</a>
									<a  className="prod_img_sm">
										<div className=" mx-auto mb-4">
											<img src="static/img/p30.png" width="auto" height="100" alt="img" />
										</div>
										<p className="prod_name">
											Feminine Hygiene
                            </p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="product_layout3">
						<div className="container">
							<div className="row">
								<div className="col-md-4 col-sm-12 text-center">
									<div className="mx-auto mb-4">
										<img src="static/img/img1.png" width="auto" height="140" alt="img" />
									</div>
									<p className="other_links">
										<b>Groceries & even more</b>
										<br />
										<small className="d-block mb-4">1919 Davis St. San Leandro</small>
										<button className="btn btn_outline_dark">Start your order</button>
									</p>
								</div>
								<div className="col-md-4 col-sm-12 text-center">
									<div className="mx-auto mb-4">
										<img src="static/img/img2.png" width="auto" height="140" alt="img" />
									</div>
									<p className="other_links">
										<b>Earn 5% cash back</b>
										<br />
										<small className="d-block mb-4">every day on walmart.com.</small>
										<button className="btn btn_outline_dark">Learn how</button>
									</p>
								</div>
								<div className="col-md-4 col-sm-12 text-center">
									<div className="mx-auto mb-4">
										<img src="static/img/logo.png" width="auto" height="140" alt="img" />
									</div>
									<p className="other_links">
										<b>Groceries & more</b>
										<br />
										<small className="d-block mb-4">with no per-delivery free</small>
										<button className="btn btn_outline_dark">Try it now</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="banner_doorstep">
						<div className="container d-flex justify-content-around align-items-center">
							<div className="row w-100">
								<div className="col-md-6 col-sm-12">
									<h1 className="my-0 color_purple ml-5">
										Fast Delivery on <br className="d-md-block d-none" />your <span className="color_light_purple">Door Step!</span></h1>
								</div>
								<div className="col-md-6 col-sm-12"></div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="two_column_layout">
						<div className="container p-0">
							<div className="row ">
								<div className="col-md-6 col-sm-12 sm-mb-3">
									<div className="rectangle_shape bg_blue">
										<div className="row d-flex align-items-center">
											<div className="col-xs-6 col-md-6">
												<h5 className="upto">Up to</h5>
												<h1 className="price">15%</h1>
												<h3 className="prod_name mb-3">Edible Oils</h3>
												<button className="btn btn_deal">View Deal</button>
											</div>
											<div className="col-xs-6 col-md-6"><img src="static/img/p13.png" alt="img" width="auto" height="200" /> </div>
										</div>

									</div>
								</div>
								<div className="col-md-6 col-sm-12 sm-mb-3">
									<div className="rectangle_shape bg_orange">
										<div className="row d-flex align-items-center">
											<div className="col-xs-6 col-md-6"><img src="static/img/p12.png" alt="img" width="auto" height="200" /> </div>
											<div className="col-xs-6 col-md-6">
												<h5 className="upto">Up to</h5>
												<h1 className="price">30%</h1>
												<h3 className="prod_name mb-3 prod_name_small">Biscuits & Cookies</h3>
												<button className="btn btn_deal">View Deal</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="header_spc">
					<div className="product_slider">
						<Container fluid>
							<Swiper
								spaceBetween={20}
								navigation={obj}
								slidesPerView={10}
								// onSlideChange={() => console.log('slide change')}
								// onSwiper={(swiper) => console.log(swiper)}
								loop={true}
							>
								{productsArray.map((product, key) => {
									return <SwiperSlide key={key}><div className="col-md-12 col-sm-12 text-center mx-auto my-2">
										<a  className="float-left w-100">
											<img src={`static/img/${product.img}`} alt="img" height="70" className="mx-auto" />
											<p className="prod_slide_title mt-2 mb-0">title</p>
										</a>
									</div></SwiperSlide>
								})}
								<div className="swiper-button-next w-auto"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
								<div className="swiper-button-prev w-auto"><i className="fa fa-angle-left" aria-hidden="true"></i></div>
							</Swiper>
						</Container>
					</div>
				</section>
				<section>
					<div className="disclaimer_section">
						<div className="container">
							<div className="row">
								<div className="col-md-12 mb-4">
									<p className="other_links mb-2">
										<b>Top Stories: Brand Directory</b>
									</p>
									<p className="mb-1"><small>MOST SEARCHED FOR ON FLIPKART:</small></p>
									<small className="d-block mb-3">
										<a >TV and Home Appliances Big Billion Days 2020</a> |
                            <a >Flipkart COVID-19 Insurance</a> |
                            <a >Big Billion Days Sale Store 2020</a> |
                            <a >Flipkart Help Centre</a> |
                            <a >Track OrdersManage Orders</a> |
                            <a >Return Orders</a> |
                            <a >Galanz AppliancesMade In India Toys</a> |
                            <a >Infrared Thermometer</a> |
                            <a >Flipkart Gift Cards Store</a> |
                            <a >MAX Fashion Store</a> |
                            <a >Super Fan ShowFake or Not Show</a> |
                            <a >Snapchat Spectacles</a> |
                            <a >SareesFlipkart Axis Bank Credit Card</a> |
                            <a >Hand Sanitizer</a> |
                            <a >Realme BandHuawei gt 2e Smart Watch</a> |
                            <a >5G Mobiles</a> |
                            <a >Flipkart Videos</a> |
                            <a >Flipkart Pay Later</a> |
                            <a >Flight BookingMi Air Purifier 2CiQOOO 3</a> |
                            <a >Studio Furniture</a> |
                            <a >Vaporizer</a> |
                            <a >NebulizersHand Wash</a> |
                            <a >Pollution Masks</a> |
                            <a >A.P.J Abdul Kalam Books</a> |
                            <a >Chetan Bhagat Books</a> |
                            <a >Amrita Pritam Books</a> |
                            <a >Huawei Band 4</a>
									</small>
									<p className="mb-1"><small>CAMERA</small></p>
									<small className="d-block mb-3">
										<a >GoPro Action Camera</a> |
                            <a >Nikon Camera</a> |
                            <a >Canon Camera</a> |
                            <a >Sony Camera</a> |
                            <a >Canon DSLR</a> |
                            <a >Nikon DSLR</a>
									</small>
								</div>
								<div className="col-md-12 mb-4">
									<p className="other_links mb-2">
										<b>CMM: The One-stop Shopping Destination</b>
									</p>
									<p className="mb-1">
										<small>
											E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.
														<br /><br />What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind. If you are wondering why you should shop from Flipkart when there are multiple options available to you, well, the below will answer your question.
												</small></p>
								</div>
								<div className="col-md-12 mb-4">
									<p className="other_links mb-2">
										<b>CMM Plus</b>
									</p>
									<p className="mb-1"><small>
										A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more!<br /><br />
                            What's more, you can even use the Flipkart supercoins for a number of exciting services, like:
                            An annual Zomato Gold membership
                            An annual Hotstar Premium membership
                            6 months Gaana plus subscription
                            Rupees 550 instant discount on flights on ixigo
                            Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.
                            </small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div >
		);
	}
}

export default Index;