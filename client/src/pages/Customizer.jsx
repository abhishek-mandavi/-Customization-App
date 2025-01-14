import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import config from '../config/config.js'
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants.js';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';

const Customizer = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
         <motion.div>
            <div>
                <div>
                    {EditorTabs.map((tab) => (
                        <Tab 
                         key={tab.name}
                         tab={tab}
                         //handleClick={() => setActiveEditorTab(tab.name)}
                       />
                    ))}
                </div>
            </div>
         </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer
