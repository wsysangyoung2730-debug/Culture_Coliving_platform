type KakaoLatLng = {
  getLat(): number;
  getLng(): number;
};

type KakaoMap = {
  setCenter(position: KakaoLatLng): void;
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
  Marker: new (options: { map: KakaoMap; position: KakaoLatLng }) => KakaoMarker;
  CustomOverlay: new (options: {
    content: HTMLElement;
    map: KakaoMap;
    position: KakaoLatLng;
    yAnchor?: number;
  }) => KakaoCustomOverlay;
  event: {
    addListener(target: KakaoMarker | KakaoCustomOverlay, type: string, handler: () => void): void;
  };
  load(callback: () => void): void;
};

declare global {
  interface Window {
    kakao?: {
      maps: KakaoMaps;
    };
  }
}

export {};
