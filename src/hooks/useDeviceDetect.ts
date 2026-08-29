import { useState, useEffect } from 'react';

export interface DeviceInfo {
  isMobile: boolean;      // < 768px
  isTablet: boolean;      // 768px - 1023px
  isLaptop: boolean;      // 1024px - 1439px
  isDesktop: boolean;     // >= 1440px
  isTouch: boolean;
  width: number;
  height: number;
  orientation: 'portrait' | 'landscape';
}

export function useDeviceDetect(): DeviceInfo {
  const [device, setDevice] = useState<DeviceInfo>(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const h = typeof window !== 'undefined' ? window.innerHeight : 800;
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    return {
      isMobile: w < 768,
      isTablet: w >= 768 && w < 1024,
      isLaptop: w >= 1024 && w < 1440,
      isDesktop: w >= 1440,
      isTouch,
      width: w,
      height: h,
      orientation: w >= h ? 'landscape' : 'portrait'
    };
  });

  useEffect(() => {
    let timeoutId: any = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        setDevice({
          isMobile: w < 768,
          isTablet: w >= 768 && w < 1024,
          isLaptop: w >= 1024 && w < 1440,
          isDesktop: w >= 1440,
          isTouch,
          width: w,
          height: h,
          orientation: w >= h ? 'landscape' : 'portrait'
        });
      }, 50);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return device;
}
