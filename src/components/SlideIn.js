import React, { useState } from 'react'
import { motion } from 'framer-motion'
import VisibilitySensor from 'react-visibility-sensor'

function SlideIn({ children }) {
    const [isVisible, setIsVisible] = useState(false)

    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
            setIsVisible(isVisible)
        }
    }
    return (
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </VisibilitySensor>
    )
}

export default SlideIn