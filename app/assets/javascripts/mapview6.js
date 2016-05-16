$( document ).ready(function() {

            // 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
        var polygonPath = [
            new daum.maps.LatLng(37.62979403561626, 127.07663797353126),
            new daum.maps.LatLng(37.629834515536686, 127.07673714037948),
            new daum.maps.LatLng(37.62962494792641, 127.07687286776915 ),
            new daum.maps.LatLng( 37.62958898041638, 127.07676237720148 ),
        ];
        
        // 지도에 표시할 다각형을 생성합니다
        var polygon = new daum.maps.Polygon({
            path:polygonPath, // 그려질 다각형의 좌표 배열입니다
            strokeWeight: 3, // 선의 두께입니다
            strokeColor: '#FDFDFD', // 선의 색깔입니다
            strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'longdash', // 선의 스타일입니다
            fillColor: '#FDFDFD', // 채우기 색깔입니다
            fillOpacity: 0.7 // 채우기 불투명도 입니다
        });
        
        // 지도에 다각형을 표시합니다
        polygon.setMap(map);
        
                
                var iwContent = '<div style="padding:5px;"><a href= "#FEATURES">중앙무대</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new daum.maps.LatLng(37.629701612813015, 127.07674833231573 ), //인포윈도우 표시 위치입니다
                iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
            
            // 인포윈도우를 생성하고 지도에 표시합니다
            var infowindow = new daum.maps.InfoWindow({
                map: map, // 인포윈도우가 표시될 지도
                position : iwPosition, 
                content : iwContent,
                removable : iwRemoveable
            }); 
            
});
        
        
        
        
        
        
            
