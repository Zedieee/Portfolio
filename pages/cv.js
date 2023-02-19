import { useEffect, useRef } from "react";
import dynamic from 'next/dynamic';


export default function Resume() {
    const viewer = useRef(null);
   
    useEffect(() => {
        import('@pdftron/webviewer').then(() => {
          WebViewer(
            {
              path: '/lib',
              initialDoc: '/lib/pdf/CVBrianGargallo.pdf',
            },
            viewer.current
          ).then((instance) => {
            instance.disableElements(['ribbons']);
            instance.disableElements(['toolsHeader']);
            instance.disableElements(['leftPanel']);
            instance.disableElements(['pageNavOverlay']);
            
          });
        });
      }, []);
  
  
    return (
    
        
<div >
    <div style={{ height: '100vh' }} ref={viewer}>
    
        
    </div>
</div>

      
    )
  }