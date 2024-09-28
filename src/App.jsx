
import Accordian from './components/accordian/Accordian';
import TabWrapper from './components/curstomTabs/TabWrapper';
import ImageSlider from './components/imageSlider/ImageSlider';
import routes from './components/nestedMenu/data';
import NestedMenu from './components/nestedMenu/NestedMenu';
import RandomColor from './components/randomColor/RandomColor';
import RatingStar from './components/ratingStar/RatingStar';
import ScrollIndicator from './components/scrollIndicator/ScrollIndicator';
import ThemeSwitch from './components/themeSwitch/ThemeSwitch';

const App = () => {
  return (
    <div className=' w-full'>
      <div>
        {/* <h3 className=' text-center border underline'>Accordian</h3> */}
        {/* <Accordian></Accordian> */}

        {/* <div className=' mt-4 text-center mx-auto'>
          <RandomColor></RandomColor>
        </div> */}
        {/* <div className=' mt-4 text-center mx-auto'>
          <RatingStar numberOfStar={5}></RatingStar>
        </div> */}
        {/* <div className=' mt-4 text-center mx-auto'>
          <ImageSlider url={'https://picsum.photos/v2/list?page=3&limit=10'} ></ImageSlider>
        </div> */}
        {/* <div className=' mt-4 text-center mx-auto'>
          <NestedMenu menus={routes}></NestedMenu>
        </div> */}
        {/* <div className=' mt-4 text-center mx-auto'>
          <ThemeSwitch></ThemeSwitch>
        </div> */}
        {/* <div className=' mt-4 text-center mx-auto'>
          <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}></ScrollIndicator>
        </div> */}
        <div className=' mt-4 text-center mx-auto'>
          <TabWrapper></TabWrapper>
        </div>

      </div>
    </div>
  );
};

export default App;