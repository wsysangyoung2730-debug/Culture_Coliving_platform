declare global {
  type KakaoLatLng = {
    getLat(): number;
    getLng(): number;
  };

  type KakaoMap = {
    getLevel(): number;
    setCenter(position: KakaoLatLng): void;
    setBounds(bounds: KakaoLatLngBounds): void;
    setLevel(level: number): void;
  };

  type KakaoLatLngBounds = {
    extend(position: KakaoLatLng): void;
  };

  type KakaoMarker = {
    setMap(map: KakaoMap | null): void;
  };

  type KakaoCustomOverlay = {
    setMap(map: KakaoMap | null): void;
  };

  type KakaoMaps = {
    LatLng: new (lat: number, lng: number) => KakaoLatLng;
    Map: new (
      container: HTMLElement,
      options: { center: KakaoLatLng; level: number }
    ) => KakaoMap;
    LatLngBounds: new () => KakaoLatLngBounds;
    Marker: new (options: { map: KakaoMap; position: KakaoLatLng }) => KakaoMarker;
    CustomOverlay: new (options: {
      content: HTMLElement;
      map: KakaoMap;
      position: KakaoLatLng;
      yAnchor?: number;
    }) => KakaoCustomOverlay;
    event: {
      addListener(
        target: KakaoMarker | KakaoCustomOverlay,
        type: string,
        handler: () => void
      ): void;
    };
    load(callback: () => void): void;
  };

  interface Window {
    kakao?: {
      maps: KakaoMaps;
    };
  }
}

export {};