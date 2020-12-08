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

class Home extends Component {
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
					<div className="product_slider">
						<Container fluid>
							<Swiper
								spaceBetween={20}
								navigation={obj}
								slidesPerView={10}
								onSlideChange={() => console.log('slide change')}
								onSwiper={(swiper) => console.log(swiper)}
								loop={true}
							>
								{productsArray.map((product, key) => {
									return <SwiperSlide key={key}><div className="col-md-12 col-sm-12 text-center mx-auto my-2">
										<a  className="float-left w-100">
											<img src={`/static/img/${product.img}`} alt="img" height="70" className="mx-auto" />
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
					<div className="cmm_banner">
						<div className="container d-flex justify-content-around align-items-center">
							<div className="row w-100">
								<span className="cmm_prod_img"><img src="/static/img/cmm_banner_img.png" width="auto" alt="img" /></span>
								<div className="col-md-7 col-sm-12">
									<span className="cmm_logo_icn"><img src="/static/img/cmm_vector.png" width="auto" alt="img" /></span>
									<h1 className="color_purple ml-5">Safe and <br className="d-md-block d-none" />Contactless Delivery <br className="d-md-block d-none" />of <span className="color_light_purple">Daily Essentials.</span></h1>
								</div>
								<div className="col-md-5 col-sm-12"></div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="cmm_products">
						<div className="container p-0">
							<div className="row">
								<div className="col-md-12">
									<h3 className="prod_title mb-4 pb-3">Top Offers</h3>
								</div>
								<Swiper
									spaceBetween={20}
									navigation={obj}
									slidesPerView={5}
									onSlideChange={() => console.log('slide change')}
									onSwiper={(swiper) => console.log(swiper)}
									loop={true}
								>
									<SwiperSlide className="text-left py-3 px-3 bg-transparent">
										<div className="product_box">
											<span className="badge badge-pill bg_yellow">20% Off</span>
											<img src="/static/img/prod1.png" width="122" height="122" alt="img" className="d-block mx-auto mb-4" />
											<p className="w-100">Cadbury Dairy Milk Fruit & Nut Chocolate Bar 36 g</p>
											<small className="w-100 float-left mt-2 mb-2">MFR: Mondelez India Foods Pvt Limited</small>
											<h5 className="product_price w-100">₹ 36.00 <br />
												<small>Save ₹ 6.00</small></h5>
											<a  className="add_cart"><img src="/static/img/cart_vector.png" width="28" height="23" alt="img" className="" /></a>
										</div>
									</SwiperSlide>
									<SwiperSlide className="text-left py-3 px-3 bg-transparent">
										<div className="product_box">
											<span className="badge badge-pill bg_yellow">20% Off</span>
											<img src="/static/img/prod2.png" width="122" height="122" alt="img" className="d-block mx-auto mb-4" />
											<p className="w-100">Bournvita 750 g</p>
											<small className="w-100 float-left mt-2 mb-2">MFR: Mondelez India Foods Pvt Limited</small>
											<h5 className="product_price w-100">₹ 272.00 <br />
												<small>Save ₹ 30.00</small></h5>
											<a  className="add_cart"><img src="/static/img/cart_vector.png" width="28" height="23" alt="img" className="" /></a>
										</div>
									</SwiperSlide>
									<SwiperSlide className="text-left py-3 px-3 bg-transparent">
										<div className="product_box">
											<span className="badge badge-pill bg_green">50% Off</span>
											<img src="/static/img/prod3.png" width="122" height="122" alt="img" className="d-block mx-auto mb-4" />
											<p className="w-100">Bingo Yumitos Salt Potato Chips 130g</p>
											<small className="w-100 float-left mt-2 mb-2">MFR: ITC Limited</small>
											<h5 className="product_price w-100">₹ 25.00 <br />
												<small>₹ 25.00</small></h5>
											<a  className="add_cart"><img src="/static/img/cart_vector.png" width="28" height="23" alt="img" className="" /></a>
										</div>
									</SwiperSlide>
									<SwiperSlide className="text-left py-3 px-3 bg-transparent">
										<div className="product_box">
											<span className="badge badge-pill bg_yellow">20% Off</span>
											<img src="/static/img/prod4.png" width="122" height="122" alt="img" className="d-block mx-auto mb-4" />
											<p className="w-100">Britannia Bourbon Original Cream Biscuits 150 g</p>
											<small className="w-100 float-left mt-2 mb-2">MFR: Britannia Industries Limited</small>
											<h5 className="product_price w-100">₹ 24.00 <br />
												<small>Save ₹ 6.00</small></h5>
											<a  className="add_cart"><img src="/static/img/cart_vector.png" width="28" height="23" alt="img" className="" /></a>
										</div>
									</SwiperSlide>
									<SwiperSlide className="text-left py-3 px-3 bg-transparent">
										<div className="product_box">
											<span className="badge badge-pill bg_yellow">20% Off</span>
											<img src="/static/img/prod5.png" width="122" height="122" alt="img" className="d-block mx-auto mb-4" />
											<p className="w-100">Amul Pure Ghee 1 L (Pouch)</p>
											<small className="w-100 float-left mt-2 mb-2">MFR: Britannia Industries Limited</small>
											<h5 className="product_price w-100">₹ 454.00 <br />
												<small>Save ₹ 36.00</small></h5>
											<a  className="add_cart"><img src="/static/img/cart_vector.png" width="28" height="23" alt="img" className="" /></a>
										</div>
									</SwiperSlide>
									<div className="swiper-button-next w-auto"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
									<div className="swiper-button-prev w-auto"><i className="fa fa-angle-left" aria-hidden="true"></i></div>
								</Swiper>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="two_column_layout">
						<div className="container p-0">
							<div className="row ">
								<div className="col-md-3 col-sm-12 h-100% sm-mb-3">
									<div className="rectangle_shape h-100% bg_blue2 sm-mb-3">
										<div className="row">
											<div className="col-xs-12 col-md-12">
												<h5 className="upto">Up to</h5>
												<h1 className="price">20%</h1>
												<h3 className="prod_name mb-3">Dals & Pulses</h3>
												<button className="btn btn_deal">View Deal</button>
											</div>
											<div className="col-xs-12 col-md-12 mt-3"><img src="/static/img/dal.png" alt="img" width="auto" height="200" /> </div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-12 h-100% sm-mb-3">
									<div className="rectangle_shape h-auto bg_green mb-3">
										<div className="row">
											<div className="col-xs-6 col-md-6">
												<h5 className="upto">Up to</h5>
												<h1 className="price">15%</h1>
												<h3 className="prod_name mb-3">Edible Oils</h3>
												<button className="btn btn_deal">View Deal</button>
											</div>
											<div className="col-xs-6 col-md-6"><img src="/static/img/p13.png" alt="img" width="auto" height="200" /> </div>
										</div>
									</div>

									<div className="rectangle_shape h-auto bg_pink">
										<div className="row">
											<div className="col-xs-6 col-md-6"><img src="/static/img/p12.png" alt="img" width="auto" height="200" /> </div>
											<div className="col-xs-6 col-md-6">
												<h5 className="upto">Up to</h5>
												<h1 className="price">30%</h1>
												<h3 className="prod_name mb-3 prod_name_small">Biscuits & Cookies</h3>
												<button className="btn btn_deal">View Deal</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-sm-12 h-100%">
									<div className="rectangle_shape h-100% bg_red">
										<div className="row">
											<div className="col-xs-12 col-md-12">
												<h5 className="upto">Up to</h5>
												<h1 className="price">55%</h1>
												<h3 className="prod_name mb-3">Aata, Flours & Sooji</h3>
												<button className="btn btn_deal">View Deal</button>
											</div>
											<div className="col-xs-12 col-md-12 mt-3"><img src="/static/img/atta.png" alt="img" width="auto" height="200" /> </div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="cmm_products">
						<div className="container p-0">
							<div className="row">
								<div className="col-md-12">
									<h3 className="prod_title mb-4 pb-3">Mega Offer on Daily Essentials</h3>
								</div>
								<Swiper
									spaceBetween={20}
									navigation={obj}
									slidesPerView={5}
									onSlideChange={() => console.log('slide change')}
									onSwiper={(swiper) => console.log(swiper)}
									loop={true}
								>
									<SwiperSlide className="text-left py-3 px-3 bg-transparent">
										<div className="product_box">
											<span className="badge badge-pill bg_yellow">20% Off</span>
											<img src="/static/img/prod1.png" width="122" height="122" alt="img" className="d-block mx-auto mb-4" />
											<p className="w-100">Cadbury Dairy Milk Fruit & Nut Chocolate Bar 36 g</p>
											<small className="w-100 float-left mt-2 mb-2">MFR: Mondelez India Foods Pvt Limited</small>
											<h5 className="product_price w-100">₹ 36.00 <br />
												<small>Save ₹ 6.00</small></h5>
											<a  className="add_cart"><img src="/static/img/cart_vector.png" width="28" height="23" alt="img" className="" /></a>
										</div>
									</SwiperSlide>
									<SwiperSlide className="text-left py-3 px-3 bg-transparent">
										<div className="product_box">
											<span className="badge badge-pill bg_yellow">20% Off</span>
											<img src="/static/img/prod2.png" width="122" height="122" alt="img" className="d-block mx-auto mb-4" />
											<p className="w-100">Bournvita 750 g</p>
											<small className="w-100 float-left mt-2 mb-2">MFR: Mondelez India Foods Pvt Limited</small>
											<h5 className="product_price w-100">₹ 272.00 <br />
												<small>Save ₹ 30.00</small></h5>
											<a  className="add_cart"><img src="/static/img/cart_vector.png" width="28" height="23" alt="img" className="" /></a>
										</div>
									</SwiperSlide>
									<SwiperSlide className="text-left py-3 px-3 bg-transparent">
										<div className="product_box">
											<span className="badge badge-pill bg_green">50% Off</span>
											<img src="/static/img/prod3.png" width="122" height="122" alt="img" className="d-block mx-auto mb-4" />
											<p className="w-100">Bingo Yumitos Salt Potato Chips 130g</p>
											<small className="w-100 float-left mt-2 mb-2">MFR: ITC Limited</small>
											<h5 className="product_price w-100">₹ 25.00 <br />
												<small>₹ 25.00</small></h5>
											<a  className="add_cart"><img src="/static/img/cart_vector.png" width="28" height="23" alt="img" className="" /></a>
										</div>
									</SwiperSlide>
									<SwiperSlide className="text-left py-3 px-3 bg-transparent">
										<div className="product_box">
											<span className="badge badge-pill bg_yellow">20% Off</span>
											<img src="/static/img/prod4.png" width="122" height="122" alt="img" className="d-block mx-auto mb-4" />
											<p className="w-100">Britannia Bourbon Original Cream Biscuits 150 g</p>
											<small className="w-100 float-left mt-2 mb-2">MFR: Britannia Industries Limited</small>
											<h5 className="product_price w-100">₹ 24.00 <br />
												<small>Save ₹ 6.00</small></h5>
											<a  className="add_cart"><img src="/static/img/cart_vector.png" width="28" height="23" alt="img" className="" /></a>
										</div>
									</SwiperSlide>
									<SwiperSlide className="text-left py-3 px-3 bg-transparent">
										<div className="product_box">
											<span className="badge badge-pill bg_yellow">20% Off</span>
											<img src="/static/img/prod5.png" width="122" height="122" alt="img" className="d-block mx-auto mb-4" />
											<p className="w-100">Amul Pure Ghee 1 L (Pouch)</p>
											<small className="w-100 float-left mt-2 mb-2">MFR: Britannia Industries Limited</small>
											<h5 className="product_price w-100">₹ 454.00 <br />
												<small>Save ₹ 36.00</small></h5>
											<a  className="add_cart"><img src="/static/img/cart_vector.png" width="28" height="23" alt="img" className="" /></a>
										</div>
									</SwiperSlide>
									<div className="swiper-button-next w-auto"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
									<div className="swiper-button-prev w-auto"><i className="fa fa-angle-left" aria-hidden="true"></i></div>
								</Swiper>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="banner_doorstep b2">
						<div className="container d-flex justify-content-around align-items-center">
							<div className="row w-100">
								<div className="col-md-7 col-sm-12">
									<h1 className="my-0 color_purple ml-5">Fast and <span className="color_light_purple">Covid-Safe</span>
										<br className="d-md-block d-none" />Delivery on your <br className="d-md-block d-none" /> Door Step!</h1>
								</div>
								<div className="col-md-5 col-sm-12"></div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="two_column_layout">
						<div className="container p-0">
							<div className="row ">
								<div className="col-md-3 col-sm-12 h-100% sm-mb-3">
									<div className="rectangle_shape h-100% bg_yellow sm-mb-3">
										<div className="row">
											<div className="col-xs-12 col-md-12">
												<h5 className="upto">Up to</h5>
												<h1 className="price">20%</h1>
												<h3 className="prod_name mb-3">Dals & Pulses</h3>
												<button className="btn btn_deal">View Deal</button>
											</div>
											<div className="col-xs-12 col-md-12 mt-3"><img src="/static/img/dal.png" alt="img" width="auto" height="200" /> </div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-sm-12 h-100% sm-mb-3">
									<div className="rectangle_shape h-auto bg_blue mb-3">
										<div className="row">
											<div className="col-xs-6 col-md-6">
												<h5 className="upto">Up to</h5>
												<h1 className="price">15%</h1>
												<h3 className="prod_name mb-3">Edible Oils</h3>
												<button className="btn btn_deal">View Deal</button>
											</div>
											<div className="col-xs-6 col-md-6"><img src="/static/img/p13.png" alt="img" width="auto" height="200" /> </div>
										</div>
									</div>

									<div className="rectangle_shape h-auto bg_orange">
										<div className="row">
											<div className="col-xs-6 col-md-6"><img src="/static/img/p12.png" alt="img" width="auto" height="200" /> </div>
											<div className="col-xs-6 col-md-6">
												<h5 className="upto">Up to</h5>
												<h1 className="price">30%</h1>
												<h3 className="prod_name mb-3 prod_name_small">Biscuits & Cookies</h3>
												<button className="btn btn_deal">View Deal</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-sm-12 h-100%">
									<div className="rectangle_shape h-100% bg_purple">
										<div className="row">
											<div className="col-xs-12 col-md-12">
												<h5 className="upto">Up to</h5>
												<h1 className="price">55%</h1>
												<h3 className="prod_name mb-3">Aata, Flours & Sooji</h3>
												<button className="btn btn_deal">View Deal</button>
											</div>
											<div className="col-xs-12 col-md-12 mt-3"><img src="/static/img/atta.png" alt="img" width="auto" height="200" /> </div>
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
								onSlideChange={() => console.log('slide change')}
								onSwiper={(swiper) => console.log(swiper)}
								loop={true}
							>
								{productsArray.map((product, key) => {
									return <SwiperSlide key={key}><div className="col-md-12 col-sm-12 text-center mx-auto my-2">
										<a  className="float-left w-100">
											<img src={`/static/img/${product.img}`} alt="img" height="70" className="mx-auto" />
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
			</div >
		);
	}
}

export default Home;