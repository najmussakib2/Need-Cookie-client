import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import ChefCard from "../../components/ChefCard/ChefCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ReactMarquee from "../../components/ReactMarquee/ReactMarquee";
import newsLatter from "../../assets/NewsletterIdeas24.gif";
import { TextInput } from "flowbite-react";
import { FaTelegramPlane } from "react-icons/fa";

const Home = () => {
  const [chefData, setChefData] = useState(null);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-site-nnsnajmussakib-gmailcom.vercel.app/all-chef")
      .then((response) => response.json())
      .then((data) => setChefData(data));
  }, []);

 

  if (!chefData) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      {/* Slider section */}
      <Slider></Slider>

      {/* List of chef section */}
      <div className="w-[95%] md:w-[80%] mx-auto space-y-8 my-12">
        <div className="text-start md:text-center space-y-4">
          <h2 className="text-amber-800 text-xl md:text-3xl font-extrabold">
            Uncover the Secrets of China's Culinary Masters:
            <br className="hidden md:block" />
            The Top Chinese Chefs You Need to Know
          </h2>
          <p className="md:w-[80%] mx-auto">
            Are you ready to discover the best Chinese chefs in the world? Look
            no further than our curated list of culinary masters! These talented
            chefs have dedicated their lives to perfecting the art of Chinese
            cuisine, and their skills and creativity will leave you amazed.
            Whether you're a foodie or a professional chef, this list is sure to
            whet your appetite and leave you hungry for more!
          </p>
        </div>
        <div className="md:grid md:grid-cols-3 gap-y-24 gap-x-5">
          {chefData &&
            chefData.map((cd) => (
              <ChefCard key={cd.id} chefData={cd}></ChefCard>
            ))}
        </div>
      </div>

     


      {/* extra tasks: */}
      

      {/* 1 */}
      
      <div className="bg-center  rounded my-10 mt-24 bg-no-repeat bg-[url('/src/assets/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.avif')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Meet the next generation of recipe!</h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">What makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe.</p>
              
          </div>
      </div>

       {/* Tof rated rood section */}
       <ReactMarquee></ReactMarquee>

      {/* 2 */}
      <div className="hero min-h-screen pt-10 bg-base-200 flex justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full items-center">
          <img src="https://images.unsplash.com/flagged/photo-1556742524-750f2ab99913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Feed Your Team!</h1>
            <p className="py-6">Treat your talented team to their favourite meals.<br/> Let them pick! Explore flexible corporate food delivery options and tasty employee perks.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* 3 */}
      
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-48 mt-10">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://assets.epicurious.com/photos/624d9590857fa7e509238b59/16:9/w_6785,h_3817,c_limit/RegionalChinese_HERO_033122_31320.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://www.errenskitchen.com/wp-content/uploads/2013/11/Chinese-Chicken-Broccoli-5.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://imagevars.gulfnews.com/2021/05/25/Thukpa_179a45a2837_original-ratio.jpg" alt=""/>
        </div>
    </div>

    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://www.seriouseats.com/thmb/rzNjTG9gMj4Dl5t6quw_IeFlmhU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__08__20160811-fast-food-recipes-roundup-07-f0cefd1607e14522a7c6e1586c414a67.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://thewoksoflife.com/wp-content/uploads/2019/06/chinese-steamed-egg-10.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" alt=""/>
        </div>
    </div>

    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://www.recipetineats.com/wp-content/uploads/2020/10/General-Tsao-Chicken_1.jpg?w=747&h=747&crop=1" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://dinnerthendessert.com/wp-content/uploads/2018/04/Sesame-Chicken-3.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Asian-Orange-Chicken-with-Green-Onions.png" alt=""/>
        </div>
    </div>

    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://www.sprinklesandsprouts.com/wp-content/uploads/2018/12/Takeout-Style-Happy-Family-Stir-Fry-SQ.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/singapore-noodles_with_prawns-f8f4113.jpg?quality=90&resize=500,454" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://gypsyplate.com/wp-content/uploads/2022/05/the-best-chinese-recipes_02.jpg" alt=""/>
        </div>
    </div>
</div>






{/* 4 */}

<section className="bg-white dark:bg-gray-900 flex flex-col lg:flex-row justify-center items-center mx-48 mt-20">
  <div className="hidden lg:flex md:flex">
      <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1327024799/vector/japanese-chef-smiling-and-holding-sushi-set.jpg?s=612x612&w=0&k=20&c=EJmJXJaR3hMUAT5Vc6QnOGXgNE4omtv2EcOQDX85A3Y=" alt=""/>
  </div>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a question about your order? Need help with some of your app features? Contact Help Centre via app menu.</p>
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>


      {/* Subscribe to My Newsletter section */}
      <div className="w-[95%] md:w-[80%] mx-auto md:grid md:grid-cols-3 md:gap-4 md:justify-center md:items-center space-y-8 mb-12">
        <div className="text-start md:col-span-2 space-y-2">
          <h2 className="text-amber-800 text-xl md:text-3xl font-extrabold">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-500">
            If you want to stay up-to-date with our latest recipes, joining our
            weekly newsletter is the perfect way to do it. By signing up, you'll
            receive exclusive access to new and exciting dishes that we're
            cooking up in the kitchen. Whether you're a seasoned home cook or
            just starting out, our newsletter is packed with tips, tricks, and
            mouth-watering recipes that are sure to inspire you. So why wait?
            Sign up today and start exploring all the delicious flavors that our
            culinary team has to offer!
          </p>
          <TextInput
            className="md:w-[50%]"
            id="email1"
            type="email"
            placeholder="name@company.com"
          />
          <button className="flex gap-2 text-white border border-orange-800 bg-orange-800 hover:bg-blue-600 font-medium rounded-md text-sm text-center px-4 py-2">
            <span>Submit</span>
            <FaTelegramPlane className="mt-1"></FaTelegramPlane>
          </button>
        </div>
        <div>
          <img className="h-96" src={newsLatter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
