// Map 컴포넌트를 초기화합니다.
var container = document.getElementById("myMap");
var options = {
    center: new kakao.maps.LatLng(35.2227101, 126.8493059),
    level: 3
};

var map = new kakao.maps.Map(container, options);

// 마커를 추가합니다.
var markerPosition = new kakao.maps.LatLng(35.2227101, 126.8493059);
var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

// 오버레이를 추가합니다.
var content = '<div class="label"><span class="overlay">마루힐아이비씨지식산업센터 407호</span></div>';
var position = new kakao.maps.LatLng(35.2227101, 126.8493059);
var customOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
    xAnchor: -0.08,
    yAnchor: 1.2
});

customOverlay.setMap(map);