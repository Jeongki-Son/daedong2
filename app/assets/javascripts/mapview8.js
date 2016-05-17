$( document ).ready(function() {

            // 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
        var polygonPath = [
            new daum.maps.LatLng(   37.63050879907899, 127.07894409914202 ),
            new daum.maps.LatLng( 37.63047481659413, 127.07923577723724 ),
            new daum.maps.LatLng(  37.63032842549676, 127.07920730012121),
            new daum.maps.LatLng( 37.6303714158704, 127.07891846428099   ),
        ];
        
        // 지도에 표시할 다각형을 생성합니다
        var polygon = new daum.maps.Polygon({
            path:polygonPath, // 그려질 다각형의 좌표 배열입니다
            strokeWeight: 3, // 선의 두께입니다
            strokeColor: '#7EBF4D', // 선의 색깔입니다
            strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'longdash', // 선의 스타일입니다
            fillColor: '#7EBF4D', // 채우기 색깔입니다
            fillOpacity: 0.7 // 채우기 불투명도 입니다
        });
        
        // 지도에 다각형을 표시합니다
        polygon.setMap(map);
            
            
                    var iwContent = '<div style="padding:5px;"><a href= "#no5">조형대주점</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new daum.maps.LatLng( 37.63050871753506, 127.07906588264282 ), //인포윈도우 표시 위치입니다
                iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
            
            // 인포윈도우를 생성하고 지도에 표시합니다
            var infowindow = new daum.maps.InfoWindow({
                map: map, // 인포윈도우가 표시될 지도
                position : iwPosition, 
                content : iwContent,
                removable : iwRemoveable
            }); 
});