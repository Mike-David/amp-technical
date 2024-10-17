# AMP TECHNICAL PROJECT SUMMARY - MICHAEL ZBIKOWSKI 

I'll write a bit about my thought process here from the beggining steps, and how I checked whether my code worked. 

For simplicity, I used the Shopify CLI and grabbed the boilerplate DAWN theme from the Shopify Github. Since I have a partner account, I was able to use the Shopify CLI, to publish and push my changes easily- I didn't connect to Github since I dont have a business organization, but otherwise, if I did, I would have done a direction Github integration with the code base. I would use Shopify CLI commands to watch for changes. 

I then installed all my node packages using NPM, so webpack, typescript, Tailwind CSS (Since this is my prefered CSS library) and the Tailwind CSS plugins. After setting up my config, I also installed the necessary packages to minify and bundle my JavaScript and CSS files. some of these packages included the CssMinimizerPlugin and the MiniCssExtractPlugin. I then set my entry and output files. I crated an SRC folder where I would have my tailwind.css file and I imported the necessary code, along with my JavaScript and TypeScript. I had both Development and Production webpack commands, so when I was testing I would run npx webpack --mode development until I was ready to use it in production, which would then bundle, and minify my code. 

Once that was all configured and tested, I was able to include the correct Liquid variables. In the sections i created the amp-product.liquid file. I importanted a Tailwind Component and replaced the hardcoded values with the correct Shopify Liquid files. Once this was completed I tested this on a live preview - I was able to click the button and I tested with a product that was in stock and out of stock. I also thought about how we shouldn't hardcode values, so I set a global variable that contained price, title, product id and availability so I could set the product types in my index.ts file. Of course in a larger codebase, this would need to be refactored but for the sake of the technical, I believe this met the expectations outlined in the assingment. 

I think if I had another hour I would have included Jest for Unit Testing. 

Anyways, I hope this gives you a bit of insight into my thought process for this project, and is up to the standards at AMP. 

Regards,
Michael 
