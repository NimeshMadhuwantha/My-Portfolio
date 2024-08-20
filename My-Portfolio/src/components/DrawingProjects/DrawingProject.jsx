import React from 'react'
import './DrawingProject.css'
import MoonArt1 from '../../assets/Projects/MoonArt1.jpg';
import MoonArt2 from '../../assets/Projects/MoonArt2.jpg';
import WallpaperDesign1 from '../../assets/Projects/WallpaperDesign1.jpg';
import WallpaperDesign2 from '../../assets/Projects/WallpaperDesign2.jpg';
import HumanArt1 from '../../assets/Projects/HumanArt1.jpg';
import HumanArt2 from '../../assets/Projects/HumanArt2.jpg';
import DogDesign from '../../assets/Projects/DogDesign.jpg';
import ColourPencil1 from '../../assets/Projects/ColourPencil1.jpg';
import CharacterMouse from '../../assets/Projects/CharacterMouse.jpg';
import CharacterWomen from '../../assets/Projects/CharacterWomen.jpg';



const DrawingProject = () => {
  return (
    <div>
      <div className='Drawing_Main'>
            <div className='Drawing_Content'>
            <div className='Drawing_Cards'>
                <div className='Drawing_Card1'>
                  <div className='Drawing_Card1_Img'>
                    <img className='Drawing_MoonArt1' src={MoonArt1} alt="" />
                    <img className='Drawing_MoonArt1' src={MoonArt2} alt="" />
                    <img className='Drawing_DogDesign' src={DogDesign} alt="" />
                  </div>
                    <h1>Design Ideas</h1>
                    <h2>Hand Drawn Pencil Sketch</h2>
                </div>
                <div className='Drawing_Card2'>
                  <div className='Drawing_Card2_Img'>
                  <img className='Drawing_Wallpaper' src={WallpaperDesign2} alt="" />
                  <img className='Drawing_Wallpaper' src={WallpaperDesign1} alt="" />
                  </div>        
                    <h1>Hand Drawn Wallpapers</h1>
                    <h2>Hand Drawn Pencil Sketch</h2>
                </div>
                <div className='Drawing_Card3'>
                    <div className='Drawing_Card3_Img'>
                      <img className='Drawing_Character' src={CharacterWomen} alt="" />
                      <img className='Drawing_Character2' src={CharacterMouse} alt="" />
                    </div>
                    <h1>Character Design</h1>
                    <h2>Hand Drawn Pencil Sketch</h2>
                </div>
                <div className='Drawing_Card4'>
                  <div className='Drawing_Card4_Img'>
                  <img className='Drawing_HumanArt1' src={HumanArt2} alt="" />
                  <img className='Drawing_HumanArt2' src={HumanArt1} alt="" />
                  <img className='Drawing_ColorPencil' src={ColourPencil1} alt="" />
                  </div>
                  <h1>Drawing</h1>
                    <h2>Hand Drawn Pencil Sketch</h2>
                </div>
                <div className='Drawing_Card2'>
                
                </div>
                <div className='Drawing_Card2'>
                 
                </div>
                <div className='Drawing_Card2'>
                 
                </div>

            </div>
            
            
            </div>

        </div>
    </div>
  )
}

export default DrawingProject