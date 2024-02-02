import Link from "next/link";

export default function Menu() {
    return (
        <>
            <div className="main-menu">
                <div className="menu-action">
                    <span className="item menu-back">
                        <i className="las la-arrow-left" />
                    </span>
                    <span className="item menu-close">
                        <i className="las la-times" />
                    </span>
                </div>

                <ul>
                    <li className="is-mega-menu">
                        <Link href="/">Demos <span className="toggle-sub-menu"></span></Link>
                        <ul className="sub-menu">
                            <li>
                                <div className="mega-menu flex-content-c flex">
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Home Demo I</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/home/home-app-showcase">App Showcase</Link></li>
                                            <li><Link href="/home/home-shopify-app">Shopify App</Link></li>
                                            <li><Link href="/home/home-design-studio">Design Studio</Link></li>
                                            <li><Link href="/home/home-music-app">Music App</Link></li>
                                            <li><Link href="/home/home-hr-maganement">HR Software</Link></li>
                                            <li><Link href="/home/home-saas">Saas Subscription</Link></li>
                                            <li><Link href="/home/home-nft">Home NFT</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Home Demo II</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/home/home-coworking">Coworking</Link></li>
                                            <li><Link href="/home/home-video">Video Conferencing</Link></li>
                                            <li><Link href="/home/home-design-portfolio">Designer Portfolio</Link></li>
                                            <li><Link href="/home/home-dating">Dating App</Link></li>
                                            <li><Link href="/home/home-crypto">Crypto Wallet</Link></li>
                                            <li><Link href="/home/home-email">Email Tool</Link></li>
                                            <li><Link href="/home/home-web3">Home Web3</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Home Demo III</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/home/home-fintech">Fintech</Link></li>
                                            <li><Link href="/home/home-ecommerce-platform">Ecommerce Platform</Link></li>
                                            <li><Link href="/home/home-seo">SEO Agency</Link></li>
                                            <li><Link href="/home/home-pet">Pet App</Link></li>
                                            <li><Link href="/home/home-startup">Startup</Link></li>
                                            <li><Link href="/home/home-chat-service">Chat Tool Service</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Home Demo IV</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/home/home-ico">Crypto ICO</Link></li>
                                            <li><Link href="/home/home-vr">Seller Page - VR</Link></li>
                                            <li><Link href="/home/home-ecommerce-agency">Ecommerce Agency</Link></li>
                                            <li><Link href="/home/home-book">Seller Page - Book</Link></li>
                                            <li><Link href="/home/home-fitness">Fitness App</Link></li>
                                            <li><Link href="/home/home-webinar">Webinar</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="is-mega-menu">
                        <Link href="/">Pages <span className="toggle-sub-menu"></span></Link>
                        <ul className="sub-menu">
                            <li>
                                <div className="mega-menu flex-content-c flex">
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">About</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/about-studio">About Studio</Link></li>
                                            <li><Link href="/about-company">About Company</Link></li>
                                            <li><Link href="/about-me">About Me</Link></li>
                                            <li><Link href="/our-team">About Teams</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Services</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/services-01">Service 01</Link></li>
                                            <li><Link href="/services-02">Service 02</Link></li>
                                            <li><Link href="/services-03">Service 03</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Contact</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/contact-01">Contact 01</Link></li>
                                            <li><Link href="/contact-02">Contact 02</Link></li>
                                            <li><Link href="/contact-03">Contact 03</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Pricing</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/pricing-01">Pricing 01</Link></li>
                                            <li><Link href="/pricing-02">Pricing 02</Link></li>
                                            <li><Link href="/pricing-03">Pricing 03</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Utility</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/careers">Careers</Link></li>
                                            <li><Link href="/careers-detail">Job Detail</Link></li>
                                            <li><Link href="/sign-in">Login</Link></li>
                                            <li><Link href="/sign-up">Sign Up</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Misc</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/coming-soon">Coming Soon</Link></li>
                                            <li><Link href="/maintainance">Maintenance</Link></li>
                                            <li><Link href="/404">404 Page</Link></li>
                                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="is-mega-menu">
                        <Link href="/">Portfolio <span className="toggle-sub-menu"></span></Link>
                        <ul className="sub-menu">
                            <li>
                                <div className="mega-menu flex-content-c flex">
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Classic Style</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/portfolio/portfolio-classic-grid">Grid Layout</Link></li>
                                            <li><Link href="/portfolio/portfolio-classic-metro">Metro Layout</Link></li>
                                            <li><Link href="/portfolio/portfolio-classic-masonry">Masonry Layout</Link></li>
                                            <li><Link href="/portfolio/portfolio-classic-mosaic">Mosaic Layout</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Minimal Style</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/portfolio/portfolio-minimal-grid">Grid Layout</Link></li>
                                            <li><Link href="/portfolio/portfolio-minimal-metro">Metro Layout</Link></li>
                                            <li><Link href="/portfolio/portfolio-minimal-masonry">Masonry Layout</Link></li>
                                            <li><Link href="/portfolio/portfolio-minimal-mosaic">Mosaic Layout</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Modern Style</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/portfolio/portfolio-morden-grid">Grid Layout</Link></li>
                                            <li><Link href="/portfolio/portfolio-morden-metro">Metro Layout</Link></li>
                                            <li><Link href="/portfolio/portfolio-morden-masonry">Masonry Layout</Link></li>
                                            <li><Link href="/portfolio/portfolio-morden-mosaic">Mosaic Layout</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Single Portfolio</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/portfolio/portfolio-detail-01">Layout 01</Link></li>
                                            <li><Link href="/portfolio/portfolio-detail-02">Layout 02</Link></li>
                                            <li><Link href="/portfolio/portfolio-detail-03">Layout 03</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="is-mega-menu">
                        <Link href="/">Blog <span className="toggle-sub-menu"></span></Link>
                        <ul className="sub-menu">
                            <li>
                                <div className="mega-menu flex-content-c flex">
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Simple Style</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/blog/blog-simple-grid">Standard Layout</Link></li>
                                            <li><Link href="/blog/blog-simple-sidebar">Sidebar Layout</Link></li>
                                            <li><Link href="/blog/blog-simple-list">List Layout</Link></li>
                                            <li><Link href="/blog/blog-simple-grid">Grid Layout</Link></li>
                                            <li><Link href="/blog/blog-simple-masonry">Masonry Layout</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Card Style</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/blog/blog-card-standard">Standard Layout</Link></li>
                                            <li><Link href="/blog/blog-card-sidebar">Sidebar Layout</Link></li>
                                            <li><Link href="/blog/blog-card-grid">Grid Layout</Link></li>
                                            <li><Link href="/blog/blog-card-masonry">Masonry Layout</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Boxed Style</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/blog/blog-boxed-standard">Standard Layout</Link></li>
                                            <li><Link href="/blog/blog-boxed-list">List Layout</Link></li>
                                            <li><Link href="/blog/blog-boxed-grid">Grid Layout</Link></li>
                                            <li><Link href="/blog/blog-boxed-masonry">Masonry Layout</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">BG Style</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/blog/blog-bg-standard">Standard Layout</Link></li>
                                            <li><Link href="/blog/blog-bg-list">List Layout</Link></li>
                                            <li><Link href="/blog/blog-bg-grid">Grid Layout</Link></li>
                                            <li><Link href="/blog/blog-bg-masonry">Masonry Layout</Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-menu-item">
                                        <h6 className="mega-head">Single Posts</h6>
                                        <ul className="sub-menu">
                                            <li><Link href="/blog/blog-detail-01">Standard Post</Link></li>
                                            <li><Link href="/blog/blog-detail-02">Background Post</Link></li>
                                            <li><Link href="/blog/blog-detail-03">Featured Image Post</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="is-normal-menu">
                        <Link href="/">Shop <span className="toggle-sub-menu"></span></Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/shop/shop-fullwidth">Shop Layout</Link>
                                <ul className="sub-menu">
                                    <li><Link href="/shop/shop-fullwidth">Shop Fullwidth</Link></li>
                                    <li><Link href="/shop/shop-sidebar">Shop Sidebar</Link></li>
                                    <li><Link href="/shop/shop-detail">Shop Detail</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/shop/shop-fullwidth">Other</Link>
                                <ul className="sub-menu">
                                    <li><Link href="/shop/shop-cart">Cart</Link></li>
                                    <li><Link href="/shop/shop-checkout">Checkout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>

        </>
    )
}