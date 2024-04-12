import React from 'react';
export interface LoadingProps {
  message?: string;
  imageUrl?: any;
  style?:any
}

export const Loading: React.FC<LoadingProps> = ({ message = 'Loading...', imageUrl, style={background:'red',width:'30px',height:'30px'} }) => {
  console.log(imageUrl)
  return <>
      <div className="loading-container">
        
         {imageUrl== undefined || null ?<div className="loading-image"
         style={style}/>:<img className="loading-image" src={imageUrl} alt="Loading..." /> }
           
      </div>
      </>
    
};

// CSS styles for the loading page
const loadingStyles = `



.Blink{
  
  border-bottom: 2px solid #333;
}

.loading-image {
  animation: blink 2s infinite;
}

.loading-container {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  position: relative;
}

.loading-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(45deg) rotateY(45deg);
  animation: blink 2s infinite, circle 7s infinite linear;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}



@keyframes blink {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes circle {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}


`;

// Add the styles to the document head
const styleElement = document.createElement('style');
styleElement.innerHTML = loadingStyles;
document.head.appendChild(styleElement);