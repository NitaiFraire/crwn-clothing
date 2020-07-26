import React from 'react';

/* ### regular scss ### */
// import './custom-button.styles.scss';

// const CustomButton = ({ 
    //     children,
    //     isGoogleSignIn, 
    //     inverted, 
    //     ...otherProps
    // }) => (
    //     <button 
    //         className={`${inverted ? 'inverted' : ''}
    //                     ${isGoogleSignIn ? 'google-sign-in' : ''}
    //                     custom-button`}
    //         {...otherProps}
    //     >
    //         {children}
    //     </button>
    // );
        
/* ### styled component ### */
import { CustomButtonContainer } from './custom-button.styles'; 

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;