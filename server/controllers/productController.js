const Product = require('../models/productModel');
const cloudinary = require('../config/cloudinary');

const createProduct = async(req, res) => {
    try {
        const { name, price, description, category, brand, rating, numReviews, stock } = req.body

        let imageURL = req.body.imageURL || ''

        if(req.file) {
            const b64 = Buffer.from(req.file.buffer).toString("base64")
            const dataURI = `data:${req.file.mimetype};base64,${b64}`
            const result = await cloudinary.uploader.upload(dataURI, {
                resource_type: "image",
            })
            console.log('Cloudinary Upload Result:', result)
            imageURL = result.secure_url
        }

        if (!imageURL) {
            return res.status(400).json({ message: 'Please upload an image file using key "image" or provide imageURL' });
        }

        const createdProduct = await Product.create({ name, price, originalPrice, discount, description, imageURL, category, brand, gender, sizes, colors, badge, rating, numReviews, stock })
        res.status(201).json(createdProduct)
    } catch (error) {
        console.log(JSON.stringify(error));
        console.error('Error creating product:', error)
        res.status(500).json({ message: error.message, errorDetails: error })
    }
}

const getProducts = async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getProductById = async(req, res) => {
    try {
        const singleProduct = await Product.findById(req.params.id);
        if (singleProduct) {
            res.status(200).json(singleProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateProduct = async(req, res) => {
    try {
        const { name, price, originalPrice, discount, description, category, brand, gender, sizes, colors, badge, rating, numReviews, stock } = req.body;
        let singleProduct = await Product.findById(req.params.id);

        if (singleProduct) {
            singleProduct.name = name || singleProduct.name;
            singleProduct.price = price || singleProduct.price;
            if (originalPrice !== undefined) singleProduct.originalPrice = originalPrice;
            if (discount !== undefined) singleProduct.discount = discount;
            singleProduct.description = description || singleProduct.description;
            singleProduct.category = category || singleProduct.category;
            singleProduct.brand = brand || singleProduct.brand;
            if (gender) singleProduct.gender = gender;
            if (sizes) singleProduct.sizes = sizes;
            if (colors) singleProduct.colors = colors;
            if (badge !== undefined) singleProduct.badge = badge;
            if (rating !== undefined) singleProduct.rating = rating;
            if (numReviews !== undefined) singleProduct.numReviews = numReviews;
            if (stock !== undefined) singleProduct.stock = stock;

            if(req.file){
                const b64 = Buffer.from(req.file.buffer).toString("base64")
                const dataURI = `data:${req.file.mimetype};base64,${b64}`
                const result = await cloudinary.uploader.upload(dataURI, {
                    resource_type: "image",
                })
                singleProduct.imageURL = result.secure_url
            }

            const updatedProduct = await singleProduct.save();
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}   

const deleteProduct = async(req, res) => {
    try {
        const singleProduct = await Product.findById(req.params.id);
        if (singleProduct) {
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//for homepage
const homeProductsMeta = require('../data/homeProductsData');

const getHomePageData = async (req, res) => {
    try {
        const names = homeProductsMeta.map(p => p.name);
        const dbProducts = await Product.find({ name: { $in: names } }).lean();

        const productMap = new Map();
        dbProducts.forEach(p => {
            productMap.set(p.name, p);
            if (p.imageURL) productMap.set(p.imageURL, p);
        });

        const enrich = (item) => {
            const dbP = productMap.get(item.name) || productMap.get(item.imageURL);
            return {
                ...item,
                _id: dbP?._id || item._id,
                productId: dbP?._id || null,
                price: dbP?.price || item.price,
                originalPrice: dbP?.originalPrice || item.originalPrice,
                discount: dbP?.discount || item.discount,
                rating: dbP?.rating || item.rating,
                imageURL: dbP?.imageURL || item.imageURL,
                image: dbP?.imageURL || item.imageURL,
                name: dbP?.name || item.name,
                brand: dbP?.brand || item.brand,
                category: dbP?.category || item.category,
            };
        };

        // 1. Hero Banner
        const heroItems = homeProductsMeta.filter(p => p.sectionKey === 'heroBanner');
        const primaryHero = enrich(heroItems.find(p => p.sectionRole === 'bannerPrimary') || heroItems[0] || {});
        const secondaryHero = enrich(heroItems.find(p => p.sectionRole === 'bannerSecondary') || {});
        const bgHero = enrich(heroItems.find(p => p.sectionRole === 'bannerBackground') || {});

        const heroBanner = {
            title: primaryHero.sectionData?.title || "SUMMER SOIRÉE",
            subtitle: primaryHero.sectionData?.subtitle || "SHOPNOW FASHION",
            discountBadge: primaryHero.sectionData?.discountBadge || "UPTO 75% OFF",
            description: primaryHero.sectionData?.description || "Curated styles for every celebration & summer escape",
            link: primaryHero.sectionData?.link || "/search?category=Clothing",
            bannerImage: primaryHero.imageURL || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=80",
            secondaryImage: secondaryHero.imageURL || "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
            backgroundImage: bgHero.imageURL || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
            productId: primaryHero._id
        };

        // 2. Category Pills
        const categoryPills = homeProductsMeta
            .filter(p => p.sectionKey === 'categoryPills')
            .sort((a, b) => (a.pillOrder || 0) - (b.pillOrder || 0))
            .map((p, idx) => {
                const enriched = enrich(p);
                return {
                    id: enriched._id || idx + 1,
                    productId: enriched._id,
                    name: p.pillName || p.name,
                    image: enriched.imageURL,
                    link: p.link || `/search?category=${encodeURIComponent(p.category || p.pillName)}`
                };
            });

        // 3. Hot Categories
        const hotCategories = homeProductsMeta
            .filter(p => p.sectionKey === 'hotCategories')
            .map((p, idx) => {
                const enriched = enrich(p);
                return {
                    id: enriched._id || idx + 1,
                    productId: enriched._id,
                    title: p.sectionTitle || p.name,
                    offer: p.sectionOffer || `${p.discount}% off`,
                    image: enriched.imageURL,
                    bgColor: p.bgColor || "bg-amber-50/80",
                    accentColor: p.accentColor || "border-amber-200",
                    link: p.link || `/search?category=${encodeURIComponent(p.category)}`
                };
            });

        // 4. Festive Edit
        const festiveItems = homeProductsMeta
            .filter(p => p.sectionKey === 'festive')
            .map((p, idx) => {
                const enriched = enrich(p);
                return {
                    id: enriched._id || idx + 1,
                    productId: enriched._id,
                    title: p.festiveTitle || p.name,
                    image: enriched.imageURL,
                    link: p.link || `/search?category=${encodeURIComponent(p.category)}`
                };
            });

        const festive = {
            title: "Get Ready For Ganesh Chaturthi",
            subtitle: "Handpicked festive silhouettes and regal traditional attire",
            items: festiveItems
        };

        // 5. Hidden Gems
        const hiddenHeroItem = homeProductsMeta.find(p => p.sectionKey === 'hiddenGems' && p.isHero);
        const enrichedHiddenHero = hiddenHeroItem ? enrich(hiddenHeroItem) : null;
        const hiddenBrands = homeProductsMeta
            .filter(p => p.sectionKey === 'hiddenGems' && !p.isHero)
            .map((p, idx) => {
                const enriched = enrich(p);
                return {
                    id: enriched._id || idx + 1,
                    productId: enriched._id,
                    name: p.brandLabel || p.brand,
                    image: enriched.imageURL,
                    link: p.link || `/search?brand=${encodeURIComponent(p.brand)}`
                };
            });
            
            const hiddenGems = {
            hero: {
                title: enrichedHiddenHero?.sectionData?.title || "HIDDEN GEMS",
                subtitle: enrichedHiddenHero?.sectionData?.subtitle || "Niche, homegrown labels handpicked by Us",
                buttonText: enrichedHiddenHero?.sectionData?.buttonText || "Explore Hidden Gems",
                image: enrichedHiddenHero?.imageURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
                link: enrichedHiddenHero?.sectionData?.link || "/search?tag=hiddengems",
                productId: enrichedHiddenHero?._id
            },
            brands: hiddenBrands
        };

        // 6. Shoppable Feed
        const shoppableFeed = homeProductsMeta
            .filter(p => p.sectionKey === 'shoppableFeed')
            .map((p, idx) => {
                const enriched = enrich(p);
                return {
                    id: enriched._id || idx + 1,
                    productId: enriched._id,
                    creator: p.creator || {
                        name: "creator",
                        avatar: enriched.imageURL,
                        posts: "100",
                        followers: "100K",
                        following: "100"
                    },
                    image: enriched.imageURL,
                    likes: p.likes || "10K",
                    caption: p.caption || p.description,
                    link: p.link || `/product/${enriched._id}`
                };
            });

        // 7. In The Spotlight
        const spotlightBrands = homeProductsMeta
            .filter(p => p.sectionKey === 'spotlightBrands')
            .map((p, idx) => {
                const enriched = enrich(p);
                return {
                    id: enriched._id || idx + 1,
                    productId: enriched._id,
                    brand: p.brandLabel || p.brand,
                    logoText: p.logoText || p.brand,
                    subtitle: p.subtitle || p.description,
                    offer: p.offer || `${p.discount}% off`,
                    image: enriched.imageURL,
                    link: p.link || `/search?brand=${encodeURIComponent(p.brand)}`
                };
            });

        // 8. Style / Trend Picks
        const trendPicks = homeProductsMeta
            .filter(p => p.sectionKey === 'trendPicks')
            .map((p, idx) => {
                const enriched = enrich(p);
                return {
                    id: enriched._id || idx + 1,
                    productId: enriched._id,
                    title: p.trendTitle || p.name,
                    subtitle: p.trendSubtitle || p.description,
                    image: enriched.imageURL,
                    link: p.link || `/search?trend=${encodeURIComponent(p.trendTitle || p.name)}`
                };
            });

        res.status(200).json({
            heroBanner,
            categoryPills,
            hotCategories,
            festive,
            hiddenGems,
            shoppableFeed,
            spotlightBrands,
            trendPicks
        });
    } catch (error) {
        console.error('Error in getHomePageData:', error);
        res.status(500).json({ message: error.message });
    }
};


module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct, getHomePageData };

